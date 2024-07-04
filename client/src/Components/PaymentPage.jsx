import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './PaymentPage.css';

const stripePromise = loadStripe('pk_test_51PYMucHeiRi43L6nwn9UoJrbZif9UBqK2dxaPT6zLyBiKjgRThFtXMUa28suvhUH5Ib7A4z3GGfL0AzHAEUf7k3o00WWeW2TWH');

function CheckoutForm({ bookTitle }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      setErrorMessage(error.message);
      setSuccessMessage(null);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookTitle }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { clientSecret } = await response.json();

      const confirmResponse = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmResponse.error) {
        console.error(confirmResponse.error);
        setErrorMessage(confirmResponse.error.message);
        setSuccessMessage(null);
      } else {
        console.log('Payment successful!');
        setSuccessMessage('Payment successful!');
        setErrorMessage(null); // Clear any previous error messages
      }
    } catch (error) {
      console.error('Failed to fetch/create payment intent:', error);
      setErrorMessage(error.message);
      setSuccessMessage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement className="card-element" />
      <button type="submit" disabled={!stripe} className="pay-button">
        Pay Now
      </button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </form>
  );
}

function PaymentPage() {
  const location = useLocation();
  const { bookTitle } = location.state;

  return (
    <div className="payment-page">
      <h1>Payment for {bookTitle}</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm bookTitle={bookTitle} />
      </Elements>
    </div>
  );
}

export default PaymentPage;

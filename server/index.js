const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const stripe = new Stripe('sk_test_51PYMucHeiRi43L6nmuFwWHibMVnKc1EsFEWtYJHQpsj4petBra7zYXb0BjZZKyDH8gFOOQqikImyQdBZmZHg1VVr00k1KjqH2i');

app.use(bodyParser.json());
app.use(cors());


app.post('/create-payment-intent', async (req, res) => {
    try {
      const { paymentMethodId, bookTitle } = req.body;
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'usd',
        payment_method: paymentMethodId,
        confirmation_method: 'manual',
        confirm: true,
        return_url: 'http://localhost:3000/payment-success', 
      });
  
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error)
      
    }
  });
  
app.listen(3001, () => {
  console.log('Server running on port 3001');
});

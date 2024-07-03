import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './Cards/Cards';
import Description from './Cards/Description';
import PaymentPage from './Components/PaymentPage';

const cardData = [
  { url: 'https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg', text: 'To Kill a Mockingbird', price: '500' },
  { url: 'https://m.media-amazon.com/images/I/91n3sOVJ23L._AC_UF1000,1000_QL80_.jpg', text: 'A Tree Grows in Brooklyn', price: '500' },
  { url: 'https://m.media-amazon.com/images/I/618kJT0ZgUL._AC_UF1000,1000_QL80_.jpg', text: 'The Book Thief', price: '500' },
  { url: 'https://m.media-amazon.com/images/I/91D4YvdC0dL._AC_UF1000,1000_QL80_.jpg', text: 'Brave New World', price: '500' },
  { url: 'https://m.media-amazon.com/images/I/91ikNi3cYUL._AC_UF1000,1000_QL80_.jpg', text: 'The Underground Railroad Book', price: '500' },
  { url: 'https://m.media-amazon.com/images/I/81RBTG28sCL._AC_UF1000,1000_QL80_.jpg', text: 'All the Light We Cannot See', price: '500' },
  { url: 'https://m.media-amazon.com/images/M/MV5BZDA1ZmQ2OGMtZDhkMC00ZjRkLWE3ZTMtMzA5ZTk0YjM1OGRmXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg', text: 'The Call of the Wild', price: '500' },
  { url: 'https://m.media-amazon.com/images/I/61n+IWg9twL._AC_UF1000,1000_QL80_.jpg', text: 'The Joy Luck Club', price: '500' },
  { url: 'https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg', text: 'The Great Gatsby', price: '500' }
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards data={cardData} />} />
        <Route path="/description/:text/:price" element={<Description />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;

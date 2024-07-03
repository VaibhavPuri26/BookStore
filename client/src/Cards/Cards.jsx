import React from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css";


function Cards({ data }) {


  return (
    <div className="cards-container">
     
      {data.map((card, index) => (
        <div key={index} className="card">
          <Link to={`/description/${encodeURIComponent(card.text)}/${card.price}`}>
            <img src={card.url} alt='' />
          </Link>
          
        </div>
      ))}
    </div>
  );
}

export default Cards;

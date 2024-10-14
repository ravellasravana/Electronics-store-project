import React from 'react';
import './Smartphones.css';

const Smartphones = () => {
  const smartphones = [
    { id: 1, name: 'iPhone 14', price: '74,999', image: 'iphone14.jpg' },
    { id: 2, name: 'Samsung Galaxy S21', price: '69,999', image: 'galaxy-s21.jpg' },
    // Add more smartphones here
  ];

  return (
    <div>
      <h1>Smartphones</h1>
      <div className="product-list">
        {smartphones.map((phone) => (
          <div key={phone.id} className="product">
            <img src={phone.image} alt={phone.name} />
            <h3>{phone.name}</h3>
            <p>Price: ₹{phone.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smartphones;

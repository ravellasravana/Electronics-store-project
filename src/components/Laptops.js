import React from 'react';
import './Laptops.css';

const Laptops = () => {
  const laptops = [
    { id: 1, name: 'Dell XPS 13', price: '1,19,999', image: 'dell-xps13.jpg' },
    { id: 2, name: 'MacBook Air', price: '99,999', image: 'macbook-air.jpg' },
    // Add more laptops here
  ];

  return (
    <div>
      <h1>Laptops</h1>
      <div className="product-list">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="product">
            <img src={laptop.image} alt={laptop.name} />
            <h3>{laptop.name}</h3>
            <p>Price: ₹{laptop.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptops;

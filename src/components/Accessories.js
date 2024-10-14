import React from 'react';
import './Accessories.css';

const Accessories = () => {
  const accessories = [
    { id: 1, name: 'Wireless Charger', price: '2,999', image: 'wireless-charger.jpg' },
    { id: 2, name: 'Bluetooth Headphones', price: '3,499', image: 'bluetooth-headphones.jpg' },
    // Add more accessories here
  ];

  return (
    <div>
      <h1>Accessories</h1>
      <div className="product-list">
        {accessories.map((accessory) => (
          <div key={accessory.id} className="product">
            <img src={accessory.image} alt={accessory.name} />
            <h3>{accessory.name}</h3>
            <p>Price: ₹{accessory.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;

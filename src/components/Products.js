import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Welcome to Ravella's Electronics Store</h1>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/smartphones">Smartphones</Link>
        </li>
        <li>
          <Link to="/laptops">Laptops</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;

import React from 'react';
import './HorizontalProductList.css';

const HorizontalProductList = ({ products }) => {
  return (
    <div className="horizontal-product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalProductList;

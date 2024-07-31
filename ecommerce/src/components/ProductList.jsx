import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button className="button">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

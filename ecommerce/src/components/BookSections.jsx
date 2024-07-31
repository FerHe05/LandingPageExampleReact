import React from 'react';
import HorizontalProductList from './HorizontalProductList';

const BookSections = ({ products }) => {
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="book-sections">
      {categories.map(category => (
        <div key={category} className="book-section">
          <h2>{category}</h2>
          <HorizontalProductList products={products.filter(product => product.category === category)} />
        </div>
      ))}
    </div>
  );
};

export default BookSections;

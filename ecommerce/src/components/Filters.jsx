import React from 'react';
import './Filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <select>
        <option value="all">All Categories</option>
        <option value="fiction">Fiction</option>
        <option value="romance">Romance</option>
        {/* Adicione mais categorias conforme necessário */}
      </select>
      <select>
        <option value="all">All Prices</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
      <select>
        <option value="all">All Ratings</option>
        <option value="4stars">4 Stars & Up</option>
        <option value="3stars">3 Stars & Up</option>
        <option value="2stars">2 Stars & Up</option>
      </select>
    </div>
  );
};

export default Filters;

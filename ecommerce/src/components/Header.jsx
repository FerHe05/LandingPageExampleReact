import React from 'react';
import './Header.css'; // Adicione este arquivo CSS para estilização

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">E-commerce Site</h1>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/products" className="nav-link">Products</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

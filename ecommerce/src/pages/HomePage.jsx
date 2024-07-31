import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import BookSections from '../components/BookSections';
import Filters from '../components/Filters';
import './HomePage.css'; // Adicione este arquivo CSS para estilização

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulando a busca de produtos de uma API
    setProducts([
      { id: 1, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 2, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 3, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 4, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 5, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 6, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 1, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 2, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 3, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 4, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 5, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 6, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 1, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 2, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 3, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 4, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 5, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 6, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 1, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 2, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 3, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 4, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 5, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 6, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 1, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 2, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 3, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 4, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 5, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 6, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 1, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 2, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 3, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 4, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      { id: 5, name: 'Livro 1', description: 'Descrição do livro 1', category: 'Ficção' },
      { id: 6, name: 'Livro 2', description: 'Descrição do livro 2', category: 'Romance' },
      // Adicione mais produtos conforme necessário
    ]);
  }, []);

  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <div className="search-filters-container">
          <SearchBar />
          <Filters />
        </div>
        <BookSections products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About'
import './App.css';
import Download from './components/Download';
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Download />
      <Footer />
    </>
  );
}

export default App;
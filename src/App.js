import React from 'react';
import './App.css'; // Importa los estilos CSS aquí

import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

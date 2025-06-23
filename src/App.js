import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={
          <>
            <Header />
            <ProductListing />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Header />
            <ShoppingCart />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;

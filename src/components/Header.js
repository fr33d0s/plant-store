import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          GreenLeaf Paradise
        </Link>
        
        <nav className="navigation">
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalQuantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
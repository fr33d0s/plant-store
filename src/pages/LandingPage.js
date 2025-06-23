import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">GreenLeaf Paradise</h1>
        <div className="company-info">
          <p>
            Welcome to GreenLeaf Paradise, your premier destination for beautiful, healthy houseplants. 
            We've been cultivating and sharing the joy of indoor gardening for over a decade, bringing 
            nature's beauty directly to your home. Our carefully curated collection features plants 
            that are perfect for beginners and experienced plant parents alike. From air-purifying 
            varieties to stunning decorative specimens, we have everything you need to create your 
            own indoor oasis.
          </p>
        </div>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
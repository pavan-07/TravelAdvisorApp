import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top-right-buttons">


      </div>
      <div className="hero-section">
        <h1>Welcome to TravelAdvisor.com</h1>
        <p>Plan your next adventure with ease!</p>

      </div>
      <div className="features-section">
        <h2>Reasons to choose us for your next holiday</h2>
        <div className="feature-buttons">
          <button className="feature-btn">
            <i className="fas fa-search"></i> Easy destination search
          </button>
          <button className="feature-btn">
            <i className="fas fa-map"></i> Custom trip planning
          </button>
          <button className="feature-btn">
            <i className="fas fa-lightbulb"></i> Travel recommendations
          </button>
          <button className="feature-btn">
            <i className="fas fa-heart"></i> Save favorite destinations
          </button>
        </div>
      </div>
      </div>
  );
};

export default LandingPage;

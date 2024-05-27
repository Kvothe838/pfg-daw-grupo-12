import React from 'react';
import './Welcome.css';
import logo from '../../assets/LOGO-FYNC.jpg';

const Welcome = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div className="welcome">
      <div className="background-overlay"></div>
      <div className="container">
        <h1>
          <span>Welcome to our</span> <span className="highlight">website</span>
        </h1>
        <h2>Fitness and Nutrition Center</h2>
        <button onClick={onLoginClick}>Login</button>
        <button onClick={onRegisterClick}>Register</button>
      </div>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Welcome;

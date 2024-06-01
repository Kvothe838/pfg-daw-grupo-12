import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/LOGO-FYNC.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ email, onLogout }) => {
  const [showLogout, setShowLogout] = useState(false);

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div className="nav">
      <img src={logo} alt="Logo" className="logos" />
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/contact">Contact Us</Link>
        <div className="dropdown">
          <Link  className="dropbtn">Plan</Link>
          <div className="dropdown-content">
            <Link to="/guerrero-principiante">Guerrero Principiante</Link>
            <Link to="/guerrero-intermedio">Guerrero Intermedio</Link>
            <Link to="/guerrero-avanzado">GuerreroAvanzado</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link  className="dropbtn">Services</Link>
          <div className="dropdown-content">
            <Link to="/nutritional-guide">Guía Nutricional</Link>
            <Link to="/ejercicios">Database Exercises</Link>
            <Link to="/paso">Paso a Paso</Link>
          </div>
        </div>
        {email ? (
          <div className="profile" onClick={handleProfileClick}>
            {email.charAt(0).toUpperCase()}
            {showLogout && <div className="logout" onClick={onLogout}>Logout</div>}
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

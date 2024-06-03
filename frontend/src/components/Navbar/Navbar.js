import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/LOGO-FYNC.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ email, onLogout }) => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="nav">
      {email ? (
        <div className="profile-section">
          <div className="profile" onClick={handleProfileClick}>
            {email.charAt(0).toUpperCase()}
            {showLogout && <div className="logout" onClick={handleLogout}>Logout</div>}
          </div>
        </div>
      ) : (
        <>
          <img src={logo} alt="Logo" className="logos" />
          <div className="links">
            <Link to="/">Inicio</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/contact">Contáctanos</Link>
            <Link to="/plans">Planes de ejercicio</Link>
            <div className="dropdown">
              <Link className="dropbtn">Servicios</Link>
              <div className="dropdown-content">
                <Link to="/nutritional-guide">Guía Nutricional</Link>
                <Link to="/ejercicios">Ejercicios</Link>
                <Link to="/paso">Paso a Paso</Link>
              </div>
            </div>
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

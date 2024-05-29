// Welcome.js

import React from 'react';
import './Welcome.css';
import logo from '../../assets/LOGO-FYNC.jpg';
import Navbar from '../Navbar/Navbar';

const Welcome = () => {
  return (
    <>
      <Navbar />
      <div className="welcome">
        <div className="background-section">
          <div className="background-overlay"></div>
          <div className="container">
            <h1>
              <span>Welcome to our</span> <span className="highlight">website</span>
            </h1>
            <h2>Fitness and Nutrition Center</h2>
          </div>
        </div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="content-section">
        <div className="content">
          <p>¡Bienvenido a FyNC! Tu compañero completo para mantenerte en forma y saludable desde la comodidad de tu hogar. Ofrecemos una amplia variedad de rutinas de ejercicio diseñadas para todos los niveles, desde principiantes hasta avanzados. Ya sea que prefieras yoga relajante, entrenamiento de fuerza intenso o cardio energizante, ¡aquí encontrarás lo que necesitas para mantenerte activo!</p>
          <p>Pero eso no es todo, ¡también estamos comprometidos con tu bienestar nutricional! Nuestro equipo de expertos en nutrición comparte consejos prácticos, recetas saludables y guías para ayudarte a alimentar tu cuerpo de la mejor manera posible. Juntos, estamos aquí para apoyarte en cada paso de tu viaje hacia una vida más saludable y equilibrada. ¡Únete a nuestra comunidad hoy y haz del bienestar una parte integral de tu estilo de vida!</p>
          <p className="text">¡A POR TODAS GUERREROS!</p>
        </div>
      </div>
    </>
  );
};

export default Welcome;

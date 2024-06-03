import React from 'react';
import './Navbar.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';

const Plan = () => {
    return (
        <>
            <Navbar />
            <div className="plan-container">
                <div className="plan-content">
                    <h1>Planes de ejercicio</h1>
                    <p>En nuestro apartado de 'Planes de Ejercicio', te ofrecemos una selección cuidadosamente curada de programas de entrenamiento diseñados para ayudarte a alcanzar tus objetivos fitness desde la comodidad de tu hogar. Ya sea que estés buscando perder peso, tonificar tu cuerpo, mejorar tu flexibilidad o simplemente mantenerte activo, nuestros planes son flexibles y adaptables para satisfacer tus necesidades.</p>
                    <p>Desde entrenamientos de cuerpo completo hasta sesiones específicas de yoga, cardio o fuerza, cada plan ha sido creado por expertos en fitness para maximizar tus resultados y optimizar tu tiempo. ¡Explora nuestra variedad de planes y comienza tu viaje hacia una versión más saludable y en forma de ti mismo hoy mismo</p>
                    <p>Elige el nivel que más se adapte a ti:</p>
                    <div className="dropdown">
              <Link className="dropbttn">Elige algún plan</Link>
              <div className="dropdown-contents">
                <Link to="/guerrero-principiante">Guerrero Principiante</Link>
                <Link to="/guerrero-intermedio">Guerrero Intermedio</Link>
                <Link to="/guerrero-avanzado">Guerrero Avanzado</Link>
              </div>
            </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Plan;

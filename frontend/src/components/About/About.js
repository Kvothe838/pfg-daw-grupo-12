import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <div className="about-content">
                    <h1>Nosotros</h1>
                    <p>Somos un grupo de estudiantes apasionados por la salud y el rendimiento físico. Nos hemos unido para crear esta web dedicada al entrenamiento y la nutrición, con el objetivo de compartir nuestros conocimientos y experiencias con el deporte con todos aquellos que buscan mejorar su calidad de vida.</p>
                    <p>En nuestro equipo, nos impulsamos por la curiosidad y el deseo de aprender constantemente, por lo que estamos en continua formación para ofrecerte la mejor información relevante y actualizada.</p>
                    <p>Nuestro objetivo, es brindarte recursos útiles, consejos y programas efectivos para lograr ayudarte a alcanzar tus objetivos de salud y fitness. Creemos firmemente en la importancia de un enfoque equilibrado que considere tanto el entrenamiento físico como la nutrición adecuada.</p>
                    <p>En nuestra web encontrarás:</p>
                    <ul>
                        <li>Planes de ejercicio adaptados a cada nivel.</li>
                        <li>Información que te ayudará a alcanzar el siguiente nivel.</li>
                        <li>Ayuda e información para realizar ciertos ejercicios físicos.</li>
                        <li>Información nutricional.</li>
                    </ul>
                    <p>Estamos comprometidos a construir una comunidad donde todos puedan aprender, crecer y motivarse mutuamente. ¡Únete a nosotros en este viaje hacia una vida más saludable y activa!</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;

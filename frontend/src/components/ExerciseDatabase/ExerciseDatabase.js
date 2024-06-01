import React from 'react';
import './ExerciseDatabase.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ExerciseDatabase = () => {
  return (
    <>
      <Navbar />
      <div className="exercise-container">
        <div className="exercise-content">
          <h1>Base de Datos de Ejercicios</h1>
          <p>En esta seción, os enseñaremos como realizar los ejercicios anteriormente pautados</p>
          <ol>
            <li><strong>Flexiones:</strong>
              <ul>
                <li>Comienza en una posición de tabla con las manos colocadas ligeramente más anchas que los hombros.</li>
                <li>Mantén el cuerpo en línea recta desde la cabeza hasta los talones.</li>
                <li>Dobla los codos para bajar el cuerpo hacia el suelo, manteniendo los codos cerca del cuerpo.</li>
                <li>Extiende los brazos para volver a la posición inicial.</li>
              </ul>
            </li>
            <li><strong>Flexiones de rodillas:</strong>
              <ul>
                <li>Realiza el mismo movimiento que las flexiones tradicionales, pero con las rodillas apoyadas en el suelo para reducir la resistencia.</li>
              </ul>
            </li>
            <li><strong>Flexiones explosivas:</strong>
              <ul>
                <li>Realiza una flexión tradicional, pero al empujar hacia arriba, hazlo con suficiente fuerza para levantar las manos del suelo.</li>
              </ul>
            </li>
            <li><strong>Sentadillas en el sitio:</strong>
              <ul>
                <li>Mantén los pies separados a la altura de los hombros.</li>
                <li>Baja el cuerpo doblando las rodillas y empujando las caderas hacia atrás, como si te fueras a sentar en una silla.</li>
                <li>Mantén la espalda recta y baja hasta que los muslos estén paralelos al suelo.</li>
                <li>Vuelve a la posición inicial llevando el peso hacia los talones y extendiendo las piernas.</li>
              </ul>
            </li>
            <li><strong>Plancha de rodillas:</strong>
              <ul>
                <li>Apoya las manos en el suelo y las rodillas en el suelo, manteniendo el cuerpo en línea recta desde la cabeza hasta las rodillas.</li>
                <li>Mantén esta posición durante el tiempo deseado, asegurándote de mantener el abdomen contraído y evitar que las caderas se hundan o se levanten.</li>
              </ul>
            </li>
            {/* Add other exercises similarly */}
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExerciseDatabase;

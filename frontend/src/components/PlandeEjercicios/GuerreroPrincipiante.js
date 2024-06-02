import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './GuerreroPrincipiante.css';

const GuerreroPrincipiante = ({ plans }) => {
  return (
    <>
      <Navbar />
      <div className="principiante-container">
        <div className="principiante-content">
          <h1>Bienvenido al Plan de Ejercicios para Guerreros Principiantes</h1>
          <p>
            Diseñado especialmente para aquellos que están dando sus primeros pasos en el mundo del fitness. En este emocionante viaje, te guiaremos desde los fundamentos básicos hasta convertirte en un guerrero en forma y saludable.
          </p>

          <h2>Plan 1: Rutina de 3 días a la semana</h2>
          <div className="plan-section">
            <h3>Día 1: Entrenamiento de Cuerpo Completo</h3>
            <ol>
              <li>
                <strong>Calentamiento:</strong>
                <ul>
                  <li>5 minutos de marcha en el lugar o saltos suaves.</li>
                </ul>
              </li>
              <li>
                <strong>Ejercicios de fuerza (realizar 2 series de cada ejercicio):</strong>
                <ul>
                  <li>Flexiones de rodillas (5-8 repeticiones)</li>
                  <li>Sentadillas en el sitio (8-10 repeticiones)</li>
                  <li>Plancha de rodillas (mantener durante 15-20 segundos)</li>
                  <li>Puente de glúteos (8-10 repeticiones)</li>
                </ul>
              </li>
              <li>
                <strong>Descanso:</strong>
                <ul>
                  <li>Descansa 1-2 minutos entre cada serie y ejercicio.</li>
                </ul>
              </li>
              <li>
                <strong>Estiramiento:</strong>
                <ul>
                  <li>Estirar los principales grupos musculares durante 5-10 minutos al finalizar el entrenamiento.</li>
                </ul>
              </li>
            </ol>

            <h3>Día 2: Entrenamiento de Cardio y Flexibilidad</h3>
            <ol>
              <li>
                <strong>Calentamiento:</strong>
                <ul>
                  <li>5 minutos de marcha en el lugar o movimientos articulares suaves.</li>
                </ul>
              </li>
              <li>
                <strong>Ejercicios de cardio y flexibilidad (realizar cada ejercicio durante 30 segundos, descansar 30 segundos entre cada ejercicio):</strong>
                <ul>
                  <li>Marcha en el lugar</li>
                  <li>Tijeras</li>
                  <li>Estocadas suaves</li>
                  <li>Estiramiento de brazos y piernas</li>
                </ul>
              </li>
              <li>
                <strong>Repetir los ejercicios cardiovasculares y de flexibilidad durante un total de 20-25 minutos.</strong>
              </li>
            </ol>

            <h3>Día 3: Descanso Activo o Actividades de Baja Intensidad</h3>
            <p>Realiza una actividad ligera como caminar, nadar o hacer yoga durante 30-45 minutos.</p>
          </div>

          <h2>Plan 2: Rutina de 3 días a la semana</h2>
          <div className="plan-section">
            <h3>Día 1: Entrenamiento de Cuerpo Completo</h3>
            <ol>
              <li>
                <strong>Calentamiento:</strong>
                <ul>
                  <li>5 minutos de marcha en el lugar o saltos suaves.</li>
                </ul>
              </li>
              <li>
                <strong>Ejercicios de fuerza (realizar 2 series de cada ejercicio):</strong>
                <ul>
                  <li>Flexiones de rodillas (5-8 repeticiones)</li>
                  <li>Sentadillas en el sitio (8-10 repeticiones)</li>
                  <li>Plancha de rodillas (mantener durante 15-20 segundos)</li>
                  <li>Puente de glúteos (8-10 repeticiones)</li>
                </ul>
              </li>
              <li>
                <strong>Descanso:</strong>
                <ul>
                  <li>Descansa 1-2 minutos entre cada serie y ejercicio.</li>
                </ul>
              </li>
              <li>
                <strong>Estiramiento:</strong>
                <ul>
                  <li>Estirar los principales grupos musculares durante 5-10 minutos al finalizar el entrenamiento.</li>
                </ul>
              </li>
            </ol>

            <h3>Día 2: Entrenamiento de Cardio y Flexibilidad</h3>
            <ol>
              <li>
                <strong>Calentamiento:</strong>
                <ul>
                  <li>5 minutos de marcha en el lugar o movimientos articulares suaves.</li>
                </ul>
              </li>
              <li>
                <strong>Ejercicios de cardio y flexibilidad (realizar cada ejercicio durante 30 segundos, descansar 30 segundos entre cada ejercicio):</strong>
                <ul>
                  <li>Marcha en el lugar</li>
                  <li>Tijeras</li>
                  <li>Estocadas suaves</li>
                  <li>Estiramiento de brazos y piernas</li>
                </ul>
              </li>
              <li>
                <strong>Repetir los ejercicios cardiovasculares y de flexibilidad durante un total de 20-25 minutos.</strong>
              </li>
            </ol>

            <h3>Día 3: Descanso Activo o Actividades de Baja Intensidad</h3>
            <p>Realiza una actividad ligera como caminar, nadar o hacer yoga durante 30-45 minutos.</p>
          </div>

          

          {plans.map((plan, index) => (
            <div key={index} className="plan-section">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
              <div>{plan.details}</div>

            </div>
          ))}

<p>Recuerda que es importante escuchar a tu cuerpo y ajustar la intensidad según tu nivel de comodidad. Con el tiempo, puedes aumentar la intensidad y la duración de los ejercicios a medida que te sientas más fuerte y seguro. ¡Disfruta de tu entrenamiento y continúa avanzando!</p>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuerreroPrincipiante;

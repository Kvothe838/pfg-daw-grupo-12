import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './GuerreroPrincipiante.css';
import { ManualPlans } from '../../utils/staticPlans';

const GuerreroIntermedio = ({ plans }) => {
  return (
    <>
      <Navbar />
      <div className="principiante-container">
        <div className="principiante-content">
          <h1>¡Bienvenido al Plan de Ejercicios para Guerreros Intermedios!</h1>
          <p>
            Si ya has recorrido el camino de los principiantes y estás buscando llevar tu entrenamiento al siguiente nivel, ¡has llegado al lugar adecuado! Este plan está diseñado para desafiar tus límites y ayudarte a alcanzar nuevas alturas en tu condición física.
          </p>


        
          {
            ManualPlans?.map((plan, index) => (
              <>
                <h2>{plan?.title}</h2>
                <small>{plan?.description}</small>
                <div className='plan-section'>
                  {plan?.details}
                </div>
              </>
            ))
          }

          {plans.map((plan, index) => (
            <>
              <h2>{plan.title}</h2>
              <div key={index} className="plan-section">
                <p>{plan.description}</p>
                <div>{plan.details}</div>
              </div>
            </>
          ))}

            <p>A medida que avanzas en tu nivel de condición física, puedes aumentar la carga de trabajo, la intensidad de los ejercicios 
            o la duración de los intervalos de cardio. ¡Sigue desafiándote a ti mismo y disfruta del progreso!</p>


        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuerreroIntermedio;

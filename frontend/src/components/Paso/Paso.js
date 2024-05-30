import React from 'react';
import './Paso.css';
import Navbar from '../Navbar/Navbar';

const Paso = () => {
  const steps = [
    {
      title: 'Autoevaluación del Nivel Actual',
      description: 'Animamos a los usuarios a evaluar honestamente su nivel de condición física y habilidades actuales. Esto puede incluir aspectos como fuerza, resistencia, flexibilidad y habilidades técnicas en diferentes tipos de ejercicio.',
    },
    {
      title: 'Establecimiento de Objetivos Claros',
      description: 'Les ayudamos a establecer objetivos específicos y alcanzables para su progreso. Estos objetivos podrían incluir alcanzar ciertos hitos de ejercicio (por ejemplo, correr una cierta distancia, levantar un cierto peso), mejorar la técnica en ejercicios específicos, aumentar la resistencia o mejorar la flexibilidad.',
    },
    {
      title: 'Diseño de un Plan de Entrenamiento',
      description: 'Proporcionamos orientación sobre cómo diseñar un plan de entrenamiento efectivo que esté alineado con sus objetivos de progreso. Esto puede incluir la selección de ejercicios y rutinas adecuadas para su nivel de habilidad, así como la planificación de la frecuencia y la intensidad del entrenamiento.',
    },
    {
      title: 'Enfoque en la Nutrición y el Descanso',
      description: 'Recordamos a los usuarios que la nutrición adecuada y el descanso son fundamentales para el progreso en el fitness. Les proporcionamos consejos sobre cómo mantener una dieta equilibrada y nutritiva, así como la importancia de dormir lo suficiente y permitir que el cuerpo se recupere adecuadamente entre sesiones de entrenamiento.',
    },
    {
      title: 'Mantener la Consistencia y la Paciencia',
      description: 'Les recordamos que el progreso en el fitness lleva tiempo y requiere paciencia y dedicación. Les animamos a mantenerse consistentes con su plan de entrenamiento y a no desanimarse por los contratiempos o las dificultades en el camino.',
    },
    {
      title: 'Celebrar los Logros y Ajustar el Plan',
      description: 'Finalmente, les alentamos a celebrar cada logro en su viaje de transformación física y a ajustar su plan de entrenamiento según sea necesario a medida que avanzan hacia su próximo nivel de guerrero.',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="paso-container">
        <h2 className="paso-header">Paso a Paso</h2>
        </div>
        <br></br>
        <div className='bck'>
            <br></br>
        <div className="paso-content">
          <div className='brief'>
          En esta sección, ayudamos a los usuarios a entender cómo pueden avanzar de un nivel de guerrero a otro, ya sea de principiante a intermedio, o de intermedio a imbatible. Aquí están los pasos clave que podríamos incluir:
          </div>
          {steps.map((step, index) => (
            <div key={index} className="paso-step">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
        
          ))}
        </div>
        </div>
    </>
  );
};

export default Paso;

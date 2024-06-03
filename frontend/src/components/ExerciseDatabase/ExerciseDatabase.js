import React, { useState } from 'react';
import './ExerciseDatabase.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import flexionesImage  from '../../assets/flexionesImage.jpeg';
import rodillo from '../../assets/rodillo.jpeg';
import pose from '../../assets/5position.jpeg';
import ball from '../../assets/ball.jpeg';
import bench from  '../../assets/benchjump.jpeg';
import full from '../../assets/fullweight.jpeg';
import halfsit from '../../assets/halfsit.jpeg';
import handweight from '../../assets/handweight.png';
import hang from '../../assets/hang.jpeg';
import handup from '../../assets/hansup.jpeg';
import jump from '../../assets/jump.jpeg';
import laydown from '../../assets/laydown.jpeg';
import plancha from '../../assets/plancha.png';
import plancharodillo from '../../assets/plancharodillo.png';
import pushup from '../../assets/pushup.png';
import scisors from '../../assets/scicorrs.jpeg';
import scod from '../../assets/scod.png';
import skip from '../../assets/skipping.jpeg';
import tablejump from '../../assets/tablejump.jpeg';
import tablesit from '../../assets/tablesit.jpeg';
import weight from '../../assets/weight.jpeg';
import weightlifting from '../../assets/weightlifiting.jpeg';
import mountain from '../../assets/mountain.jpeg';

const exercises = [
  { title: "Flexiones", details: ["Comienza en una posición de tabla con las manos colocadas ligeramente más anchas que los hombros.", "Mantén el cuerpo en línea recta desde la cabeza hasta los talones.", "Dobla los codos para bajar el cuerpo hacia el suelo, manteniendo los codos cerca del cuerpo.", "Extiende los brazos para volver a la posición inicial."], image: flexionesImage  },
  { title: "Flexiones de rodillas", details: ["Realiza el mismo movimiento que las flexiones tradicionales, pero con las rodillas apoyadas en el suelo para reducir la resistencia."], image: rodillo },
  { title: "Flexiones explosivas", details: ["Realiza una flexión tradicional, pero al empujar hacia arriba, hazlo con suficiente fuerza para levantar las manos del suelo."], image: jump },
  { title: "Sentadillas en el sitio", details: ["Mantén los pies separados a la altura de los hombros.", "Baja el cuerpo doblando las rodillas y empujando las caderas hacia atrás, como si te fueras a sentar en una silla.", "Mantén la espalda recta y baja hasta que los muslos estén paralelos al suelo.", "Vuelve a la posición inicial llevando el peso hacia los talones y extendiendo las piernas."], image: halfsit },
  { title: "Plancha de rodillas", details: ["Apoya las manos en el suelo y las rodillas en el suelo, manteniendo el cuerpo en línea recta desde la cabeza hasta las rodillas.", "Mantén esta posición durante el tiempo deseado, asegurándote de mantener el abdomen contraído y evitar que las caderas se hundan o se levanten."], image: plancha },
  { title: "Plancha lateral con elevación de pierna", details: ["Acuéstate de lado apoyándote en un codo y con el cuerpo en línea recta.", "Levanta la cadera del suelo para formar una línea recta desde los hombros hasta los pies.", "Levanta la pierna superior hacia el techo y luego bájala sin tocar el suelo.", "Repite el movimiento y luego cambia de lado."], image: plancharodillo },
  { title: "Puente de glúteos", details: ["Acuéstate boca arriba con las rodillas dobladas y los pies apoyados en el suelo.", "Levanta las caderas hacia arriba formando una línea recta desde los hombros hasta las rodillas.", "Aprieta los glúteos en la parte superior del movimiento y luego baja lentamente las caderas de nuevo al suelo."], image: laydown },
  { title: "Marcha en el lugar", details: ["Simplemente levanta las rodillas alternativamente mientras mantienes el torso erguido y los brazos oscilando naturalmente."], image: skip },
  { title: "Saltos suaves", details: ["Salta hacia arriba con ambos pies al mismo tiempo y aterriza suavemente con las rodillas ligeramente flexionadas."], image: bench },
  { title: "Tijeras", details: ["Da un paso hacia adelante con un pie y un paso hacia atrás con el otro, manteniendo el torso erguido.", "Alterna los pies en un movimiento de tijera mientras mantienes un ritmo constante."], image: scisors },
  { title: "Estocadas suaves", details: ["Da un paso hacia adelante con un pie y dobla ambas rodillas para bajar el cuerpo hacia el suelo.", "Asegúrate de que ambas rodillas estén dobladas en un ángulo de 90 grados y mantén la espalda recta.", "Empuja con el talón del pie delantero para volver a la posición inicial y repite con el otro pie."], image: scod },
  { title: "Dominadas asistidas o con banda", details: ["Agarra la barra con las manos ligeramente más separadas que el ancho de los hombros.", "Levanta el cuerpo hacia arriba hasta que la barbilla esté por encima de la barra, manteniendo el cuerpo en línea recta.", "Usa una banda de resistencia o un dispositivo de asistencia si es necesario para ayudarte a completar el movimiento."], image:hang },
  { title: "Burpees", details: ["Comienza de pie con los pies separados al ancho de los hombros.", "Agáchate y coloca las manos en el suelo frente a ti.", "Salta o lleva los pies hacia atrás para entrar en una posición de plancha.", "Haz una flexión de brazos, bajando el pecho hacia el suelo.", "Haz una flexión explosiva hacia adelante para llevar los pies de vuelta hacia las manos.", "Salta hacia arriba con los brazos extendidos por encima de la cabeza."], image: pose },
  { title: "Saltos de tijera", details: ["Comienza de pie con los pies juntos.", "Salta hacia los lados, separando las piernas y extendiendo los brazos hacia los lados.", "Vuelve a juntar los pies en el aire y aterriza suavemente, repitiendo el movimiento de lado a lado."], image: handup },
  { title: "Mountain climbers", details: ["Colócate en posición de plancha, con las manos debajo de los hombros y el cuerpo en línea recta desde la cabeza hasta los talones.", "Lleva una rodilla hacia el pecho y luego cambia rápidamente de pierna, alternando entre las piernas en un movimiento de correr en el lugar."], image:  mountain},
  { title: "Plancha con giros de cadera", details: ["Colócate en posición de plancha, con las manos debajo de los hombros y el cuerpo en línea recta desde la cabeza hasta los talones.", "Gira las caderas hacia un lado, llevando la cadera hacia el suelo, y luego hacia el otro lado, alternando los giros de cadera mientras mantienes la posición de plancha."], image: pushup },
  { title: "Peso muerto con mancuernas", details: ["Sostén una mancuerna en cada mano, con los brazos extendidos frente a ti y los pies separados al ancho de los hombros.", "Dobla las caderas hacia atrás mientras mantienes la espalda recta, bajando las mancuernas hacia el suelo.", "Mantén las piernas ligeramente flexionadas y los brazos extendidos.", "Regresa a la posición inicial llevando las caderas hacia adelante y estirando las piernas."], image: weight },
  { title: "Saltos de caja o saltos verticales", details: ["Colócate frente a una caja resistente o plataforma elevada.", "Dobla ligeramente las rodillas y los brazos, y luego salta hacia arriba, llevando las rodillas hacia el pecho y extendiendo los brazos por encima de la cabeza.", "Aterriza suavemente en la caja con las rodillas ligeramente flexionadas."], image: tablejump },
  { title: "Remo con barra o mancuernas", details: ["Sostén una barra o mancuernas con las manos a la altura de los hombros, con las palmas mirando hacia abajo y los brazos extendidos.", "Dobla las caderas hacia atrás y baja el torso hacia adelante, manteniendo la espalda recta.", "Levanta la barra o las mancuernas hacia el torso, doblando los codos y llevando los omóplatos hacia atrás.", "Baja la barra o las mancuernas de vuelta hacia abajo y repite el movimiento."], image: handweight },
  { title: "Pull-ups ponderadas", details: ["Agarra la barra con las manos ligeramente más separadas que el ancho de los hombros y cuelga del brazo extendido.", "Levanta el cuerpo hacia arriba hasta que la barbilla esté por encima de la barra, manteniendo el cuerpo en línea recta.", "Usa un cinturón de pesas o un chaleco ponderado para añadir resistencia a las dominadas si es necesario."], image: tablesit },
  { title: "Kettlebell swings", details: ["Coloca una kettlebell en el suelo frente a ti y ponte en cuclillas para agarrarla con ambas manos.", "Con un movimiento explosivo de las caderas, lleva la kettlebell hacia arriba hasta la altura de los hombros.", "Deja que la kettlebell caiga hacia abajo entre las piernas mientras mantienes las piernas ligeramente flexionadas y la espalda recta.", "Repite el movimiento de balanceo, usando la fuerza de las caderas para impulsar la kettlebell hacia arriba."], image: ball },
  { title: "Peso muerto rumano", details: ["Sostén una barra o mancuernas con las manos separadas al ancho de los hombros y los brazos extendidos frente a ti.", "Dobla las caderas hacia atrás mientras mantienes la espalda recta, bajando la barra o las mancuernas hacia el suelo.", "Mantén las piernas ligeramente flexionadas y la barra o las mancuernas cerca de las piernas.", "Regresa a la posición inicial llevando las caderas hacia adelante y estirando las piernas."] , image: full},
  { title: "Zancadas con mancuernas", details: ["Sostén una mancuerna en cada mano a los lados del cuerpo.", "Da un paso hacia adelante con una pierna y dobla ambas rodillas para bajar el cuerpo hacia el suelo.", "Asegúrate de que ambas rodillas estén dobladas en un ángulo de 90 grados y mantén la espalda recta.", "Empuja con el talón del pie delantero para volver a la posición inicial y repite con el otro pie."], image: weightlifting }
];


const ExerciseDatabase = () => {
  const [visibleExercises, setVisibleExercises] = useState(9); // Show 9 exercises initially
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const showMoreExercises = () => {
    setVisibleExercises(prev => prev + 10); // Show 9 more exercises when "Show More" button is clicked
  };

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
  };

  const closeModal = () => {
    setSelectedExercise(null);
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredExercises = exercises.filter(exercise =>
    exercise.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <Navbar />
      <div className="exercise-container">
        <div className="exercise-content">
          <h1 className='ex'>Base de Datos de Ejercicios</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar ejercicio..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <p >En esta sección, os enseñaremos cómo realizar los ejercicios anteriormente pautados.</p>
         <div className="exercise-grid">
            {filteredExercises.slice(0, visibleExercises).map((exercise) => (
              <div key={exercise.id} className="exercise-card" onClick={() => openModal(exercise)}>
                <img src={exercise.image} alt={exercise.title} className="exercise-image" />
                <h3>{exercise.title}</h3>
              </div>
            ))}
          </div>
          {visibleExercises < filteredExercises.length && (
            <button className="read-more-button" onClick={showMoreExercises}>Ver más</button>
          )}
        </div>
      </div>
      {selectedExercise && (
        <div className="moda-background" onClick={closeModal}>
          <div className="moda" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedExercise.image} alt={selectedExercise.title} className="moda-image" />
            <h2>{selectedExercise.title}</h2>
            <div className="exercise-details">
              {selectedExercise.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ExerciseDatabase;
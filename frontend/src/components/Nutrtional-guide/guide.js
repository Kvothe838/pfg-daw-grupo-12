import React, { useState } from 'react';
import './guide.css';
import avocadoImage from '../../assets/avocado.jpeg';
import oliveOilImage from '../../assets/oil.jpeg';
import nutsImage from '../../assets/nuts.jpeg';
import seedsImage from '../../assets/seeds.jpeg';
import fishImage from '../../assets/fish.jpeg';
import olivesImage from '../../assets/olive.jpeg';
import chickenImage from '../../assets/chicken.jpeg';
import eggsImage from '../../assets/eggs.jpeg';
import legumesImage from '../../assets/legume.jpeg';
import tofuImage from '../../assets/tofu.jpeg';
import dairyImage from '../../assets/dairy.jpeg';
import meatImage from '../../assets/meat.jpeg';
import fruitsImage from '../../assets/fruit.jpeg';
import vegetablesImage from '../../assets/veg.jpeg';
import grainsImage from '../../assets/grain.jpeg';
import wholeGrainImage from '../../assets/wholegrain.jpeg';
import Navbar from '../Navbar/Navbar';

const Guide = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const items = [
    { title: 'Aguacates', image: avocadoImage, description: 'Son ricos en grasas monoinsaturadas, que son beneficiosas para la salud del corazón.' },
    { title: 'Aceite de oliva virgen extra', image: oliveOilImage, description: 'Contiene principalmente grasas monoinsaturadas y es una opción saludable para cocinar y aderezar ensaladas.' },
    { title: 'Frutos secos', image: nutsImage, description: 'Son una fuente de grasas saludables, proteínas y fibra.' },
    { title: 'Semillas', image: seedsImage, description: 'Son ricas en ácidos grasos omega-3 y omega-6, que son importantes para la salud cardiovascular y cerebral.' },
    { title: 'Pescado graso', image: fishImage, description: 'Contienen ácidos grasos omega-3, que tienen numerosos beneficios para la salud, incluyendo la reducción del riesgo de enfermedades cardíacas.' },
    { title: 'Aceitunas', image: olivesImage, description: 'Son una buena fuente de grasas monoinsaturadas y polifenoles, que tienen propiedades antioxidantes.' },
    { title: 'Pollo', image: chickenImage, description: 'Es una carne magra y una excelente fuente de proteínas de alta calidad.' },
    { title: 'Huevos', image: eggsImage, description: 'Son una fuente completa de proteínas y contienen todos los aminoácidos esenciales.' },
    { title: 'Legumbres', image: legumesImage, description: 'Son una fuente de proteínas vegetales y fibra.' },
    { title: 'Tofu', image: tofuImage, description: 'Es una excelente fuente de proteínas para vegetarianos y veganos, y es bajo en grasas saturadas.' },
    { title: 'Productos lácteos', image: dairyImage, description: 'Son fuentes de proteínas de alta calidad, así como de calcio y otros nutrientes esenciales.' },
    { title: 'Carne de res magra', image: meatImage, description: 'Es rica en proteínas y nutrientes como el hierro y el zinc.' },
    { title: 'Frutas', image: fruitsImage, description: 'Son una excelente fuente de fibra dietética, vitaminas y antioxidantes.' },
    { title: 'Verduras', image: vegetablesImage, description: 'Son ricas en fibra, vitaminas y minerales esenciales para la salud.' },
    { title: 'Granos enteros', image: grainsImage, description: 'Contienen fibra y otros nutrientes beneficiosos para la digestión y la salud en general.' },
    { title: 'Pan integral', image: wholeGrainImage, description: 'Es una buena fuente de fibra y nutrientes esenciales.' },
  ];

  return (
    <>
      <Navbar />
      <div className="guide">
        <header className="header">
          <h1>Guía Nutricional</h1>
        </header>
        <main className="main-content">
          <div className="contents">
            <section className="intro">
              <p>
                En nuestro apartado de 'Guía Nutricional', te ofrecemos recursos completos y prácticos para ayudarte a alimentarte de manera saludable y equilibrada. Sabemos que la nutrición es fundamental para alcanzar tus metas fitness y mantener un estilo de vida saludable en general.
              </p>
              <p>
                Nuestra guía está diseñada para proporcionarte información útil sobre cómo planificar comidas saludables, equilibrar tus nutrientes, y hacer elecciones inteligentes en tu dieta diaria. Desde consejos sobre cómo estructurar tus comidas hasta recetas deliciosas y nutritivas, estamos aquí para apoyarte en cada paso del camino.
              </p>
              <p>
                Ya sea que estés buscando perder peso, ganar masa muscular o simplemente mejorar tu salud en general, nuestra guía nutricional te ayudará a tomar decisiones informadas y adoptar hábitos alimenticios que te lleven más cerca de tus objetivos. ¡Explora nuestros recursos y haz de la nutrición un pilar fundamental de tu bienestar!
              </p>
            </section>
          </div>
            <br></br>
          <section className="section grasas-saludables">
            <div className="content-block">
              <h2>Grasas saludables</h2>
              <ul>
                {items.slice(0, 6).map((item, index) => (
                  <li key={index} onClick={() => openModal(item)}>
                    <img src={item.image} alt={item.title} className="icon" />
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section fuentes-proteinas">
            <div className="content-block">
              <h2>Fuentes de proteínas</h2>
              <ul>
                {items.slice(6, 12).map((item, index) => (
                  <li key={index} onClick={() => openModal(item)}>
                    <img src={item.image} alt={item.title} className="icon" />
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section ricos-fibra">
            <div className="content-block">
              <h2>Ricos en fibra</h2>
              <ul>
                {items.slice(12).map((item, index) => (
                  <li key={index} onClick={() => openModal(item)}>
                    <img src={item.image} alt={item.title} className="icon" />
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {modalContent && (
            <div className="modal show" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={modalContent.image} alt={modalContent.title} className="icon" />
                <h2>{modalContent.title}</h2>
                <p>{modalContent.description}</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Guide;

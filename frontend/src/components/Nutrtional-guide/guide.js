import React from 'react';
import './guide.css';
import pyramidImage from '../../assets/nutritional.jpg';
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
    return (
        <> 
        < Navbar />

        <div className="guide">
            <header className="header">
                <h1>Guía Nutricional</h1>
            </header>
            <main className="main-content">
                <section className="intro">
                    <p>En nuestro apartado de 'Guía Nutricional', te ofrecemos recursos completos y prácticos para ayudarte a alimentarte de manera saludable y equilibrada. Sabemos que la nutrición es fundamental para alcanzar tus metas fitness y mantener un estilo de vida saludable en general.</p>
                    <p>Nuestra guía está diseñada para proporcionarte información útil sobre cómo planificar comidas saludables, equilibrar tus nutrientes, y hacer elecciones inteligentes en tu dieta diaria. Desde consejos sobre cómo estructurar tus comidas hasta recetas deliciosas y nutritivas, estamos aquí para apoyarte en cada paso del camino.</p>
                    <p>Ya sea que estés buscando perder peso, ganar masa muscular o simplemente mejorar tu salud en general, nuestra guía nutricional te ayudará a tomar decisiones informadas y adoptar hábitos alimenticios que te lleven más cerca de tus objetivos. ¡Explora nuestros recursos y haz de la nutrición un pilar fundamental de tu bienestar!</p>
                </section>
                <section className="content">
                    <div className="content-block">
                        <h2>La pirámide alimenticia</h2>
                        <p>La pirámide alimenticia es una guía visual que muestra qué alimentos y en qué cantidad se deben consumir para tener una dieta equilibrada.</p>
                        <img src={pyramidImage} alt="Pirámide alimenticia" className="content-image"/>
                    </div>
                    <div className="content-block">
                        <h2>Grasas saludables</h2>
                        <ul>
                            <li><img src={avocadoImage} alt="Aguacates" className="icon"/> <strong>Aguacates:</strong> Son ricos en grasas monoinsaturadas, que son beneficiosas para la salud del corazón.</li>
                            <li><img src={oliveOilImage} alt="Aceite de oliva" className="icon"/> <strong>Aceite de oliva virgen extra:</strong> Contiene principalmente grasas monoinsaturadas y es una opción saludable para cocinar y aderezar ensaladas.</li>
                            <li><img src={nutsImage} alt="Frutos secos" className="icon"/> <strong>Frutos secos (nueces, almendras, avellanas, etc.):</strong> Son una fuente de grasas saludables, proteínas y fibra.</li>
                            <li><img src={seedsImage} alt="Semillas" className="icon"/> <strong>Semillas (chia, lino, calabaza, girasol, etc.):</strong> Son ricas en ácidos grasos omega-3 y omega-6, que son importantes para la salud cardiovascular y cerebral.</li>
                            <li><img src={fishImage} alt="Pescado graso" className="icon"/> <strong>Pescado graso (salmón, sardinas, trucha, etc.):</strong> Contienen ácidos grasos omega-3, que tienen numerosos beneficios para la salud, incluyendo la reducción del riesgo de enfermedades cardíacas.</li>
                            <li><img src={olivesImage} alt="Aceitunas" className="icon"/> <strong>Aceitunas:</strong> Son una buena fuente de grasas saludables, especialmente cuando se consumen en forma de aceite de oliva.</li>
                        </ul>
                    </div>
                    <div className="content-block">
                        <h2>Fuentes de proteínas</h2>
                        <ul>
                            <li><img src={chickenImage} alt="Pollo" className="icon"/> <strong>Pollo:</strong> Es una excelente fuente de proteínas magras y es versátil en la cocina.</li>
                            <li><img src={fishImage} alt="Pescado" className="icon"/> <strong>Pescado (salmón, atún, trucha, etc.):</strong> Los pescados grasos son ricos en proteínas de alta calidad y ácidos grasos omega-3.</li>
                            <li><img src={eggsImage} alt="Huevos" className="icon"/> <strong>Huevos:</strong> Son una excelente fuente de proteínas de alta calidad y también contienen otros nutrientes importantes como vitaminas B12 y D.</li>
                            <li><img src={legumesImage} alt="Legumbres" className="icon"/> <strong>Legumbres (lentejas, garbanzos, frijoles, etc.):</strong> Son una fuente de proteínas vegetales, fibra y carbohidratos complejos.</li>
                            <li><img src={tofuImage} alt="Tofu y tempeh" className="icon"/> <strong>Tofu y tempeh:</strong> Son productos de soja ricos en proteínas y son opciones populares para dietas vegetarianas y veganas.</li>
                            <li><img src={dairyImage} alt="Productos lácteos" className="icon"/> <strong>Productos lácteos (yogur griego, queso cottage, leche):</strong> Son buenas fuentes de proteínas de alta calidad, además de contener calcio y otros nutrientes.</li>
                            <li><img src={meatImage} alt="Carne magra" className="icon"/> <strong>Carne magra (ternera magra, pavo, cerdo magro):</strong> Son fuentes ricas en proteínas y también proporcionan hierro y otros nutrientes.</li>
                        </ul>
                    </div>
                    <div className="content-block">
                        <h2>Ricos en fibra</h2>
                        <ul>
                            <li><img src={fruitsImage} alt="Frutas" className="icon"/> <strong>Frutas:</strong> Manzanas, peras, plátanos, fresas, arándanos, naranjas, etc. Las frutas frescas son una excelente fuente de fibra, especialmente cuando se consumen con la piel.</li>
                            <li><img src={vegetablesImage} alt="Verduras" className="icon"/> <strong>Verduras:</strong> Brócoli, espinacas, zanahorias, col rizada, coliflor, pimientos, etc. Las verduras son ricas en fibra y nutrientes esenciales para la salud.</li>
                            <li><img src={legumesImage} alt="Legumbres" className="icon"/> <strong>Legumbres:</strong> Lentejas, garbanzos, frijoles negros, frijoles rojos, guisantes, etc. Las legumbres son una excelente fuente de fibra soluble e insoluble, así como de proteínas.</li>
                            <li><img src={grainsImage} alt="Cereales integrales" className="icon"/> <strong>Cereales integrales:</strong> Avena, arroz integral, quinoa, cebada, bulgur, trigo sarraceno, etc. Los cereales integrales son ricos en fibra y proporcionan energía duradera.</li>
                            <li><img src={nutsImage} alt="Frutos secos y semillas" className="icon"/> <strong>Frutos secos y semillas:</strong> Almendras, nueces, semillas de chía, semillas de lino, semillas de calabaza, etc. Los frutos secos y las semillas son ricos en fibra, grasas saludables y otros nutrientes.</li>
                            <li><img src={wholeGrainImage} alt="Pan integral" className="icon"/> <strong>Pan integral y productos de grano entero:</strong> Pan integral, pasta integral, arroz integral, cereales integrales, etc. Estos productos son una buena fuente de fibra y nutrientes esenciales.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
        </>
    );

};

export default Guide;

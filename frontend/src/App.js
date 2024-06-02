import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import Welcome from '../src/components/Welcome/Welcome';
import LoginForm from '../src/components/Login/Login';
import RegisterForm from '../src/components/RegisterForm/RegisterForm';
import Nutricional from '../src/components/Nutrtional-guide/guide';
import Paso from '../src/components/Paso/Paso';
import Footer from '../src/components/Footer/Footer';
import Contact from '../src/components/Contact/Contact';
import About from '../src/components/About/About';
import Excercise from '../src/components/ExerciseDatabase/ExerciseDatabase';
import GuerreroPrincipiante from '../src/components/PlandeEjercicios/GuerreroPrincipiante';
import GuerreroIntermedio from '../src/components/PlandeEjercicios/GuerreroIntermedio';
import GuerreroAvanzado from '../src/components/PlandeEjercicios/GuerreroAvanzado';
import PlanSelection from '../src/components/PlanSelection/PlanSelection';
import PlanCRUD from '../src/components/PlanCRUD/PlanCRUD';
import CreatePlan from '../src/components/PlanCRUD/CreatePlan';
import UpdatePlan from '../src/components/PlanCRUD/UpdatePlan';


const App = () => {  
  const [user, setUser] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [plans, setPlans] = useState(() => {
    const savedPlans = localStorage.getItem('plans');
    return savedPlans ? JSON.parse(savedPlans) : [];
  });

  // Load plans from local storage when the component mounts
  // useEffect(() => {
  //   const savedPlans = JSON.parse(localStorage.getItem('plans'));
  //   if (savedPlans) {
  //     setPlans(savedPlans);
  //   }
  // }, []);

  // Save plans to local storage whenever the plans state changes
  useEffect(() => {
    localStorage.setItem('plans', JSON.stringify(plans));
  }, [plans]);

  const handleLogin = (email, password) => {
    setUser({ email, password });
  };

  const handleRegister = (data) => {
    setUser(null);
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedPlan(null);
  };
  const handlePlanSelect = (planType) => {
    setSelectedPlan(planType);
  };

  const handlePlanCreate = (newPlan) => {
    setPlans([...plans, newPlan]);
  };

  const handlePlanUpdate = (updatedPlan) => {
    setPlans(plans.map(plan => plan.id === updatedPlan.id ? updatedPlan : plan));
  };

  return (
    <Router>
      <div>
        <Navbar email={user?.email} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
          <Route path="/nutritional-guide" element={<Nutricional />} />
          <Route path="/paso" element={<Paso />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ejercicios" element={<Excercise />} />
          <Route path="/guerrero-principiante" element={<GuerreroPrincipiante plans={plans.filter(p => p.planType === 'Guerrero principiante')} />} />
<Route path="/guerrero-intermedio" element={<GuerreroIntermedio plans={plans.filter(p => p.planType === 'Guerrero intermedio')} />} />
<Route path="/guerrero-avanzado" element={<GuerreroAvanzado plans={plans.filter(p => p.planType === 'Guerrero avanzado')} />} />

          <Route path="/plan-selection" element={<PlanSelection onSelectPlan={handlePlanSelect} />} />
          {selectedPlan && (
            <>
             <Route path="/plan-crud" element={<PlanCRUD plan={selectedPlan} plans={plans} />} />
             <Route path="/create-plan" element={<CreatePlan onCreate={handlePlanCreate} selectedPlan={selectedPlan} />} />
        <Route path="/update-plan/:id" element={<UpdatePlan onUpdate={handlePlanUpdate} plans={plans} />} />
          </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

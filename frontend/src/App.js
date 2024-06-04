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
import Plan from '../src/components/Navbar/Plan';

const App = () => {  
  const [user, setUser] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [plans, setPlans] = useState(() => {
    const savedPlans = localStorage.getItem('plans');
    return savedPlans ? JSON.parse(savedPlans) : [];
  });

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
    const url = 'http://localhost:8080/admin/planes-ejercicios';
    let token = localStorage.getItem("loginToken")
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
      body: JSON.stringify({ Nombre: newPlan?.title, Descripcion: newPlan?.description, Ejercicios: newPlan?.details }),
      // credentials: 'include'
    };

    fetch(url, requestOptions)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
    setPlans([...plans, newPlan]);
  };

  const handlePlanUpdate = (updatedPlan) => {
    
    const url = 'http://localhost:8080/admin/planes-ejercicios?id=2';
    let token = localStorage.getItem("loginToken")
    const requestOptions = {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
      body: JSON.stringify({ Nombre: updatedPlan?.title, Descripcion: updatedPlan?.description, Ejercicios: updatedPlan?.details }),
      // credentials: 'include'
    };

    fetch(url, requestOptions)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))

    setPlans(plans.map(plan => plan.id === updatedPlan.id ? updatedPlan : plan));

  };

  const handleDelete = (id) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  const handleSelectPlan = (id) => {
    const selected = plans.find(plan => plan.id === id);
    setSelectedPlan(selected ? selected.planType : '');
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
          <Route path="/Plans" element={<Plan />} />
          <Route path="/ejercicios" element={<Excercise />} />
          <Route path="/guerrero-principiante" element={<GuerreroPrincipiante plans={plans.filter(p => p.planType === 'Guerrero principiante')} />} />
          <Route path="/guerrero-intermedio" element={<GuerreroIntermedio plans={plans.filter(p => p.planType === 'Guerrero intermedio')} />} />
          <Route path="/guerrero-avanzado" element={<GuerreroAvanzado plans={plans.filter(p => p.planType === 'Guerrero avanzado')} />} />

          <Route path="/plan-selection" element={<PlanSelection onSelectPlan={handlePlanSelect} />} />
          {selectedPlan && (
            <>
              <Route path="/plan-crud" element={<PlanCRUD plans={plans.filter(p => p.planType === selectedPlan)} onDelete={handleDelete} onSelectPlan={handleSelectPlan} />} />
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

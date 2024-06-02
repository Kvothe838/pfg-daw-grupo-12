import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanSelection.css';

const PlanSelection = ({ onSelectPlan }) => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const navigate = useNavigate();

  const handleAccept = () => {
    onSelectPlan(selectedLevel);
    navigate('/plan-crud');
  };

  return (
    <div className='containers'>
      <h2>Elige el nivel que más se adapte a ti</h2>
      <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
        <option value="">Elige algún plan</option>
        <option value="Guerrero principiante">Guerrero principiante</option>
        <option value="Guerrero intermedio">Guerrero intermedio</option>
        <option value="Guerrero avanzado">Guerrero avanzado</option>
      </select>
      <button onClick={handleAccept}>Aceptar</button>
    </div>
  );
};

export default PlanSelection;

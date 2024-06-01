import React, { useState } from 'react';

const PlanSelection = ({ onSelectPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleAccept = () => {
    onSelectPlan(selectedPlan);
  };

  return (
    <div>
      <h2>Elige el nivel que más se adapte a ti</h2>
      <select value={selectedPlan} onChange={handlePlanChange}>
        <option value="">Elige algún plan</option>
        <option value="principiante">Guerrero principiante</option>
        <option value="intermedio">Guerrero intermedio</option>
        <option value="avanzado">Guerrero avanzado</option>
      </select>
      <button onClick={handleAccept}>Aceptar</button>
    </div>
  );
};

export default PlanSelection;

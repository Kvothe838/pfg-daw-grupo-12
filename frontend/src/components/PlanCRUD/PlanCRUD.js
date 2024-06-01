// src/components/PlanCRUD/PlanCRUD.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlanCRUD = ({ plan, plans }) => {
  const [operation, setOperation] = useState('');
  const navigate = useNavigate();

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleSelect = () => {
    if (operation === 'create') {
      navigate('/create-plan');
    } else {
      // Handle other operations
    }
  };

  return (
    <div>
      <h2>Selected Plan: {plan}</h2>
      <select value={operation} onChange={handleOperationChange}>
        <option value="">Choose operation</option>
        <option value="create">Create</option>
        <option value="read">Read</option>
        <option value="update">Update</option>
        <option value="delete">Delete</option>
      </select>
      {operation && <button onClick={handleSelect}>Select</button>}

      <h3>Existing Plans:</h3>
      <ul>
        {plans
          .filter(p => p.planType === plan)
          .map((p, index) => (
            <li key={index}>
              {p.title}: {p.description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PlanCRUD;

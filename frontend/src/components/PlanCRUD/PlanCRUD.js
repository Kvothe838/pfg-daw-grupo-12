// src/components/PlanCRUD/PlanCRUD.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanCRUD.css';

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
      // Handle other operations if needed
      navigate('/update-plan');
    }
  };

  return (
    <div className='containers'> 
      <h2>Selected Plan: {plan}</h2>
      <div className="dropdowns">
      <select value={operation} onChange={handleOperationChange}>
        <option value="">Choose operation</option>
        <option value="create">Create</option>
        <option value="update">Update</option>
        <option value="delete">Delete</option>
      </select>
      {operation && <button onClick={handleSelect}>Select</button>}
      </div>

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

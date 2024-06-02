// src/components/UpdatePlan/UpdatePlan.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdatePlan.css';

const UpdatePlan = ({ onUpdate, plans }) => {
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fullPlan, setFullPlan] = useState('');
  const navigate = useNavigate();

  const handleSelectPlan = (id) => {
    const plan = plans.find(plan => plan.id === id);
    setSelectedPlanId(id);
    setTitle(plan.title);
    setDescription(plan.description);
    setFullPlan(plan.fullPlan);
  };

  const handleSave = () => {
    const updatedPlan = {
      id: selectedPlanId,
      title,
      description,
      fullPlan,
      type: plans.find(plan => plan.id === selectedPlanId).type,
    };
    onUpdate(updatedPlan);
    setTitle('');
    setDescription('');
    setFullPlan('');
    setSelectedPlanId(null);
    navigate('/plan-selection');
  };

  return (
    <div className="update-plan-container">
      {!selectedPlanId ? (
        <>
          <h2>Select Plan to Update</h2>
          <ul>
            {plans.map(plan => (
              <li key={plan.id} onClick={() => handleSelectPlan(plan.id)}>
                {plan.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>Update Plan</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            placeholder="Full Plan"
            value={fullPlan}
            onChange={(e) => setFullPlan(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setSelectedPlanId(null)}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default UpdatePlan;

// src/components/PlanCRUD/UpdatePlan.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdatePlan = ({ plan, plans, onUpdatePlan }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const handlePlanSelect = (e) => {
    const plan = plans.find(p => p.title === e.target.value);
    setSelectedPlan(plan);
    setTitle(plan.title);
    setDescription(plan.description);
    setDetails(plan.details);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPlan = {
      ...selectedPlan,
      title,
      description,
      details,
    };

    onUpdatePlan(updatedPlan);
    navigate('/plan-selection');
  };

  return (
    <div>
      <h2>Update a plan for {plan}</h2>
      <select onChange={handlePlanSelect}>
        <option value="">Select Plan</option>
        {plans
          .filter(p => p.planType === plan)
          .map((p, index) => (
            <option key={index} value={p.title}>
              {p.title}
            </option>
          ))}
      </select>
      {selectedPlan && (
        <form>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <label>
            Full Diet Plan:
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdatePlan;

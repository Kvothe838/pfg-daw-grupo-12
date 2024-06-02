import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdatePlan.css';

const UpdatePlan = ({ onUpdate, plans }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fullPlan, setFullPlan] = useState('');

  useEffect(() => {
    const plan = plans.find(plan => plan.id === id);
    if (plan) {
      setTitle(plan.title);
      setDescription(plan.description);
      setFullPlan(plan.details);
    }
  }, [id, plans]);

  const handleSave = () => {
    const updatedPlan = {
      id,
      title,
      description,
      details: fullPlan,
      planType: plans.find(plan => plan.id === id).planType,
    };
    onUpdate(updatedPlan);
    navigate('/plan-crud');
  };

  return (
    <div className="update-plan-container">
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
      <button onClick={() => navigate('/plan-crud')}>Cancel</button>
    </div>
  );
};

export default UpdatePlan;

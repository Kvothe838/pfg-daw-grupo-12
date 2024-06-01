// src/components/PlanCRUD/CreatePlan.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePlan.css';

const CreatePlan = ({ plan, onCreatePlan }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    const newPlan = {
      title,
      description,
      planType: plan,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlan),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Plan created', data);
        onCreatePlan(newPlan); // Update the state with the new plan
        setMessage('Plan created successfully');
      })
      .catch(error => {
        console.error('Error creating plan:', error);
      });
  };

  const handleCancel = () => {
    navigate('/plan-crud');
  };

  return (
    <div>
      <h2>Create a new plan for {plan}</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
      {message && (
        <div className="modal">
          <p>{message}</p>
          <button onClick={() => setMessage('')}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CreatePlan;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePlan.css';

const CreatePlan = ({ plan, onCreatePlan }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    const newPlan = {
      title,
      description,
      details,
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

  const handleCloseModal = () => {
    setMessage('');
    navigate('/plan-selection');
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
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleCloseModal}>
          Cancel
        </button>
      </form>
      {message && (
        <div className="modal">
          <p>{message}</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CreatePlan;

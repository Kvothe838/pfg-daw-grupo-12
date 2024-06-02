import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; 
import './CreatePlan.css';

const CreatePlan = ({ selectedPlan , onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    const newPlan = {
      id: uuidv4(), // Add this line to generate a unique ID
      title,
      description,
      details,
      type: selectedPlan,
    };
    onCreate(newPlan);
    setTitle('');
    setDescription('');
    setDetails('');
    navigate('/plan-selection');
  };

  const handleCloseModal = () => {
    setMessage('');
    navigate('/plan-selection');
  };

  return (
    <div className='containes'>
      <h2>Create a new plan for {selectedPlan}</h2>
      <form>
        <label>
          Title:
          <input
            value={selectedPlan}
          />
        </label>
        <br />
        <label>
          Description:
          <input
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
        <button type="button" onClick={handleCreate}>
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

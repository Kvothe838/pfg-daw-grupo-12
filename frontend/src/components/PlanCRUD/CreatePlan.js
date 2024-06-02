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
      id: uuidv4(),
      title,
      description,
      details,
      planType: selectedPlan,
    };
    onCreate(newPlan);
    setMessage('Plan created successfully!');
  };

  const handleCloseModal = () => {
    setMessage('');
    navigate('/plan-crud');
  };

  return (
    <div className='containers'>
      <h2>Create a new plan for {selectedPlan}</h2>
      <form>
    <label className="form-label">
      Title:
      <input
        className="form-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </label>
    <br />
    <label className="form-label">
      Description:
      <input
        className="form-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </label>
    <br />
    <label className="form-label">
      Full Diet Plan:
      <textarea
        className="form-textarea"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
    </label>
    <br />
    <button type="button" className="form-button" onClick={handleCreate}>
      Save
    </button>
    <button type="button" className="form-button" onClick={handleCloseModal}>
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

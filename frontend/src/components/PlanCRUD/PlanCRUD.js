import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanCRUD.css';
import Modal from '../Modal/Modal';
import { ManualPlans } from '../../utils/staticPlans';

const PlanCRUD = ({ plans, onDelete, selectedPlan }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleDelete = (id) => {
    onDelete(id);
    setModalMessage('Plan deleted successfully!');
    // setShowModal(true);
  };

  const handleUpdate = (id) => {
    navigate(`/update-plan/${id}`);
  };

  const handleCreate = () => {
    navigate('/create-plan');
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
    // navigate('/plan-selection');
  };

  return (
    <div className='containers'>
      <h2>Plans for {selectedPlan} </h2>
      <button onClick={handleCreate} className="button create-button">Create New Plan</button>
      <ul className="plan-list">
        {ManualPlans.map(plan => (
          <li onClick={() => navigate('/guerrero-principiante')} key={plan.id} id="manual-plan" className="plan-item">
            <div>{plan.title}</div>
            <div>{plan.description}</div>
          </li>
        ))}
        {plans.map(plan => (
          <li key={plan.id} className="plan-item">
            <span>{plan.title}</span>
            <button onClick={() => handleUpdate(plan.id)} className="button update-button">Update</button>
            <button onClick={() => handleDelete(plan.id)} className="button delete-button">Delete</button>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal message={modalMessage} onClose={closeModal} />
      )}
    </div>
  );
};

export default PlanCRUD;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanCRUD.css';
import Modal from '../Modal/Modal';

const PlanCRUD = ({ plans, onDelete, selectedPlan }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleDelete = (id) => {
    onDelete(id);
    setModalMessage('Plan deleted successfully!');
    setShowModal(true);
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
    navigate('/plan-selection');
  };

  return (
    <div className='containers'>
      <h2>Plans </h2>
      <button onClick={handleCreate} className="button create-button">Crear nuevo plan</button>
      <ul className="plan-list">
        {plans.map(plan => (
          <li key={plan.id} className="plan-item">
            <span>{plan.title}</span>
            <button onClick={() => handleUpdate(plan.id)} className="button update-button">Editar</button>
            <button onClick={() => handleDelete(plan.id)} className="button delete-button">Eliminar</button>
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

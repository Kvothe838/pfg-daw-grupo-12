import React from 'react';
import './Modal.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className="modals">
      <div className="modal-contents">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

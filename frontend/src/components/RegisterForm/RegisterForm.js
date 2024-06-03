// src/components/RegisterForm.js

import React, { useState } from 'react';
import './RegisterForm.css';
import {  useNavigate ,Link } from 'react-router-dom';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return password.length >= 7 && hasUpperCase && hasNumber;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.trim() === '') {
      setError('Username is required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Formato de email inválido.');
      return;
    }
    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 7 caracteres de longitud, contener una letra mayúscula y un número.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');

    // Fake API call
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      console.log('Register successful', data);
      onRegister(data);
      navigate('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="background"></div>
      <div className="register-form">
        <h2>Crear Cuenta</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

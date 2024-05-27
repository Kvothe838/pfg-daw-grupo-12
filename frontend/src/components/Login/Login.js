import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return /(?=.*[0-9])(?=.*[A-Z]).{7,}/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Formato de email inválido.');
      return;
    }
    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 7 caracteres de longitud, contener una letra mayúscula y un número.');
      return;
    }

    setError('');
    const url = 'http://localhost:8080/login';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };

    fetch(url, requestOptions)
        .then(response => {
          if (!response.ok) {
            if (response.status === 401) {
              throw new Error('Email o contraseña incorrectos');
            } else {
              throw new Error('Login failed');
            }
          }
          return response.json();
        })
        .then(data => {
          console.log('Login successful', data);
          onLogin(email, password);
        })
        .catch(error => {
          setError(error.message);
          console.log('Form submit error', error);
        });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

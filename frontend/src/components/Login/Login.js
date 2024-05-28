import React, { useState } from 'react';
import '../RegisterForm/RegisterForm.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return password.length >= 7 && hasUpperCase && hasNumber;
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
    // const url = 'http://localhost:8080/login';
    const url= 'https://jsonplaceholder.typicode.com/posts';
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
    <div className="register-form">
      <h2>Welcome Back !!</h2>
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
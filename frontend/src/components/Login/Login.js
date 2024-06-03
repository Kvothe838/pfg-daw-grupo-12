import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      setError('Invalid email format.');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 7 characters long, contain an uppercase letter and a number.');
      return;
    }

    setError('');
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };

    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Incorrect email or password.');
          } else {
            throw new Error('Login failed.');
          }
        }
        return response.json();
      })
      .then(data => {
        console.log('Login successful', data);
        onLogin(email, password);
        navigate('/plan-selection');
      })
      .catch(error => {
        setError(error.message);
        console.log('Form submit error', error);
      });
  };

  return (
    <>
      <div className="background-login"></div>
      <div className="login-form">
        <h2>Bienvenido!</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar</button>
          <p>¿Todavía no te has registrado? <Link to={'/register'}> Registrarse! </Link> </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

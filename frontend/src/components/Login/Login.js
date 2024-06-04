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
      body: JSON.stringify({ email, contrasenia: password })
    };

    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Email o contraseña incorrecto.');
          } else {
            throw new Error('El login falló. Por favor, vuelva a intentarlo.');
          }
        }
        return response.json();
      })
      .then(data => {
        console.log('Login successful', data);
        localStorage.setItem("loginToken", data?.token)
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

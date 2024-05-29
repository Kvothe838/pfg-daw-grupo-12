import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import Welcome from '../src/components/Welcome/Welcome';
import LoginForm from '../src/components/Login/Login';
import RegisterForm from '../src/components/RegisterForm/RegisterForm';
import Nutricional from './components/Nutrtional-guide/guide';

import './index.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    setUser({ email, password });
  };

  const handleRegister = (data) => {
    setUser(null);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar email={user?.email} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
          <Route path="/nutritional-guide" element={<Nutricional />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

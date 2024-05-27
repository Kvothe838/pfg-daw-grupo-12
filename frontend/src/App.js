import React, { useState } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import LoginForm from '../src/components/Login/Login';
import './index.css';
import Welcome from '../src/components/Welcome/Welcome';


const App = () => {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLogin = (email, password) => {
    setUser({ email, password });
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  return (
    <div>
      {!user && !showLoginForm && !showRegisterForm && (
        <Welcome onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      )}
      {showLoginForm && <LoginForm onLogin={handleLogin} />}
      {showRegisterForm && <div>Register Form Placeholder</div>}
      {user && <Navbar email={user.email} onLogout={handleLogout} />}
    </div>
  );
};

export default App;

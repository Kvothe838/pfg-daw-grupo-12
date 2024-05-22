import React, { useState } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import LoginForm from '../src/components/Login/Login';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (email) => {
    setUser({ email });
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <Navbar email={user?.email} onLogout={handleLogout} />
      {user ? (
        <div>Welcome, {user.email}</div>
      ) : (
        showLogin ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={() => setShowLogin(true)}>Login</button>
          </div>
        )
      )}
    </div>
  );
};

export default App;

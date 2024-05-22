import React, { useState } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import LoginForm from '../src/components/Login/Login';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = (email) => {
    setUser({ email });
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLoginForm(false);
  };

  return (
    <div>
      {!user && !showLoginForm && (
        <div className="container">
          <button onClick={() => setShowLoginForm(true)}>Login</button>
        </div>
      )}
      {showLoginForm && <LoginForm onLogin={handleLogin} />}
      {user && <Navbar email={user.email} onLogout={handleLogout} />}
    </div>
  );
};

export default App;

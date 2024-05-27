import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ email, onLogout }) => {
  const [showLogout, setShowLogout] = useState(false);

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <div className="dropdown">
          <button className="dropbtn">Exercises</button>
          <div className="dropdown-content">
            <a href="/guide-plan">Guide Plan</a>
            <a href="/nutritional-guide">Nutritional Guide</a>
          </div>
        </div>
        {email && (
          <div className="profile" onClick={handleProfileClick}>
            {email.charAt(0).toUpperCase()}
            {showLogout && <div className="logout" onClick={onLogout}>Logout</div>}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

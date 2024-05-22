import React from 'react';

const Navbar = ({ email, onLogout }) => {
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
        {email ? (
          <div className="profile">
            {email.charAt(0).toUpperCase()}
            <div className="logout" onClick={onLogout}>Logout</div>
          </div>
        ) : (
          <a href="/login" onClick={(e) => e.preventDefault()}>Login</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

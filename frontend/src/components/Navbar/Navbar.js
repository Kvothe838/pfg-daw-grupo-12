import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li className="dropdown">
                    <a href="#exercises" className="dropbtn">Exercises</a>
                    <div className="dropdown-content">
                        <a href="#diet">Nutritional Diet</a>
                        <a href="#guide">Guide Plan</a>
                    </div>
                </li>
                <li><a href="#contact">Contact Us</a></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

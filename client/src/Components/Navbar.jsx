import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <i className="navbar-logo">BookWorld</i>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/about" className="navbar-link">About</Link></li>
        <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

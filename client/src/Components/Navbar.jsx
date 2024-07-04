import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <i className="navbar-logo">BookWorld</i>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

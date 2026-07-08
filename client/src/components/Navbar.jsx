import React from 'react';
import { X, Menu } from 'lucide-react';

function Navbar({ isMenuOpen, toggleMenu, toggleModal, setIsMenuOpen }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="#home" className="navbar-logo">
            <img src="/devnxt-tab-logo.png" alt="DevNxt Studio" className="logo-icon" />
            <span className="logo-text">DevNxt Studio</span>
          </a>
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
            <button onClick={toggleModal} className="btn btn-primary btn-nav">Get Started</button>
          </div>
          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

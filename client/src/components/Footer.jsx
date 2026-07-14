import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

function Footer({ toggleModal }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/devnxt-tab-logo.png" alt="DevNxt Studio" className="footer-logo-icon" />
              <span className="footer-logo-text">DevNxt Studio</span>
            </div>
            <p className="footer-tagline">
              Building the future of software, one clean codebase at a time.
            </p>
            <div className="social-links">
              <a href="#home" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#home" className="social-link" aria-label="GitHub"><Github size={20} /></a>
              <a href="#home" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#home" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <button onClick={toggleModal} style={{ textAlign: 'left', background: 'none', border: 'none', padding: '0', color: 'inherit', cursor: 'pointer' }}>Contact</button>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <div className="footer-links">
              <a href="#services">Web Development</a>
              <a href="#services">Mobile Apps</a>
              <a href="#services">UI/UX Design</a>
              <a href="#services">Cloud Solutions</a>
            </div>
          </div>

          <div className="footer-section footer-contact">
            <h4>Get in Touch</h4>
            <p><Mail size={16} className="footer-icon" /> poojithap410@gmail.com</p>
            <p><Phone size={16} className="footer-icon" /> +91 8367422982 </p>
            <p><MapPin size={16} className="footer-icon" /> Hyderabad, Telangana</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DevNxt Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

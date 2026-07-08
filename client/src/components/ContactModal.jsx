import React, { useState } from 'react';
import { X } from 'lucide-react';

function ContactModal({ toggleModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://devnxt-studio.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent.'
        });
        setFormData({ name: '', email: '', phone: '' });
        setTimeout(() => toggleModal(), 2000);
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Could not connect to the server. Please check if the backend is running.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={toggleModal}>
          <X size={24} />
        </button>
        <div className="modal-header">
          <h2 className="modal-title">Get in <span className="text-gradient">Touch</span></h2>
          <p className="modal-subtitle">Fill out the brief form and our tech lead will connect in 24 hours.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="+91 98765 43210" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          {status.message && (
            <div className={`form-status ${status.type}`}>
              {status.message}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;

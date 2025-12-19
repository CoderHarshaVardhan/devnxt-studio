import React, { useEffect, useState } from 'react';
import { Search, Palette, Code, ShieldCheck, RefreshCw, Globe, Laptop, PenTool, Smartphone, Wrench, Cloud, Database, Cpu, Layout, X, Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import './Home.css'

function Home() {
  const [showModal, setShowModal] = useState(false);
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

  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setShowModal(!showModal);
    setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://devnxt-studio.onrender.com//api/contact', {
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
        setTimeout(() => setShowModal(false), 2000);
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
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick)
    })

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in')
    animatedElements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
      observer.observe(el)
    })

    // Cleanup
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick)
      })
      animatedElements.forEach(el => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <a href="#home" className="navbar-logo">
              <img src="/devnxt-tab-logo.png" alt="DevNxt Studio" className="logo-icon" />
              <span className="logo-text">DevNxt Studio</span>
            </a>
            <div className="navbar-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#career">Career</a>
              <a href="#blog">Blog</a>
              <button onClick={toggleModal} className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-background"></div>
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            Scalable <span className="text-gradient">Web & Software</span> Solutions for Growing Businesses
          </h1>
          <p className="hero-subtitle">
            We design, build, and maintain high-performance digital products with speed and reliability. 
            Transform your vision into powerful software that drives real business results.
          </p>
          <div className="hero-cta">
            <button onClick={toggleModal} className="btn btn-primary btn-lg">Get a Free Quote</button>
            <a href="#portfolio" className="btn btn-secondary btn-lg">View Our Work</a>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS SECTION */}
      <section className="trust-section section">
        <div className="container">
          <p className="trust-statement fade-in">
            Trusted by startups, institutions, and growing teams
          </p>
          <div className="stats-grid">
            <div className="stat-card fade-in-up">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card fade-in-up">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-card fade-in-up">
              <div className="stat-icon">✓</div>
              <div className="stat-number">98%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
            <div className="stat-card fade-in-up">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section-lg" id="services">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="section-description">
              Comprehensive digital solutions tailored to accelerate your business growth
            </p>
          </div>
          
          <div className="services-grid">
            <div className="card fade-in-up">
              <div className="card-icon">
                <Globe size={32} />
              </div>
              <h3 className="card-title">Web Application Development</h3>
              <p className="card-description">
                Custom web applications built with modern frameworks. Scalable, secure, and optimized for performance.
              </p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">
                <Laptop size={32} />
              </div>
              <h3 className="card-title">Full-Stack Development</h3>
              <p className="card-description">
                End-to-end development from database architecture to user interface. Complete solutions that work seamlessly.
              </p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">
                <PenTool size={32} />
              </div>
              <h3 className="card-title">UI/UX Design</h3>
              <p className="card-description">
                User-centered design that converts. Beautiful interfaces backed by research and usability testing.
              </p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">
                <Smartphone size={32} />
              </div>
              <h3 className="card-title">Mobile Development</h3>
              <p className="card-description">
                Native and cross-platform mobile apps. Deliver exceptional experiences on iOS and Android.
              </p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">
                <Wrench size={32} />
              </div>
              <h3 className="card-title">Maintenance & Support</h3>
              <p className="card-description">
                Ongoing support and optimization. Keep your applications running smoothly with proactive maintenance.
              </p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">
                <Cloud size={32} />
              </div>
              <h3 className="card-title">Cloud Solutions</h3>
              <p className="card-description">
                Cloud architecture and deployment. Scalable infrastructure that grows with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-us-section section-lg" id="about">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              Why <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="section-description">
              We combine technical excellence with business acumen to deliver exceptional results
            </p>
          </div>
          
          <div className="advantages-grid">
            <div className="advantage-card fade-in-up">
              <div className="advantage-number">01</div>
              <div className="advantage-icon-wrapper">
                <div className="advantage-icon">⚡</div>
              </div>
              <div className="advantage-content">
                <h4>Agile Execution Model</h4>
                <p>Rapid iterations and continuous delivery. We adapt quickly to changing requirements and market conditions.</p>
                <div className="advantage-metric">
                  <span className="metric-value">2x</span>
                  <span className="metric-label">Faster Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="advantage-card fade-in-up">
              <div className="advantage-number">02</div>
              <div className="advantage-icon-wrapper">
                <div className="advantage-icon">💰</div>
              </div>
              <div className="advantage-content">
                <h4>Cost-Effective Engagement</h4>
                <p>Transparent pricing with no hidden costs. Get enterprise-quality solutions without the enterprise price tag.</p>
                <div className="advantage-metric">
                  <span className="metric-value">40%</span>
                  <span className="metric-label">Cost Savings</span>
                </div>
              </div>
            </div>
            
            <div className="advantage-card fade-in-up">
              <div className="advantage-number">03</div>
              <div className="advantage-icon-wrapper">
                <div className="advantage-icon">🏗️</div>
              </div>
              <div className="advantage-content">
                <h4>Clean, Scalable Code</h4>
                <p>Built for the long term. Our code is maintainable, well-documented, and follows industry best practices.</p>
                <div className="advantage-metric">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Code Quality</span>
                </div>
              </div>
            </div>
            
            <div className="advantage-card fade-in-up">
              <div className="advantage-number">04</div>
              <div className="advantage-icon-wrapper">
                <div className="advantage-icon">💬</div>
              </div>
              <div className="advantage-content">
                <h4>Transparent Communication</h4>
                <p>Regular updates and clear documentation. You're always in the loop with project progress and decisions.</p>
                <div className="advantage-metric">
                  <span className="metric-value">24/7</span>
                  <span className="metric-label">Support Available</span>
                </div>
              </div>
            </div>

            <div className="advantage-card fade-in-up">
              <div className="advantage-number">05</div>
              <div className="advantage-icon-wrapper">
                <div className="advantage-icon">🚀</div>
              </div>
              <div className="advantage-content">
                <h4>Cutting-Edge Technology</h4>
                <p>We leverage the latest frameworks and tools to build future-proof solutions that scale with your business.</p>
                <div className="advantage-metric">
                  <span className="metric-value">15+</span>
                  <span className="metric-label">Tech Stack</span>
                </div>
              </div>
            </div>

            <div className="advantage-card fade-in-up">
              <div className="advantage-number">06</div>
              <div className="advantage-icon-wrapper">
                <div className="advantage-icon">🎯</div>
              </div>
              <div className="advantage-content">
                <h4>Results-Driven Approach</h4>
                <p>We focus on delivering measurable business outcomes, not just features. Your success is our success.</p>
                <div className="advantage-metric">
                  <span className="metric-value">98%</span>
                  <span className="metric-label">Client Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="tech-stack-section section-lg">
        <div className="container">
          <div className="tech-stack-container">
            <div className="tech-stack-content fade-in-up">
              <span className="section-badge">Tech Stack</span>
              <h2 className="tech-stack-title">
                We've Built Cutting-Edge <br />
                Solutions <span className="text-gradient">Using...</span>
              </h2>
              <p className="tech-stack-description">
                We have successfully delivered innovative and scalable technology solutions to leading clients across multiple industries.
              </p>
            </div>
            
            <div className="tech-grid fade-in-up">
              <div className="tech-card nextjs">
                <Layout className="tech-icon" size={40} strokeWidth={1.5} />
                <span className="tech-name">Next.js</span>
              </div>
              <div className="tech-card react">
                <Palette className="tech-icon" size={40} strokeWidth={1.5} />
                <span className="tech-name">React</span>
              </div>
              <div className="tech-card nodejs">
                <Code className="tech-icon" size={40} strokeWidth={1.5} />
                <span className="tech-name">Node.js</span>
              </div>
              <div className="tech-card mongodb">
                <Database className="tech-icon" size={40} strokeWidth={1.5} />
                <span className="tech-name">MongoDB</span>
              </div>
              <div className="tech-card java">
                <Cpu className="tech-icon" size={40} strokeWidth={1.5} />
                <span className="tech-name">Java</span>
              </div>
              <div className="tech-card aws">
                <Cloud className="tech-icon" size={40} strokeWidth={1.5} />
                <span className="tech-name">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portfolio-section section-lg" id="portfolio">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-description">
              Real solutions that delivered measurable business impact
            </p>
          </div>
          
          <div className="portfolio-grid">
            <div className="project-card fade-in-up">
              <div className="project-status">
                <span className="status-badge success">Completed</span>
                <span className="project-category">Enterprise</span>
              </div>
              <div className="project-image-wrapper">
                <img src="/project-analytics.png" alt="Enterprise Analytics Dashboard" className="project-image" />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Enterprise Analytics Platform</h3>
                <p className="project-description">
                  Real-time data visualization dashboard for a Fortune 500 company. Reduced reporting time by 75%.
                </p>
                <div className="project-metrics">
                  <div className="metric-item">
                    <span className="metric-value">75%</span>
                    <span className="metric-label">Time Saved</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-value">10K+</span>
                    <span className="metric-label">Daily Users</span>
                  </div>
                </div>
                <div className="tech-stack">
                  <span className="badge">React</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">AWS</span>
                </div>
                <a href="#home" className="project-link">View Case Study →</a>
              </div>
            </div>
            
            <div className="project-card fade-in-up">
              <div className="project-status">
                <span className="status-badge success">Completed</span>
                <span className="project-category">E-Commerce</span>
              </div>
              <div className="project-image-wrapper">
                <img src="/project-ecommerce.png" alt="E-Commerce Platform UI" className="project-image" />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-description">
                  Custom marketplace connecting local vendors with customers. Processed $2M+ in transactions in first year.
                </p>
                <div className="project-metrics">
                  <div className="metric-item">
                    <span className="metric-value">$2M+</span>
                    <span className="metric-label">Revenue</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-value">500+</span>
                    <span className="metric-label">Vendors</span>
                  </div>
                </div>
                <div className="tech-stack">
                  <span className="badge">Next.js</span>
                  <span className="badge">Stripe</span>
                  <span className="badge">MongoDB</span>
                  <span className="badge">Docker</span>
                </div>
                <a href="#home" className="project-link">View Case Study →</a>
              </div>
            </div>
            
            <div className="project-card fade-in-up">
              <div className="project-status">
                <span className="status-badge success">Completed</span>
                <span className="project-category">Education</span>
              </div>
              <div className="project-image-wrapper">
                 <img src="/project-lms.png" alt="LMS Platform Interface" className="project-image" />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Learning Management System</h3>
                <p className="project-description">
                  Interactive platform for online education with video streaming, assessments, and progress tracking.
                </p>
                <div className="project-metrics">
                  <div className="metric-item">
                    <span className="metric-value">50K+</span>
                    <span className="metric-label">Students</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-value">95%</span>
                    <span className="metric-label">Satisfaction</span>
                  </div>
                </div>
                <div className="tech-stack">
                  <span className="badge">Vue.js</span>
                  <span className="badge">Python</span>
                  <span className="badge">Redis</span>
                  <span className="badge">WebRTC</span>
                </div>
                <a href="#home" className="project-link">View Case Study →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section section-lg">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2 className="section-title">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="section-description">
              A proven process that ensures quality, transparency, and timely delivery
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step fade-in-up">
              <div className="process-marker">
                <span className="marker-number">1</span>
              </div>
              <div className="process-card">
                <div className="process-icon">
                  <Search size={48} strokeWidth={1.5} />
                </div>
                <h4 className="process-step-title">Requirement Analysis</h4>
                <p className="process-step-description">
                  Deep dive into your business goals, technical requirements, and success metrics.
                </p>
                <ul className="process-details">
                  <li>Stakeholder interviews</li>
                  <li>Technical feasibility study</li>
                  <li>Success criteria definition</li>
                </ul>
              </div>
            </div>
            
            <div className="process-step fade-in-up">
              <div className="process-marker">
                <span className="marker-number">2</span>
              </div>
              <div className="process-card">
                <div className="process-icon">
                  <Palette size={48} strokeWidth={1.5} />
                </div>
                <h4 className="process-step-title">Planning & Design</h4>
                <p className="process-step-description">
                  Architecture design, UI/UX mockups, and detailed project roadmap.
                </p>
                <ul className="process-details">
                  <li>System architecture</li>
                  <li>UI/UX prototypes</li>
                  <li>Sprint planning</li>
                </ul>
              </div>
            </div>
            
            <div className="process-step fade-in-up">
              <div className="process-marker">
                <span className="marker-number">3</span>
              </div>
              <div className="process-card">
                <div className="process-icon">
                  <Code size={48} strokeWidth={1.5} />
                </div>
                <h4 className="process-step-title">Development</h4>
                <p className="process-step-description">
                  Agile sprints with regular demos and continuous integration.
                </p>
                <ul className="process-details">
                  <li>Iterative development</li>
                  <li>Code reviews</li>
                  <li>Regular demos</li>
                </ul>
              </div>
            </div>
            
            <div className="process-step fade-in-up">
              <div className="process-marker">
                <span className="marker-number">4</span>
              </div>
              <div className="process-card">
                <div className="process-icon">
                  <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
                <h4 className="process-step-title">Testing & Delivery</h4>
                <p className="process-step-description">
                  Comprehensive QA, performance optimization, and smooth deployment.
                </p>
                <ul className="process-details">
                  <li>Automated testing</li>
                  <li>Performance tuning</li>
                  <li>Deployment automation</li>
                </ul>
              </div>
            </div>
            
            <div className="process-step fade-in-up">
              <div className="process-marker">
                <span className="marker-number">5</span>
              </div>
              <div className="process-card">
                <div className="process-icon">
                  <RefreshCw size={48} strokeWidth={1.5} />
                </div>
                <h4 className="process-step-title">Ongoing Support</h4>
                <p className="process-step-description">
                  Maintenance, updates, and continuous improvement based on user feedback.
                </p>
                <ul className="process-details">
                  <li>24/7 monitoring</li>
                  <li>Regular updates</li>
                  <li>Feature enhancements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section section-lg" id="contact">
        <div className="container">
          <div className="cta-content fade-in-up">
            <h2 className="cta-title">
              Ready to Transform Your <span className="text-gradient">Digital Presence?</span>
            </h2>
            <p className="cta-description">
              Let's collaborate to build scalable, high-performance solutions that drive real growth for your business.
            </p>
            <div className="cta-actions">
                <button onClick={toggleModal} className="btn btn-primary btn-lg">
                  Start Your Project
                </button>
              <a href="#portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/devnxt-tab-logo.png" alt="DevNxt Studio" className="footer-logo-icon" />
                <span className="footer-logo-text">DevNxt Studio</span>
              </div>
              <p className="footer-tagline">
                Building the future, one line of code at a time.
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
              <p><Mail size={16} className="footer-icon" /> hello@devnxtstudio.com</p>
              <p><Phone size={16} className="footer-icon" /> +91 1234567890</p>
              <p><MapPin size={16} className="footer-icon" /> Hyderabad, Telangana</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 DevNxt Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* CONTACT MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <h2 className="modal-title">Get in <span className="text-gradient">Touch</span></h2>
              <p className="modal-subtitle">Fill out the form below and we'll get back to you shortly.</p>
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
      )}
    </>
  )
}

export default Home

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import './Home.css';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setShowModal(!showModal);
    setIsMenuOpen(false); // Close mobile menu when opening modal
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    // Cleanup
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="app-layout-container">
      {/* Decorative ambient blurred glow blobs */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>
      <div className="glow-blob blob-3"></div>

      <Navbar 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        toggleModal={toggleModal} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <Hero toggleModal={toggleModal} />
      <Stats />
      <Services />
      <WhyChooseUs />
      <TechStack />
      <Portfolio />
      <Process />
      <Cta toggleModal={toggleModal} />
      <Footer toggleModal={toggleModal} />

      {showModal && <ContactModal toggleModal={toggleModal} />}
    </div>
  );
}

export default Home;

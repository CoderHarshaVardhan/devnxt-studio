import React from 'react';

function Cta({ toggleModal }) {
  return (
    <section className="cta-section section-lg" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Upgrade Your <span className="text-gradient">Digital Assets?</span>
          </h2>
          <p className="cta-description">
            Let's build reliable scalable software systems that accelerate your organizational output.
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
  );
}

export default Cta;

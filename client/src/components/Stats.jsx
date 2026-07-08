import React from 'react';
import { Zap, Layers, Clock, Award } from 'lucide-react';

function Stats() {
  return (
    <section className="trust-section section">
      <div className="container">
        <div className="trust-statement-wrapper">
          <div className="trust-line"></div>
          <p className="trust-statement">
            Trusted by startups, institutions, and growing teams globally
          </p>
          <div className="trust-line"></div>
        </div>
        
        <div className="stats-grid-premium">
          <div className="stat-card-premium yellow">
            <div className="stat-card-glow-spotlight"></div>
            <div className="stat-icon-wrapper-premium">
              <Zap size={20} className="stat-icon-svg-premium" strokeWidth={1.5} />
            </div>
            <div className="stat-number-premium">50+</div>
            <div className="stat-label-premium">Projects Delivered</div>
          </div>

          <div className="stat-card-premium purple">
            <div className="stat-card-glow-spotlight"></div>
            <div className="stat-icon-wrapper-premium">
              <Layers size={20} className="stat-icon-svg-premium" strokeWidth={1.5} />
            </div>
            <div className="stat-number-premium">15+</div>
            <div className="stat-label-premium">Technologies Mastered</div>
          </div>

          <div className="stat-card-premium green">
            <div className="stat-card-glow-spotlight"></div>
            <div className="stat-icon-wrapper-premium">
              <Clock size={20} className="stat-icon-svg-premium" strokeWidth={1.5} />
            </div>
            <div className="stat-number-premium">98%</div>
            <div className="stat-label-premium">On-Time Delivery</div>
          </div>

          <div className="stat-card-premium pink">
            <div className="stat-card-glow-spotlight"></div>
            <div className="stat-icon-wrapper-premium">
              <Award size={20} className="stat-icon-svg-premium" strokeWidth={1.5} />
            </div>
            <div className="stat-number-premium">100%</div>
            <div className="stat-label-premium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;

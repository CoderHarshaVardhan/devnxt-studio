import React from 'react';
import { Zap, DollarSign, Braces, MessageSquare } from 'lucide-react';

const advantages = [
  {
    number: "01",
    icon: Zap,
    title: "Agile Execution Model",
    description: "Rapid development iterations and incremental deliveries. We easily pivot to changing market demands.",
    metric: { value: "2x", label: "Faster Delivery" },
    colorClass: "yellow"
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Cost-Effective Engagement",
    description: "Fair transparent billing. Experience elite architectural output without the agency markup overheads.",
    metric: { value: "40%", label: "Cost Savings" },
    colorClass: "green"
  },
  {
    number: "03",
    icon: Braces,
    title: "Clean, Scalable Code",
    description: "Future-proof engineering. Every script is refactored, commented, and typed to simplify post-launch handovers.",
    metric: { value: "100%", label: "Code Quality" },
    colorClass: "blue"
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Direct engineering chats, Slack project hubs, and weekly screenshares. Stay in full control of your build state.",
    metric: { value: "24/7", label: "Updates Available" },
    colorClass: "purple"
  }
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us-section section-lg" id="about">
      <div className="container">
        <div className="why-choose-us-grid">
          <div className="why-choose-us-content">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="why-choose-us-title">
              Why Partner <br />
              With <span className="text-gradient">DevNxt?</span>
            </h2>
            <p className="why-choose-us-description">
              We combine elite technical capability with agile transparent collaboration to deliver high-performance, robust software products.
            </p>
            
            <div className="why-choose-us-guarantee">
              <div className="guarantee-glow-blob"></div>
              <h4 className="guarantee-title">Our Service Guarantee</h4>
              <p className="guarantee-text">
                No bloated sales teams. No outsourced developers. Just senior engineers building production-grade solutions, delivered on budget.
              </p>
              <div className="guarantee-badge">
                <span className="badge-pulse"></span>
                100% Client Protected
              </div>
            </div>
          </div>
          
          <div className="why-choose-us-advantages">
            <div className="advantages-grid-premium">
              {advantages.map((adv, index) => {
                const IconComponent = adv.icon;
                return (
                  <div key={index} className={`advantage-card-premium ${adv.colorClass}`}>
                    <span className="advantage-number-premium">{adv.number}</span>
                    
                    <div className="advantage-icon-wrapper-premium">
                      <IconComponent size={24} className="advantage-icon-svg-premium" strokeWidth={1.5} />
                    </div>
                    
                    <div className="advantage-info-premium">
                      <h3 className="advantage-title-premium">{adv.title}</h3>
                      <p className="advantage-desc-premium">{adv.description}</p>
                      
                      <div className="advantage-metric-premium">
                        <span className="metric-value-premium">{adv.metric.value}</span>
                        <span className="metric-label-premium">{adv.metric.label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

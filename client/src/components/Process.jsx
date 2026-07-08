import React from 'react';
import { Search, Palette, Code, ShieldCheck, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Requirement Discovery",
    description: "A deep dive into your business flow bottlenecks, software constraints, and primary speed targets.",
    details: ["Technical feasibility sizing", "Architecture requirements docs", "Pricing validation checks"],
    colorClass: "discovery"
  },
  {
    number: 2,
    icon: Palette,
    title: "Figma UI & Prototypes",
    description: "Drafting component structures, navigation streams, and fluid responsive interface wireframes.",
    details: ["UX customer route mapping", "Clickable figma mockups", "Visual asset rendering"],
    colorClass: "design"
  },
  {
    number: 3,
    icon: Code,
    title: "Agile Coding Sprints",
    description: "Launching clean code cycles using repository tags, local dev preview lines, and constant commit logs.",
    details: ["Modularity refactoring checks", "API mock setup stages", "Incremental demo links"],
    colorClass: "coding"
  },
  {
    number: 4,
    icon: ShieldCheck,
    title: "QA & Host Release",
    description: "End-to-end integration test suits, load checks, database speed runs, and final cloud server routing.",
    details: ["Unit & API mock testing", "Core Web Vitals optimizations", "DNS mapping configurations"],
    colorClass: "testing"
  },
  {
    number: 5,
    icon: RefreshCw,
    title: "Ongoing SLA Support",
    description: "Constant database back-saving, security version upgrades, and functional features expansion.",
    details: ["SLA response times monitoring", "Version security audits", "Scale capacity analytics"],
    colorClass: "support"
  }
];

function Process() {
  return (
    <section className="process-section section-lg" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">How We Work</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="section-description">
            A structured lifecycle that guarantees architecture validation and timely deployment loops.
          </p>
        </div>
        
        <div className="process-timeline-premium">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div key={index} className={`process-step-premium ${step.colorClass}`}>
                <div className="process-marker-premium">
                  <div className="marker-pulse-ring"></div>
                  <span className="marker-number-premium">{step.number}</span>
                </div>
                
                <div className="process-card-premium">
                  {/* Decorative background glow spotlight */}
                  <div className="process-card-glow-spotlight"></div>
                  
                  <div className="process-icon-container-premium">
                    <IconComp size={28} className="process-icon-svg-premium" strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="process-step-title-premium">{step.title}</h4>
                  <p className="process-step-description-premium">{step.description}</p>
                  
                  <ul className="process-details-premium">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;

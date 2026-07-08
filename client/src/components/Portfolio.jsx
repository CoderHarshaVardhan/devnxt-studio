import React, { useState } from 'react';

const portfolioProjects = [
  {
    id: 1,
    title: "Enterprise Analytics Platform",
    category: "enterprise",
    categoryLabel: "Enterprise",
    image: "/project-analytics.png",
    description: "Real-time data visualization dashboard for a Fortune 500 company. Slashes report aggregation time by 75%.",
    metrics: [
      { label: "Time Saved", value: "75%" },
      { label: "Daily Users", value: "10K+" }
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "#"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    image: "/project-ecommerce.png",
    description: "Custom vendor marketplace connecting local merchants with retail consumers. Handled $2M+ in transactions in year 1.",
    metrics: [
      { label: "Revenue", value: "$2M+" },
      { label: "Vendors", value: "500+" }
    ],
    tech: ["Next.js", "Stripe", "MongoDB", "Docker"],
    link: "#"
  },
  {
    id: 3,
    title: "Learning Management System",
    category: "education",
    categoryLabel: "Education",
    image: "/project-lms.png",
    description: "Interactive online academy software featuring WebRTC video rooms, online test grading, and learning progress tracks.",
    metrics: [
      { label: "Students", value: "50K+" },
      { label: "Satisfaction", value: "95%" }
    ],
    tech: ["Vue.js", "Python", "Redis", "WebRTC"],
    link: "#"
  }
];

function Portfolio() {
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  const filteredProjects = portfolioFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === portfolioFilter);

  // Helper to format tab filter label nicely
  const getFilterLabel = (val) => {
    if (val === 'all') return 'All Projects';
    if (val === 'enterprise') return 'Enterprise';
    if (val === 'ecommerce') return 'E-Commerce';
    if (val === 'education') return 'Education';
    return val;
  };

  return (
    <section className="portfolio-section section-lg" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-description">
            Real code architectures that solve tangible digital business problems.
          </p>

          <div className="portfolio-filter-bar-wrapper">
            <div className="portfolio-filter-bar">
              {['all', 'enterprise', 'ecommerce', 'education'].map(filterVal => (
                <button
                  key={filterVal}
                  className={`filter-btn ${portfolioFilter === filterVal ? 'active' : ''}`}
                  onClick={() => setPortfolioFilter(filterVal)}
                >
                  {getFilterLabel(filterVal)}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="portfolio-cards-wrapper-premium">
          <div key={portfolioFilter} className="portfolio-grid-premium fade-in-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className={`project-card-premium ${project.category}`}>
                {/* Visual hover spotlight blur overlay */}
                <div className="project-card-spotlight"></div>
                
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image-premium" />
                  <div className="project-image-overlay-gradient"></div>
                  
                  <div className="project-floating-status">
                    <span className="status-badge-premium success">Completed</span>
                    <span className="project-category-tag-premium">{project.categoryLabel}</span>
                  </div>
                </div>
                
                <div className="project-content-premium">
                  <h3 className="project-title-premium">{project.title}</h3>
                  <p className="project-description-premium">{project.description}</p>
                  
                  <div className="project-metrics-premium">
                    {project.metrics.map((met, idx) => (
                      <div key={idx} className="metric-item-premium">
                        <span className="metric-value-premium">{met.value}</span>
                        <span className="metric-label-premium">{met.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-tech-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="project-tech-badge">{t}</span>
                    ))}
                  </div>
                  
                  <div className="project-footer-link">
                    <a href={project.link} className="project-link-premium">
                      View Case Study
                      <span className="arrow-icon">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

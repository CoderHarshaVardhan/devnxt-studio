import React from 'react';
import { Globe, Laptop, PenTool, Smartphone, Wrench, Cloud } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    description: "Custom web applications built with modern frameworks. Scalable, secure, and optimized for speed.",
    tags: ["React / Next.js", "SPA & SSR", "SEO Friendly", "Fluid UI Layout"],
    colorClass: "web-app"
  },
  {
    icon: Laptop,
    title: "Full-Stack Development",
    description: "End-to-end development from database architecture to user interface. Complete cohesive software systems.",
    tags: ["Node.js / Java", "RESTful APIs", "DB Schema Design", "Microservices"],
    colorClass: "full-stack"
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "User-centered design systems. Gorgeous interfaces backed by meticulous usability analysis.",
    tags: ["Figma Prototypes", "Interactive Demos", "Design System Systems", "Usability Audits"],
    colorClass: "ui-ux"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and hybrid app development delivering exceptional fluid experiences on iOS and Android.",
    tags: ["React Native", "iOS & Android Store", "Push Notifications", "Offline Mode"],
    colorClass: "mobile"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support and performance audits. Keep your servers up and secure with active health checks.",
    tags: ["Security Audits", "Load Testing", "Hot Bug Fixes", "Active Monitoring"],
    colorClass: "maintenance"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud architecture mapping and server management. Secure host spaces that scale alongside customer growth.",
    tags: ["AWS / Cloud spaces", "Docker Conts", "Serverless Lambda", "Deployment Hooks"],
    colorClass: "cloud"
  }
];

function Services() {
  return (
    <section className="section-lg" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Services</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="section-description">
            Comprehensive digital engineering solutions tailored to accelerate your business growth.
          </p>
        </div>
        
        <div className="services-grid-premium">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div key={index} className={`service-card-premium ${service.colorClass}`}>
                {/* Decorative background glow spotlight */}
                <div className="service-card-glow-spotlight"></div>
                
                <div className="service-icon-container-premium">
                  <IconComp size={28} className="service-icon-svg-premium" strokeWidth={1.5} />
                </div>
                
                <h3 className="service-card-title-premium">{service.title}</h3>
                <p className="service-card-desc-premium">{service.description}</p>
                
                <div className="service-card-tags-premium">
                  {service.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="service-card-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

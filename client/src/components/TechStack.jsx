import React, { useState } from 'react';
import { Layout, Palette, Terminal, Code, Cpu, Database, Cloud, HardDrive, RefreshCw } from 'lucide-react';

const techCategories = [
  { id: 'frontend', name: 'Frontend Web' },
  { id: 'backend', name: 'Backend & DBs' },
  { id: 'devops', name: 'DevOps & Cloud' }
];

const techStack = {
  frontend: [
    { 
      name: "Next.js", 
      icon: Layout, 
      category: "Framework",
      description: "Enterprise React framework supporting server-side rendering, static site generation, and server actions.", 
      colorClass: "nextjs",
      tags: ["App Router", "SSR / SSG", "Server Actions"]
    },
    { 
      name: "React", 
      icon: Palette, 
      category: "Library",
      description: "Dynamic component-based library for building reactive and interactive user interfaces.", 
      colorClass: "react",
      tags: ["Hooks / Context", "Concurrent Mode", "Virtual DOM"]
    },
    { 
      name: "Vite / JS", 
      icon: Terminal, 
      category: "Build Tool",
      description: "Fast frontend build tooling and ES module bundling for optimized loading speeds.", 
      colorClass: "vite",
      tags: ["HMR Engine", "ESBuild Bundler", "Modern ES6+"]
    }
  ],
  backend: [
    { 
      name: "Node.js", 
      icon: Code, 
      category: "Runtime",
      description: "Event-driven asynchronous JavaScript runtime designed for highly scalable server architectures.", 
      colorClass: "nodejs",
      tags: ["Express / NestJS", "Event Loop", "V8 Engine"]
    },
    { 
      name: "Java", 
      icon: Cpu, 
      category: "Language",
      description: "Enterprise-grade runtime delivering typed object-oriented microservices and robust API systems.", 
      colorClass: "java",
      tags: ["Spring Boot", "Enterprise Arch", "Multi-threading"]
    },
    { 
      name: "MongoDB", 
      icon: Database, 
      category: "Database",
      description: "Flexible document-based database built for performance, horizontal scaling, and JSON compliance.", 
      colorClass: "mongodb",
      tags: ["Document Storage", "Aggregation", "Mongoose ODM"]
    }
  ],
  devops: [
    { 
      name: "AWS", 
      icon: Cloud, 
      category: "Cloud",
      description: "Scalable cloud infrastructure hosting secure compute servers, buckets, and serverless logic.", 
      colorClass: "aws",
      tags: ["EC2 / S3 / Lambda", "IAM / Security", "CloudFront CDN"]
    },
    { 
      name: "Docker", 
      icon: HardDrive, 
      category: "Containerization",
      description: "Lightweight containerized sandboxing ensuring identical environment runtime execution.", 
      colorClass: "docker",
      tags: ["Images & Containers", "Docker Compose", "Multi-stage Builds"]
    },
    { 
      name: "CI / CD", 
      icon: RefreshCw, 
      category: "Automation",
      description: "Automated test checking and production deployment pipelines for continuous delivery.", 
      colorClass: "cicd",
      tags: ["GitHub Actions", "Unit Testing", "Auto Deployments"]
    }
  ]
};

function TechStack() {
  const [techTab, setTechTab] = useState('frontend');

  return (
    <section className="tech-stack-section section-lg" id="tech-stack">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Tech Stack</span>
          <h2 className="section-title">
            We Build Using Leading <span className="text-gradient">Tech Stacks</span>
          </h2>
          <p className="section-description">
            Our developers leverage modern frameworks, cloud architectures, and database infrastructures to build blazing-fast, secure production sites.
          </p>
        </div>

        <div className="tech-tabs-wrapper-horizontal">
          <div className="tech-tabs-list-horizontal">
            {techCategories.map(cat => (
              <button 
                key={cat.id} 
                className={`tech-tab-btn-horizontal ${techTab === cat.id ? 'active' : ''}`}
                onClick={() => setTechTab(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="tech-cards-wrapper-horizontal">
          <div key={techTab} className="tech-stack-cards-grid-horizontal fade-in-grid">
            {techStack[techTab].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className={`tech-card-premium ${tech.colorClass}`}>
                  {/* Decorative background glow spotlight inside the card */}
                  <div className="tech-card-glow-spotlight"></div>
                  
                  <div className="tech-card-header">
                    <span className="tech-card-badge">{tech.category}</span>
                  </div>

                  <div className="tech-icon-container">
                    <IconComponent className="tech-icon-svg" size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="tech-card-title-premium">{tech.name}</h3>
                  <p className="tech-card-desc-premium">{tech.description}</p>
                  
                  <div className="tech-card-tags">
                    {tech.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-card-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;

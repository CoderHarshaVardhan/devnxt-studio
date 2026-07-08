import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

function Hero({ toggleModal }) {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-overlay"></div>
      <div className="container">
        <div className="hero-flex-wrapper">
          <div className="hero-content-left">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              <span>⚡ DevNxt Studio 2.0 Launch</span>
            </div>
            <h1 className="hero-title">
              Scalable <span className="text-gradient">Web & Software</span> Solutions for Growing Teams
            </h1>
            <p className="hero-subtitle">
              We plan, design, and host premium cloud applications with speed and architectural integrity. 
              Move fast and scale reliably with codebases built for your business outcomes.
            </p>
            <div className="hero-cta">
              <button onClick={toggleModal} className="btn btn-primary btn-lg">Get a Free Quote</button>
              <a href="#portfolio" className="btn btn-secondary btn-lg">View Our Work</a>
            </div>
          </div>

          <div className="hero-showcase-right">
            <div className="mockup-panel">
              <div className="panel-header">
                <span className="dot dot-close"></span>
                <span className="dot dot-min"></span>
                <span className="dot dot-max"></span>
                <span className="panel-title">server.js - devnxt-api</span>
              </div>
              <div className="panel-body code-text">
                <p><span className="keyword">const</span> studio = <span className="entity">require</span>(<span className="string">"devnxt-core"</span>);</p>
                <p><span className="keyword">const</span> app = <span className="entity">studio</span>();</p>
                <p className="indent"><span className="comment">// Initializing performance middleware</span></p>
                <p className="indent"><span className="entity">app.use</span>(<span className="string">"speed"</span>, <span className="keyword">true</span>);</p>
                <p className="indent"><span className="entity">app.deploy</span>(() =&gt; &#123;</p>
                <p className="double-indent"><span className="entity">console.log</span>(<span className="string">"🚀 Server online on port 80"</span>);</p>
                <p className="indent">&#125;);</p>
              </div>
              <div className="panel-metrics">
                <div className="metric-box">
                  <span className="metric-val">14ms</span>
                  <span className="metric-lbl">Response Time</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val text-green">99.9%</span>
                  <span className="metric-lbl">Uptime Status</span>
                </div>
                <div className="metric-box">
                  <span className="metric-val">50+</span>
                  <span className="metric-lbl">Deploys OK</span>
                </div>
              </div>
            </div>

            {/* Decorative floating widgets */}
            <div className="floating-widget widget-top">
              <div className="widget-icon-box bg-purple">
                <CheckCircle2 size={16} />
              </div>
              <div className="widget-details">
                <span className="widget-title">Deploy Successful</span>
                <span className="widget-subtitle">Production branch, 3s ago</span>
              </div>
            </div>

            <div className="floating-widget widget-bottom">
              <div className="widget-icon-box bg-green">
                <Zap size={16} />
              </div>
              <div className="widget-details">
                <span className="widget-title">40% Saved</span>
                <span className="widget-subtitle">AWS Infrastructure Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

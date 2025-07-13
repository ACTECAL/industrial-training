import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-title">About Our EVM Pro System</h2>
      <p className="about-text">
        Welcome to EVM Pro, your trusted platform for secure, transparent, and efficient online voting. 
        Our mission is to empower organizations, institutions, and communities to conduct fair elections with ease.
      </p>
      <div className="features">
        <div className="feature-card">
          <h3>🔒 Secure</h3>
          <p>We use end-to-end encryption to protect every vote.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Transparent</h3>
          <p>Live results and complete audit trails ensure transparency.</p>
        </div>
        <div className="feature-card">
          <h3>✅ Accessible</h3>
          <p>Vote from anywhere, on any device, with a user-friendly interface.</p>
        </div>
      </div>
    </div>
  );
}

export default About; 
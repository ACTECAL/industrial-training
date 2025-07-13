import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const AboutSection = () => (
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

const HowItWorksSection = () => (
  <div className="how-it-works-container" id="how-it-works">
    <h2 className="section-title">How It Works in 3 Easy Steps</h2>
    <div className="steps">
      <div className="step">
        <div className="step-icon">1</div>
        <h3>Register / Login</h3>
        <p>Create an account or log in with your credentials.</p>
      </div>
      <div className="step">
        <div className="step-icon">2</div>
        <h3>Cast Your Vote</h3>
        <p>Navigate to the voting panel and make your choice.</p>
      </div>
      <div className="step">
        <div className="step-icon">3</div>
        <h3>View Results</h3>
        <p>See the live results securely and transparently.</p>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <>
      <div className="home-container" id="home">
        <div className="hero-content">
          <h1 className="hero-title">The Future of Secure Online Voting is Here</h1>
          <p className="hero-subtitle">
            Experience a seamless, reliable, and transparent voting process with EVM Pro.
          </p>
          <Link to="/vote" className="btn btn-primary btn-lg">
            Vote Now
          </Link>
        </div>
      </div>
      <AboutSection />
      <HowItWorksSection />
    </>
  );
}

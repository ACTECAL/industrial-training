import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/HomePage.css';

function HomePage() {
  return (
    <div className="homepage-outer">
      <div className="homepage-container">
        <h1 className="homepage-title">Professional Resume Builder</h1>
        <p className="homepage-subtitle">
          Create stunning, ATS-friendly resumes in minutes.<br />
          Choose from professional templates, customize easily, and download instantly!
        </p>
        
        <div className="homepage-features">
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">📝</div>
              <h3>Easy to Use</h3>
              <p>Simple step-by-step process to create your perfect resume</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>Professional Templates</h3>
              <p>Choose from modern, clean, and professional designs</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Create and edit your resume on any device</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h3>ATS Optimized</h3>
              <p>Resumes that pass Applicant Tracking Systems</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Fast & Free</h3>
              <p>Create unlimited resumes with our free plan</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📄</div>
              <h3>PDF Download</h3>
              <p>Download your resume as a professional PDF</p>
            </div>
          </div>
        </div>

        <div className="homepage-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Resumes Created</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Professional Templates</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>

        <div className="homepage-sections">
          <div className="section-info">
            <h2>What You Can Include in Your Resume</h2>
            <div className="sections-grid">
              <div className="section-item">
                <h4>👤 Personal Information</h4>
                <p>Name, contact details, LinkedIn, portfolio</p>
              </div>
              <div className="section-item">
                <h4>📝 Professional Summary</h4>
                <p>Compelling overview of your career</p>
              </div>
              <div className="section-item">
                <h4>💼 Work Experience</h4>
                <p>Detailed job history with achievements</p>
              </div>
              <div className="section-item">
                <h4>🎓 Education</h4>
                <p>Degrees, certifications, relevant coursework</p>
              </div>
              <div className="section-item">
                <h4>⚡ Skills</h4>
                <p>Technical and soft skills with proficiency levels</p>
              </div>
              <div className="section-item">
                <h4>🚀 Projects</h4>
                <p>Portfolio of your best work and achievements</p>
              </div>
              <div className="section-item">
                <h4>🏆 Certifications</h4>
                <p>Professional certifications and licenses</p>
              </div>
              <div className="section-item">
                <h4>🌍 Languages</h4>
                <p>Language skills and proficiency levels</p>
              </div>
              <div className="section-item">
                <h4>⭐ Achievements</h4>
                <p>Awards, honors, and notable accomplishments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="homepage-cta">
          <h2>Ready to Create Your Professional Resume?</h2>
          <p>Join thousands of job seekers who have successfully landed their dream jobs</p>
          <Link to="/login" className="homepage-btn large">Start Building Now</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
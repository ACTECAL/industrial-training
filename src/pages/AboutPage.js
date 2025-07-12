import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      
      <div className="about-hero">
        <div className="hero-content">
          <h1>About Our Resume Builder</h1>
          <p>Create professional resumes that get you hired with our advanced resume builder platform</p>
        </div>
      </div>

      <div className="about-content">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              We believe everyone deserves to have a professional resume that showcases their skills and experience effectively. 
              Our mission is to provide an intuitive, powerful resume builder that helps job seekers create compelling resumes 
              that stand out in today's competitive job market.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2>Why Choose Our Resume Builder?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Professional Templates</h3>
                <p>Choose from 15+ professionally designed templates tailored for different industries and career levels.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Easy to Use</h3>
                <p>Our intuitive interface makes resume creation simple and stress-free. No technical skills required.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Mobile Friendly</h3>
                <p>Create and edit your resume on any device - desktop, tablet, or mobile phone.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">💼</div>
                <h3>Industry Specific</h3>
                <p>Templates designed specifically for tech, healthcare, marketing, legal, and other industries.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure & Private</h3>
                <p>Your personal information is protected with industry-standard security measures.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📄</div>
                <h3>Multiple Formats</h3>
                <p>Export your resume in PDF, Word, or HTML formats for easy sharing and printing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Template Showcase */}
        <section className="templates-showcase">
          <div className="container">
            <h2>Professional Resume Templates</h2>
            <p>Choose from our collection of carefully crafted templates designed by professional designers</p>
            
            <div className="template-categories">
              <div className="template-category">
                <h3>Free Templates</h3>
                <p>6 professional templates available to everyone</p>
                <ul>
                  <li>Modern - Clean and professional</li>
                  <li>Classic - Traditional and timeless</li>
                  <li>Minimal - Simple and focused</li>
                  <li>Academic - For research positions</li>
                  <li>Startup - Dynamic and energetic</li>
                  <li>Compact - Space-efficient design</li>
                </ul>
              </div>
              
              <div className="template-category">
                <h3>Premium Templates</h3>
                <p>9 advanced templates for premium users</p>
                <ul>
                  <li>Creative - Stand out designs</li>
                  <li>Executive - Senior-level professional</li>
                  <li>Tech - For software developers</li>
                  <li>Corporate - Business environments</li>
                  <li>Healthcare - Medical professionals</li>
                  <li>Legal - Legal industry specific</li>
                  <li>Marketing - Results-driven design</li>
                  <li>Gradient - Modern with gradients</li>
                  <li>Elegant - Luxury and fashion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Choose a Template</h3>
                <p>Browse our collection of professional templates and select one that matches your industry and style.</p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h3>Fill in Your Information</h3>
                <p>Add your personal details, work experience, education, and skills using our easy-to-use forms.</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h3>Customize & Preview</h3>
                <p>Customize colors, fonts, and layout. Preview your resume in real-time as you make changes.</p>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <h3>Download & Apply</h3>
                <p>Download your professional resume in your preferred format and start applying to jobs!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats-section">
          <div className="container">
            <h2>Trusted by Job Seekers Worldwide</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Professional Templates</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Resumes Created</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Industries Supported</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Available Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <h2>What Our Users Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "The resume builder helped me create a professional resume in minutes. I got my dream job within 2 weeks!"
                </div>
                <div className="testimonial-author">
                  <strong>Sarah Johnson</strong>
                  <span>Software Engineer</span>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "The templates are beautiful and the interface is so easy to use. Highly recommended!"
                </div>
                <div className="testimonial-author">
                  <strong>Michael Chen</strong>
                  <span>Marketing Manager</span>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  "Perfect for someone like me who's not tech-savvy. My resume looks professional and modern."
                </div>
                <div className="testimonial-author">
                  <strong>Emily Rodriguez</strong>
                  <span>Healthcare Professional</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Create Your Professional Resume?</h2>
            <p>Join thousands of job seekers who have successfully landed their dream jobs with our resume builder.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Start Building Now</button>
              <button className="btn btn-secondary">View Templates</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 
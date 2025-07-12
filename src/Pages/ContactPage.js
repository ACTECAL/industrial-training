import { useState } from 'react';
import './ContactPage.css';
import Button from '../components/Button';

function ContactPage() {

  const [contactStats,setContactStats] = useState([
  {
    className: "contact-stat",
    number: "24/7",
    label: "Support Available"
  },
  {
    className: "contact-stat",
    number: "2hr",
    label: "Average Response"
  },
  {
    className: "contact-stat",
    number: "98%",
    label: "Satisfaction Rate"
  }
]);

const [contactMethods,setContactMethods] = useState([
  {
    "className": "contact-method-card",
    "icon": "📧",
    "title": "Email Support",
    "description": "Send us an email and we'll respond within 2 hours",
    "action": {
      "type": "link",
      "label": "bjbablu@gmail.com",
      "href": "mailto:bjbablu@gmail.com"
    }
  },
  {
    "className": "contact-method-card",
    "icon": "💬",
    "title": "Live Chat",
    "description": "Chat with our support team in real-time",
    "action": {
      "type": "button",
      "label": "Start Chat"
    }
  },
  {
    "className": "contact-method-card",
    "icon": "📞",
    "title": "Phone Support",
    "description": "Call us for immediate assistance",
    "action": {
      "type": "link",
      "label": "(+91)-8630444475",
      "href": "tel:(+91)-8630444475"
    }
  },
  {
    "className": "contact-method-card",
    "icon": "📋",
    "title": "Help Center",
    "description": "Browse our comprehensive knowledge base",
    "action": {
      "type": "link",
      "label": "Visit Help Center",
      "href": "/help"
    }
  }
]);


  const [question,setQuestion] = useState([
  {
    "question": "How do I reset my password?",
    "answer": "Click on the \"Forgot Password\" link on the login page and follow the instructions sent to your email."
  },
  {
    "question": "Can I get a refund for a course?",
    "answer": "Yes, we offer a 30-day money-back guarantee for all paid courses. Contact our support team for assistance."
  },
  {
    "question": "How long do I have access to courses?",
    "answer": "You have lifetime access to all courses you purchase, including future updates and new content."
  },
  {
    "question": "Do you offer certificates?",
    "answer": "Yes, you'll receive a certificate of completion for each course you finish with a passing grade."
  },
  {
    "question": "Can I download course materials?",
    "answer": "Yes, most course materials including videos, PDFs, and code files are available for download."
  },
  {
    "question": "Is there a mobile app available?",
    "answer": "Our platform is fully responsive and works great on mobile devices. A native app is coming soon!"
  }
]);
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-hero-description">
              Have questions, feedback, or need support? We're here to help! 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="contact-stats">
              {
                contactStats.map((item)=>{
                  return(
                    <div className={item.className}>
                <span className="contact-stat-number">{item.number}</span>
                <span className="contact-stat-label">{item.label}</span>
              </div>
                  );
                })
              }
              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods">
        <div className="container">
          <div className="section-header">
            <h2>Multiple Ways to Reach Us</h2>
            <p>Choose the method that works best for you</p>
          </div>
          <div className="contact-methods-grid">
            {
              contactMethods.map((item)=>{
                return(
                <div className= {item.className}>
              <div className="method-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.action.href} className="method-link">
                {item.action.label}
              </a>
            </div>
                );
              })
            }
            
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <div className="form-info">
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you as soon as possible. 
                We typically respond within 2 hours during business hours.
              </p>
              <div className="form-features">
                <div className="form-feature">
                  <span className="feature-icon">⚡</span>
                  <span>Quick Response</span>
                </div>
                <div className="form-feature">
                  <span className="feature-icon">🔒</span>
                  <span>Secure & Private</span>
                </div>
                <div className="form-feature">
                  <span className="feature-icon">📱</span>
                  <span>Mobile Friendly</span>
                </div>
              </div>
            </div>
            <div className="form-container">
              <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payment</option>
                    <option value="course">Course Related</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message"
                    placeholder="Tell us how we can help you..." 
                    rows={6} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    I agree to the <a href="/privacy" className="link">Privacy Policy</a> and <a href="/terms" className="link">Terms of Service</a>
                  </label>
                </div>
                <Button type="submit" className="submit-btn">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            {
              question.map((item)=>{
                return(
 <div className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
                )
              })
            }
           
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="office-hours">
        <div className="container">
          <div className="office-hours-content">
            <div className="hours-info">
              <h2>Office Hours</h2>
              <p>Our support team is available to help you during these hours:</p>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
              <p className="emergency-note">
                <strong>Emergency Support:</strong> For urgent technical issues, email us anytime and we'll respond as soon as possible.
              </p>
            </div>
            <div className="hours-visual">
              <div className="hours-card">
                <div className="hours-icon">🕒</div>
                <h3>Quick Response</h3>
                <p>We typically respond within 2 hours during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/courses">Courses</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" /> LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" /> GitHub
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="/twitter.png" alt="Twitter" /> Twitter
              </a>
            </div>
            <div className="footer-bottom">
              <a href="#top" className="back-to-top">Back to Top ↑</a>
              <div className="copyright">
                &copy; {new Date().getFullYear()} E-Learning Platform
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
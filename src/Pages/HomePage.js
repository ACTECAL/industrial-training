import './HomePage.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import axios from 'axios';

function HomePage() {
const [featuredCourses,setFeaturedCourses] = useState([]);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/course/all');
        console.log('API DATA:', response);
        setFeaturedCourses(response.data.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [])


const [testimonials,setTestimonials] = useState([]);

useEffect(() => {
  const fetchFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/feedback/all');
      console.log('API DATA:', response);
      setTestimonials(response.data.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  fetchFeedback();
}, [])

const [stats,setStats] = useState([
  { number: "500K+", label: "Students" },
  { number: "50+", label: "Courses" },
  { number: "95%", label: "Success Rate" }
]);
const floatingCards = [
  {
    className: "floating-card card-1",
    icon: "/react.png",
    alt: "React.js",
    text: "React.js"
  },
  {
    className: "floating-card card-2",
    icon: "/python.png",
    alt: "Python",
    text: "Python"
  },
  {
    className: "floating-card card-3",
    icon: "/c++.png",
    alt: "C++",
    text: "C++"
  }
];

const statCards = [
  {
    className: "stat-card",
    icon: "👥",
    number: "500K+",
    label: "Students Enrolled"
  },
  {
    className: "stat-card",
    icon: "👨‍🏫",
    number: "200+",
    label: "Expert Instructors"
  },
  {
    className: "stat-card",
    icon: "📚",
    number: "1000+",
    label: "Courses Available"
  }
];



  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const navigate = useNavigate();

  const handleNewsletter = e => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setTimeout(() => setNewsletterSuccess(false), 2500);
  };

  // Feedback form state
  const [form, setForm] = useState({
    name: "",
    role: "",
    text: ""
  });
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  // Feedback form handlers
  const handleFeedbackChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/feedback/create', {
        remarks: form.text,
        designation: form.role,
        name: form.name
      });
      setFeedbackSuccess(true);
      setForm({ name: "", role: "", text: "" });
      setTimeout(() => setFeedbackSuccess(false), 2500);
    } catch (error) {
      alert('Error submitting feedback. Try again.');
      console.error('Feedback error:', error);
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Ready to reimagine your career as a <span className="gradient-text">Full Stack Developer</span>?
            </h1>
            <p className="hero-description">
              Master the most in-demand programming skills and build real-world projects. 
              Join 500K+ developers who have transformed their careers with our expert-led courses.
            </p>
            <div className="hero-stats">
              {
                stats.map((item)=>{
                  return(
                  <div className="stat">
                <span className="stat-number">{item.number}</span>
                <span className="stat-label">{item.label}</span>
              </div>
                  );
                })
              }
              
            </div>
            <div className="hero-buttons">
              <Button className="btn-primary" onClick={() => navigate('/courses')}>Get Started</Button>
              <Button className="btn-secondary" onClick={() => navigate('/free-courses')}>Try Free Courses</Button>
            </div>
          </div>
          <div className="hero-visual">
  <div className="hero-image">
    {
      floatingCards.map((card, index) => {
        return (
          <div className={card.className} key={index}>
            <span className="card-icon">
              <img src={card.icon} alt={card.alt} style={{ width: 40, height: 40 }} />
            </span>
            <span className="card-text">{card.text}</span>
          </div>
        );
      })
    }
  </div>
</div>
</div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <div className="container">
          <div className="section-header">
            <h2>Featured Courses</h2>
            <p>Most popular courses chosen by our students</p>
          </div>
          <div className="courses-grid">
            {featuredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-content">
                  <h3 className="course-title">
                    <img src={course.logo} alt={course.course_name} style={{width: 50, height: 50, borderRadius: '12px', marginRight: '16px', background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 237, 78, 0.1))', padding: '8px', border: '2px solid rgba(255, 215, 0, 0.3)', boxShadow: '0 4px 12px rgba(255, 215, 0, 0.2)'}} />
                    {course.course_name}
                  </h3>
                  <p className="course-subtitle">{course.description}</p>
                  <div className="course-instructor">by {course.author}</div>
                  <div className="course-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating">{course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Platform?</h2>
            <p>Everything you need to succeed in your programming journey</p>
          </div>
          <div className="features-grid">
<div className="features-grid">
  {
    statCards.map((item, index) => {
      return (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <h3>{item.number}</h3>
          <p>{item.label}</p>
        </div>
      );
    })
  }
</div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What Our Learners Say</h2>
          <p>Success stories from our community</p>
        </div>
        <div className="testimonials-grid-horizontal">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.remarks}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩‍🎓</div>
                <div className="author-info">
                  <div className="author-badges">
                    <div className="author-badge">{testimonial.name}</div>
                    <div className="author-badge">{testimonial.designation}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Feedback form should be OUTSIDE the carousel */}
        <form onSubmit={handleFeedbackSubmit} className="feedback-form-container">
          <h3>Give your feedback</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleFeedbackChange}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Your Role"
            value={form.role}
            onChange={handleFeedbackChange}
            required
          />
          <textarea
            name="text"
            placeholder="Your Feedback"
            value={form.text}
            onChange={handleFeedbackChange}
            required
            rows={4}
          />
          <Button type="submit">Submit</Button>
          {feedbackSuccess && (
            <div className="success-message">Thank you for your feedback!</div>
          )}
        </form>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Get updates on new courses!</h3>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input type="email" placeholder="Your email address" required />
              <Button type="submit">Subscribe</Button>
            </form>
            {newsletterSuccess && <div className="success-message">Thank you for subscribing!</div>}
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

export default HomePage;
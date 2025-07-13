import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css';

const defaultAvatar = require('../../assets/slider/1.jpg');

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const StarRating = ({ rating }) => (
  <div className="testimonial-stars">
    {[1,2,3,4,5].map(i => (
      <span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>
    ))}
  </div>
);

const getDisplayRating = (t) => {
  if (typeof t.rating === 'number' && t.rating > 0) return t.rating;
  // If no rating, generate a random one (but keep it stable per testimonial)
  if (t._randomRating) return t._randomRating;
  const random = Math.floor(Math.random() * 5) + 1;
  t._randomRating = random;
  return random;
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const token = localStorage.getItem('token');

  // Fetch testimonials from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/users/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(() => setTestimonials([]));
  }, []);

  // Add testimonial handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    if (!review || !rating) {
      setError("Please enter review and rating.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/users/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ review, rating })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Thank you for your feedback!");
        setReview("");
        setRating(0);
        setShowForm(false);
        // Refresh testimonials
        fetch('http://localhost:5000/api/users/testimonials')
          .then(res => res.json())
          .then(data => setTestimonials(data));
      } else {
        setError(data.error || "Failed to submit testimonial");
      }
    } catch (err) {
      setError("Failed to submit testimonial");
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setReview("");
    setRating(0);
    setMessage("");
    setError("");
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Travelers Say</h2>
      <div className="testimonial-slider">
        <Slider {...sliderSettings}>
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={t.id || idx}>
              <img src={defaultAvatar} alt={t.userName || t.name} className="testimonial-img" />
              <div className="testimonial-content">
                <StarRating rating={getDisplayRating(t)} />
                <p className="testimonial-review">"{t.review}"</p>
                <span className="testimonial-name">- {t.userName || t.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="testimonial-form-container">
        {token && !showForm && (
          <button className="testimonial-give-btn" onClick={() => setShowForm(true)}>Give Rating</button>
        )}
        {token && showForm && (
          <form className="testimonial-form" onSubmit={handleSubmit} style={{margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <label htmlFor="testimonial-review">Your Review</label>
            <textarea
              id="testimonial-review"
              value={review}
              onChange={e => setReview(e.target.value)}
              placeholder="Share your experience..."
              rows={3}
              required
              style={{width:'100%',maxWidth:350}}
            />
            <div className="testimonial-rating-row">
              <span>Rating:</span>
              {[1,2,3,4,5].map(i => (
                <span
                  key={i}
                  className={i <= rating ? 'star filled' : 'star'}
                  onClick={() => setRating(i)}
                  style={{ cursor: 'pointer', fontSize: '1.5rem', marginRight: 2 }}
                  role="button"
                  aria-label={`Rate ${i} star`}
                >★</span>
              ))}
            </div>
            <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
              <button className="testimonial-submit-btn" type="submit" disabled={loading || rating === 0 || !review.trim()}>{loading ? 'Submitting...' : 'Add Testimonial'}</button>
              <button type="button" className="testimonial-cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
            {message && <div className="testimonial-success">{message}</div>}
            {error && <div className="testimonial-error">{error}</div>}
          </form>
        )}
      </div>
    </section>
  );
};

export default Testimonial; 
import React from "react";
import { useNavigate } from 'react-router-dom';
import './about.css';

const heroImg = require('../assets/slider/1.jpg');
const founderImg = require('../assets/slider/2.jpg');
const teamImg1 = require('../assets/slider/3.jpg');

const highlights = [
  'Local Guides',
  'Custom Treks',
  '24/7 Support',
  'Cultural Experiences',
  'Safety First',
  'Eco-Friendly',
  'Community Support',
  'Expert Team'
];

const teamMembers = [
  {
    name: "Ankit Dhami",
    position: "Founder & Chief Explorer",
    bio: "Born and raised in Uttarakhand Himalayas, Ankit has over 8 years of experience leading treks to Adi Kailash and Panchachuli. His deep connection with local Kumaoni communities ensures authentic cultural experiences.",
    image: founderImg
  },
  {
    name: "Dheeraj Bisht",
    position: "Senior Trek Guide",
    bio: "A certified mountain guide specializing in Adi Kailash and Panchachuli treks. Dheeraj has guided over 200 treks in the Kumaon region with perfect safety record.",
    image: teamImg1
  },
  {
    name: "Maya Bisht",
    position: "Cultural Coordinator",
    bio: "Expert in Kumaoni cultures and traditions. Maya ensures every journey includes meaningful interactions with local villages and authentic cultural experiences.",
    image: teamImg1
  }
];

const achievements = [
  { number: "50+", label: "Happy Travelers" },
  { number: "25+", label: "Unique Routes" },
  { number: "2", label: "Years Experience" },
  { number: "100%", label: "Satisfaction Rate" }
];

const testimonials = [
  {
    name: "Aashish Chanchalani",
    location: "Delhi",
    text: "The Adi Kailash trek was absolutely magical! The spiritual energy and breathtaking views of the sacred peak were life-changing. Our guide Dheeraj was incredibly knowledgeable about the local culture."
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Panchachuli trek was perfect blend of adventure and spirituality. The team ensured our safety throughout the challenging terrain. The local village interactions were authentic and memorable."
  },
  {
    name: "Rahul Verma",
    location: "Bangalore",
    text: "Exploring the hidden valleys of Kumaon with local guides was incredible. The attention to detail and personalized service exceeded all expectations. Adi Kailash is truly a divine experience."
  }
];

const About = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section className="about-section-new">
      <div className="about-hero">
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">About Explore Himalaya</h1>
          <p className="about-hero-intro">Your trusted partner for sacred journeys to Adi Kailash and Panchachuli, dedicated to authentic, spiritual, and unforgettable experiences in the divine Kumaon Himalayas.</p>
        </div>
      </div>
      
      <div className="about-highlights-bar-new">
        {highlights.map((h, i) => (
          <span className="about-highlight-new" key={i}>{h}</span>
        ))}
      </div>

      {/* Company Story Section */}
      <div className="about-main-row">
        <div className="about-story">
          <h2 className="about-section-title">Our Story</h2>
          <p>
            ExploreHimalayas was founded in 2022 with a sacred mission: to connect spiritual seekers with the divine energy of Adi Kailash and the majestic beauty of Panchachuli peaks in the Kumaon Himalayas.
          </p>
          <p>
            What started as a small team of passionate Kumaoni mountain lovers has grown into a trusted travel partner for hundreds of spiritual seekers and adventure enthusiasts. Our deep roots in the Kumaon region, combined with local expertise and cultural understanding, create experiences that are both authentic and spiritually enriching.
          </p>
          <p>
            We believe that every journey to Adi Kailash and Panchachuli should be transformative - not just for the traveler, but for the local Kumaoni communities we work with. Every trek we create is designed to foster meaningful connections with local culture, promote sustainable tourism, and preserve the sacredness of these divine peaks.
          </p>
        </div>
        <div className="about-founder-card">
          <img src={founderImg} alt="Founder Ankit Dhami" className="about-founder-img-new" />
          <h3 className="about-founder-name-new">Ankit Dhami</h3>
          <span className="about-founder-title-new">Founder & Chief Explorer</span>
          <p className="about-founder-bio-new">
            "I grew up in the sacred valleys of Kumaon. My dream is to share the divine energy of Adi Kailash and the majestic beauty of Panchachuli with spiritual seekers from around India."
          </p>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="about-mission-section">
        <div className="about-mission-content">
          <h2 className="about-section-title">Our Mission & Values</h2>
          <div className="about-mission-grid">
            <div className="about-mission-item">
              <h3>Sacred Journeys</h3>
              <p>We specialize in spiritual treks to Adi Kailash and Panchachuli, offering authentic cultural immersion and divine experiences that create lasting memories.</p>
            </div>
            <div className="about-mission-item">
              <h3>Kumaoni Heritage</h3>
              <p>Our commitment to preserving Kumaoni culture and supporting local communities ensures these sacred peaks remain pristine for future generations.</p>
            </div>
            <div className="about-mission-item">
              <h3>Safety First</h3>
              <p>Your safety is our top priority. All our guides are certified, experienced in high-altitude treks, and equipped with emergency protocols.</p>
            </div>
            <div className="about-mission-item">
              <h3>Local Empowerment</h3>
              <p>We work directly with Kumaoni communities, ensuring tourism benefits the people who call these sacred mountains home.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievements-section">
        <h2 className="about-section-title">Our Achievements</h2>
        <div className="about-achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="about-achievement-item" key={index}>
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team-section">
        <h2 className="about-section-title">Meet Our Expert Team</h2>
        <div className="about-team-grid">
          {teamMembers.map((member, index) => (
            <div className="about-team-member" key={index}>
              <img src={member.image} alt={member.name} className="team-member-img" />
              <h3 className="team-member-name">{member.name}</h3>
              <span className="team-member-position">{member.position}</span>
              <p className="team-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="about-testimonials-section">
        <h2 className="about-section-title">What Our Travelers Say</h2>
        <div className="about-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="about-testimonial-item" key={index}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <h2>Ready to Experience Adi Kailash & Panchachuli?</h2>
        <p>Join hundreds of satisfied spiritual seekers who have discovered the divine energy of these sacred peaks with us.</p>
        <div className="about-cta-buttons">
          <button className="cta-primary" onClick={handleStartJourney}>Start Your Journey</button>
          <button className="cta-secondary" onClick={handleContactUs}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default About; 
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">exploreHimalayas</h2>
          <p className="footer-tagline">Discover the beauty of the Himalayas with us.</p>
          <p className="footer-about">We offer guided tours, trekking, and cultural experiences across the Himalayas. Our team ensures your journey is safe, memorable, and full of adventure.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Guided Tours</a></li>
            <li><a href="#">Trekking</a></li>
            <li><a href="#">Cultural Experiences</a></li>
            <li><a href="#">Custom Packages</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><FaEnvelope className="footer-icon" /> info@explorehimalayas.com</li>
            <li>Dharchula, Uttarakhand, India</li>
            <li>+91 98765 43210</li>
            <li>Founder: Viki Bisht</li>
          </ul>
          <div className="footer-social">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} exploreHimalayas. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './App.css';

const NewComponent = () => {
  return (
    <div className="rsmi">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#learnreact.js">Learn react.js</a></li>
        </ul>
      </nav>
      <h2>Rashmi Joshi</h2>
      <p>
        Welcome to our website, where innovation meets excellence and ideas turn into reality. We are dedicated to creating meaningful experiences that empower individuals and organizations to thrive in an ever-evolving digital world. Our mission is to deliver high-quality content, services, and solutions that inspire growth, foster creativity, and promote lifelong learning. Whether you're here to explore new opportunities, deepen your knowledge, or simply stay informed, we are committed to supporting you every step of the way. With a passionate team, a strong sense of purpose, and a drive to make a positive impact, we continue to push boundaries and embrace challenges as opportunities. Thank you for being a part of our journey—we're excited to have you with us
      </p>
    </div>
  );
};

export default NewComponent;
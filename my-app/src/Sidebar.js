import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EVM Pro</h2>
      <nav>
        <ScrollLink to="home" smooth={true} duration={500} className="sidebar-link">
          🏠 Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} className="sidebar-link">
          ℹ️ About
        </ScrollLink>
        <RouterLink to="/vote" className="sidebar-link">
          🗳️ Vote
        </RouterLink>
        <RouterLink to="/results" className="sidebar-link">
          📊 Results
        </RouterLink>
        <RouterLink to="/login" className="sidebar-link">
          🔐 Login
        </RouterLink>
      </nav>
    </div>
  );
}

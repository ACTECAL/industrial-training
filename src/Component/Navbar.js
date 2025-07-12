import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ links }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  // Use the links passed from parent component
  const navLinks = links;

  const handleLogout = () => {
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('user');
    setShowConfirm(false);
    navigate('/login');
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span role="img" aria-label="resume" style={{ marginRight: 8 }}>📄</span>
          ResumeBuilder
        </Link>
        <span className="navbar-slogan">| Build your career, one resume at a time</span>
      </div>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li
            key={link.path}
            className={location.pathname === link.path ? 'active' : ''}
          >
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
        {/* Show Logout only if user is logged in */}
        {localStorage.getItem('user') && (
          <li>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
      {/* Logout confirmation modal */}
      {showConfirm && (
        <div className="logout-confirm-overlay">
          <div className="logout-confirm-modal">
            <p>Are you sure you want to logout?</p>
            <button className="logout-confirm-btn" onClick={confirmLogout}>Yes</button>
            <button className="logout-cancel-btn" onClick={cancelLogout}>No</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
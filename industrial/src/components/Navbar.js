import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(props) {
  // Function to close navbar on link click (for mobile)
  const handleNavLinkClick = () => {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar && navbar.classList.contains('show')) {
      // Bootstrap collapse
      window.bootstrap?.Collapse.getOrCreateInstance(navbar).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">BBMS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/our-team" onClick={handleNavLinkClick}>Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup" onClick={handleNavLinkClick}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
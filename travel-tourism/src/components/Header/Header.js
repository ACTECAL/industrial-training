import React, { useState,useEffect } from 'react';
import { Container, Navbar, Offcanvas, Nav, NavDropdown  } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import "../Header/header.css";


const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
        window.removeEventListener("scroll", isSticky);
    }
  })

  useEffect(() => {
    const checkLogin = () => setLoggedIn(!!localStorage.getItem('token'));
    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn'); // cleanup old keys
    localStorage.removeItem('loggedInUser'); // cleanup old keys
    setLoggedIn(false);
    navigate('/');
  };

  const handleNavLinkClick = () => {
    setOpen(false);
    // Force remove is-sticky if at top
    const header = document.querySelector('.header-section');
    if (window.scrollY < 120 && header) {
      header.classList.remove('is-sticky');
    }
  };

  // sticky Header
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky'):
    header.classList.remove('is-sticky')
 
  }



  return (
    <header className="header-section">
      <Container>
        
      <Navbar expand="lg"   className=" p-0">
        {/* Logo Section */}
        
          <Navbar.Brand>
            <NavLink to="/">exploreHimalayas</NavLink>
          </Navbar.Brand>

          {/* end Logo Section */}
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
            show={open}
            
          >
            {/* mobile logo Section */}

            <Offcanvas.Header> 
            <h1 className="logo">exploreHimalayas</h1>
            <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
              <i className='bi bi-x-lg'></i>
              </span>
            </Offcanvas.Header>
         {/* end Mobile Logo Section */}
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>Home</NavLink>
                <NavLink className="nav-link" to="/about" onClick={handleNavLinkClick}>About Us</NavLink>
                <NavLink className="nav-link" to="/gallery" onClick={handleNavLinkClick}>Gallery</NavLink>
                <NavLink className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
                <NavDropdown title="Account" id="account-dropdown" className="nav-link account-dropdown">
                  {loggedIn ? (
                    <>
                      <NavDropdown.Item as={NavLink} to="/profile" onClick={handleNavLinkClick}>Profile</NavDropdown.Item>
                      <NavDropdown.Item as="button" onClick={handleLogout}>Logout</NavDropdown.Item>
                    </>
                  ) : (
                    <>
                      <NavDropdown.Item as={NavLink} to="/signup" onClick={handleNavLinkClick}>Signup</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/login" onClick={handleNavLinkClick}>Login</NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
                <NavLink className="nav-link" to="/dashboard" onClick={handleNavLinkClick}>User Dashboard</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="ms-md-4 ms-2">
            {/* Removed Book Now button */}
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
            </li>
          </div>
          </Navbar>
          
        </Container>
      
    </header>
  );
};

export default Header;

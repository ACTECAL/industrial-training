import React, { useState, useEffect } from 'react';
import { Container, Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import "../Header/header.css";

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [adminLoggedIn, setAdminLoggedIn] = useState(!!localStorage.getItem('admin_token'));

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // Update login state on token change (including after login)
  useEffect(() => {
    const checkLogin = () => setAdminLoggedIn(!!localStorage.getItem('admin_token'));
    // Check on mount
    checkLogin();
    // Listen for storage changes (other tabs)
    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, []);

  // Also check on every render (for immediate update after login)
  useEffect(() => {
    setAdminLoggedIn(!!localStorage.getItem('admin_token'));
  });

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('adminLoggedIn'); // cleanup old keys
    localStorage.removeItem('adminLoggedInUser'); // cleanup old keys
    setAdminLoggedIn(false);
    navigate('/admin-login');
  };

  // sticky Header
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
      header.classList.remove('is-sticky');
  };

  return (
    <header className="header-section admin-header">
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo Section */}
          <Navbar.Brand>
            <NavLink to="/admin">AdminPanel</NavLink>
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
              <h1 className="logo">AdminPanel</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className='bi bi-x-lg'></i>
              </span>
            </Offcanvas.Header>
            {/* end Mobile Logo Section */}
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/admin/bookings">Bookings</NavLink>
                <NavLink className="nav-link" to="/admin/destinations">Destinations</NavLink>
                <NavLink className="nav-link" to="/admin/contacts">Contacts</NavLink>
                <NavLink className="nav-link" to="/admin/analytics">Analytics</NavLink>
                <NavLink className="nav-link" to="/admin/gallery">Gallery</NavLink>
                <NavDropdown title="Admin Account" id="admin-account-dropdown" className="nav-link account-dropdown">
                  {adminLoggedIn ? (
                    <>
                      <NavDropdown.Item as={NavLink} to="/admin/profile">Profile</NavDropdown.Item>
                      <NavDropdown.Item as="button" onClick={handleLogout}>Logout</NavDropdown.Item>
                    </>
                  ) : (
                    <>
                      <NavDropdown.Item as={NavLink} to="/admin-signup">Signup</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/admin-login">Login</NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default AdminNavbar; 
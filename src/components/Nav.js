import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './Nav.css';
import Button from './Button';

function Nav({ user, cart, logout }) {
  const navigate = useNavigate();
  const [showUserMenuState, setShowUserMenuState] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const dropdownRef = useRef(null);
  const userMenuRef = useRef(null);
  const searchRef = useRef(null);

  // Search data
  const searchData = [
    // Free Courses
    {
      title: "C Programming",
      description: "Learn the basics of C programming language, syntax, and problem-solving.",
      type: "Free Course",
      category: "Programming",
      path: "/cheatsheet/c"
    },
    {
      title: "JavaScript",
      description: "Start your programming journey with JavaScript fundamentals and simple projects.",
      type: "Free Course",
      category: "Web Development",
      path: "/cheatsheet/javascript"
    },
    {
      title: "HTML",
      description: "Build the structure of web pages with HTML, the foundation of the web.",
      type: "Free Course",
      category: "Web Development",
      path: "/cheatsheet/html"
    },
    {
      title: "RDBMS",
      description: "Learn the basics of Relational Database Management Systems and SQL.",
      type: "Free Course",
      category: "Database",
      path: "/cheatsheet/rdbms"
    },
    {
      title: "Git & GitHub",
      description: "Master version control with Git and collaborate using GitHub.",
      type: "Free Course",
      category: "Development Tools",
      path: "/cheatsheet/git"
    },
    // Paid Courses
    {
      title: "C++ Programming",
      description: "Master object-oriented programming and advanced concepts in C++.",
      type: "Paid Course",
      category: "Programming",
      path: "/cheatsheet/cpp"
    },
    {
      title: "CSS",
      description: "Style your web pages beautifully using modern CSS techniques.",
      type: "Paid Course",
      category: "Web Development",
      path: "/cheatsheet/css"
    },
    {
      title: "Data Structures",
      description: "Understand core data structures for efficient coding and interviews.",
      type: "Paid Course",
      category: "Computer Science",
      path: "/cheatsheet/ds"
    },
    {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts with real-world projects.",
      type: "Paid Course",
      category: "Programming",
      path: "/cheatsheet/python"
    },
    {
      title: "React.js",
      description: "Build modern web applications with React.js and component-based architecture.",
      type: "Paid Course",
      category: "Web Development",
      path: "/cheatsheet/react"
    },
    {
      title: "Node.js",
      description: "Learn server-side JavaScript development with Node.js and Express.",
      type: "Paid Course",
      category: "Web Development",
      path: "/cheatsheet/nodejs"
    },
    {
      title: "Machine Learning",
      description: "Introduction to machine learning algorithms and data science concepts.",
      type: "Paid Course",
      category: "Data Science",
      path: "/cheatsheet/ml"
    },
    // Pages
    {
      title: "Home",
      description: "Welcome to our e-learning platform",
      type: "Page",
      category: "Navigation",
      path: "/"
    },
    {
      title: "About",
      description: "Learn more about our platform and mission",
      type: "Page",
      category: "Navigation",
      path: "/about"
    },
    {
      title: "Contact",
      description: "Get in touch with us",
      type: "Page",
      category: "Navigation",
      path: "/contact"
    },
    {
      title: "Courses",
      description: "Browse all available courses",
      type: "Page",
      category: "Navigation",
      path: "/courses"
    },
    {
      title: "Free Courses",
      description: "Access free educational content",
      type: "Page",
      category: "Navigation",
      path: "/free-courses"
    },
    {
      title: "Paid Courses",
      description: "Premium courses with advanced content",
      type: "Page",
      category: "Navigation",
      path: "/paid-courses"
    }
  ];

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered);
    setShowSearchResults(true);
  };

  const handleSearchResultClick = (result) => {
    navigate(result.path);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCoursesDropdown(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenuState(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    if (logout) {
      logout();
    }
    setShowUserMenuState(false);
    navigate('/');
  };

  const handleCourseNavigation = (path) => {
    console.log('Navigating to:', path);
    setShowCoursesDropdown(false);
    navigate(path);
  };

  const handleCoursesClick = (e) => {
    e.preventDefault();
    console.log('Courses clicked - navigating to /courses');
    navigate('/courses');
  };

  const toggleUserMenu = () => {
    setShowUserMenuState(!showUserMenuState);
    setShowCoursesDropdown(false); // Close courses dropdown if open
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          E-Learning
        </Link>
        <div className="nav-links">
          <div 
            ref={dropdownRef}
            className="courses-dropdown"
            onMouseEnter={() => setShowCoursesDropdown(true)}
            onMouseLeave={() => setShowCoursesDropdown(false)}
          >
            <span 
              className="courses-link"
              onClick={handleCoursesClick}
            >
              Courses
              <span className="dropdown-arrow">▼</span>
            </span>
            {showCoursesDropdown && (
              <div className="dropdown-menu">
                <div 
                  className="dropdown-item"
                  onClick={() => handleCourseNavigation('/free-courses')}
                >
                  <span className="dropdown-icon">🎓</span>
                  Free Courses
                </div>
                <div 
                  className="dropdown-item"
                  onClick={() => handleCourseNavigation('/paid-courses')}
                >
                  <span className="dropdown-icon">⭐</span>
                  Premium Courses
                </div>
              </div>
            )}
          </div>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      
      {/* Search Bar - Center */}
      <div className="nav-center" ref={searchRef}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search courses, cheat sheets, and more..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
            onFocus={() => searchQuery.trim() !== '' && setShowSearchResults(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && searchQuery.trim() !== '') {
                setShowSearchResults(true);
              }
            }}
          />
          <span 
            className="search-icon"
            onClick={() => {
              if (searchQuery.trim() !== '') {
                setShowSearchResults(true);
              }
            }}
          >
            🔍
          </span>
          
          {showSearchResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="search-result-item"
                  onClick={() => handleSearchResultClick(result)}
                >
                  <div className="search-result-icon">{result.icon}</div>
                  <div className="search-result-content">
                    <div className="search-result-title">{result.title}</div>
                    <div className="search-result-description">{result.description}</div>
                    <div className="search-result-meta">
                      <span className="search-result-type">{result.type}</span>
                      <span className="search-result-category">{result.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {showSearchResults && searchQuery.trim() !== '' && searchResults.length === 0 && (
            <div className="search-results">
              <div className="search-no-results">
                <span className="search-no-results-icon">🔍</span>
                <div className="search-no-results-text">
                  <div>No results found for "{searchQuery}"</div>
                  <div className="search-no-results-suggestion">Try searching for: courses, programming, web development, etc.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="nav-right">
        {user ? (
          <>
            <div className="cart-section">
              <button 
                className="cart-btn"
                onClick={() => navigate('/checkout')}
              >
                🛒 Cart
                {cart && cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
              </button>
            </div>
            
            <div className="user-section" ref={userMenuRef}>
              <button 
                className="user-menu-btn"
                onClick={toggleUserMenu}
              >
                {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
                <span className="user-name">
                  {user.email ? user.email.split('@')[0] : 'User'}
                </span>
                <span className="user-arrow">▼</span>
              </button>
              
              {showUserMenuState && (
                <div className="user-menu">
                  <Link to="/dashboard" onClick={() => setShowUserMenuState(false)}>
                    Dashboard
                  </Link>
                  <Link to="/my-courses" onClick={() => setShowUserMenuState(false)}>
                    My Courses
                  </Link>
                  <Link to="/certificates" onClick={() => setShowUserMenuState(false)}>
                    My Certificates
                  </Link>
                  <Button onClick={handleLogout}>Logout</Button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Log in</Link>
            <Link to="/signup" className="signup-btn">Sign up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav; 
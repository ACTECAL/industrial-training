import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    
    <div className="home-container">
      {/* Slider Start */}
      <div id="bloodBankCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
       <div className="carousel-inner">
  <div className="carousel-item active">
    <img
      src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=900&q=80"
      className="d-block w-100"
      alt="Blood Donation"
      style={{ height: "320px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
      <h5>Donate Blood, Save Lives</h5>
    </div>
  </div>
  <div className="carousel-item">
    <img
      src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&w=900&q=80"
      className="d-block w-100"
      alt="Blood Bank Storage"
      style={{ height: "320px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
      <h5>Safe Blood Storage & Management</h5>
    </div>
  </div>
  <div className="carousel-item">
    <img
      src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
      className="d-block w-100"
      alt="Hospital Blood Transfusion"
      style={{ height: "320px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
      <h5>Trusted Hospital Network</h5>
    </div>
  </div>
  <div className="carousel-item">
    <img
      src="https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&w=900&q=80"
      className="d-block w-100"
      alt="Healthcare Team"
      style={{ height: "320px", objectFit: "cover" }}
    />
    <div className="carousel-caption d-none d-md-block">
      <h5>Efficient Healthcare Team</h5>
    </div>
  </div>
</div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bloodBankCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bloodBankCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Slider End */}

      {/* ...existing homepage content... */}
    
  
    
      <h1>Welcome to Blood Bank Management System</h1>
      <p className="home-intro">
        Your trusted platform for safe and efficient blood donation, storage, and transfusion management.
      </p>
      <div className="home-features">
        <div className="feature">
          <h3>Donate Blood</h3>
          <p>Register as a donor and help save lives in your community.</p>
        </div>
        <div className="feature">
          <h3>Request Blood</h3>
          <p>Find and request the required blood group quickly and reliably.</p>
        </div>
        <div className="feature">
          <h3>Track Inventory</h3>
          <p>Hospitals can monitor blood stock in real-time and manage supply efficiently.</p>
        </div>
      </div>
      <button className="get-started-btn" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default HomePage;
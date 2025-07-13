import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './destination.css';
import BookNowModal from './BookNowModal';
import { useNavigate } from 'react-router-dom';

const fallbackDestinations = [
  {
    name: 'Aadi Kailash',
    slug: 'aadi-kailash',
    desc: 'A sacred mountain in the Himalayas, known as Chhota Kailash, offering spiritual peace and breathtaking views.',
    img: require('../assets/slider/1.jpg'),
    package: {
      label: 'Tour Package',
      duration: '9 Days / 8 Nights',
      price: '₹32,000'
    }
  },
  {
    name: 'Om Parvat',
    slug: 'om-parvat',
    desc: 'Famous for the natural Om symbol formed by snow, Om Parvat is a mystical destination for trekkers and pilgrims.',
    img: require('../assets/slider/2.jpg'),
    package: {
      label: 'Tour Package',
      duration: '9 Days / 8 Nights',
      price: '₹28,500'
    }
  },
  {
    name: 'Panchachuli',
    slug: 'panchachuli',
    desc: 'A group of five majestic snow-capped peaks, Panchachuli is a paradise for adventure lovers and nature enthusiasts.',
    img: require('../assets/slider/3.jpg'),
    package: {
      label: 'Tour Package',
      duration: '8 Days / 7 Nights',
      price: '₹25,000'
    }
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const Destination = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState('');
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/destinations')
      .then(res => res.json())
      .then(data => {
        // Map backend data to frontend structure
        setDestinations(data.map(dest => ({
          name: dest.name,
          slug: dest.name.toLowerCase().replace(/\s+/g, '-'),
          desc: dest.description,
          img: dest.img || require('../assets/slider/1.jpg'), // fallback image if not set
          package: {
            label: dest.package_label || 'Tour Package',
            duration: dest.package_duration || '',
            price: dest.package_price || ''
          }
        })));
      })
      .catch(() => setDestinations(fallbackDestinations));
  }, []);

  const handleBookNow = (packageName) => {
    setSelectedPackage(packageName);
    setModalOpen(true);
  };
  const handleExplore = (slug) => {
    navigate(`/destination/${slug}`);
  };

  return (
    <section className="destination-section">
      <h2 className="destination-title">Destinations</h2>
      <div className="destination-slider-slick">
        <Slider {...sliderSettings}>
          {destinations.map((dest, idx) => (
            <div className="destination-slide" key={idx}>
              <img src={dest.img} alt={dest.name} className="destination-img" />
              <div className="destination-card">
                <h3 className="dest-name">{dest.name}</h3>
                <p className="dest-desc">{dest.desc}</p>
                <div className="package-details">
                  <span className="package-label">{dest.package.label}</span>
                  <span className="package-duration">{dest.package.duration}</span>
                  <span className="package-price">{dest.package.price}</span>
                </div>
                <div className="destination-btn-group">
                  <button className="destination-btn book-btn" onClick={() => handleBookNow(dest.name)}>Booking Request</button>
                  <button className="destination-btn explore-btn" onClick={() => handleExplore(dest.slug)}>Explore</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <BookNowModal open={modalOpen} onClose={() => setModalOpen(false)} packageName={selectedPackage} />
    </section>
  );
};

export default Destination; 
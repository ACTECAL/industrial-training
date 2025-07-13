import React from "react";
import { useParams } from "react-router-dom";
import './destinationdetail.css';

const destinations = [
  {
    slug: 'aadi-kailash',
    name: 'Aadi Kailash',
    desc: 'A sacred mountain in the Himalayas, known as Chhota Kailash, offering spiritual peace and breathtaking views.',
    // Use a more premium hero image (replace with your best available or a royalty-free one)
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    map: 'https://www.google.com/maps?q=Aadi+Kailash&output=embed',
    package: {
      label: 'Tour Package',
      duration: '9 Days / 8 Nights',
      price: '₹32,000'
    },
    history: 'Aadi Kailash, also called Chhota Kailash, is revered as the earthly abode of Lord Shiva. Pilgrims have visited this region for centuries, drawn by its spiritual aura and the challenging trek through the Kuti Valley.',
    people: 'The region is home to the Kumaoni and Bhotiya communities, known for their warm hospitality and rich traditions. Local guides often share fascinating stories and folklore.',
    weather: 'Weather is cool to cold year-round. Summer (May-June) is pleasant (10-18°C), while monsoon (July-Sept) brings rain and landslides. Autumn (Sept-Oct) is best for trekking. Winters are harsh and snowy.',
    bestTime: 'May-June and September-October are the best months to visit.'
  },
  {
    slug: 'om-parvat',
    name: 'Om Parvat',
    desc: 'Famous for the natural Om symbol formed by snow, Om Parvat is a mystical destination for trekkers and pilgrims.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
    map: 'https://www.google.com/maps?q=Om+Parvat&output=embed',
    package: {
      label: 'Tour Package',
      duration: '9 Days / 8 Nights',
      price: '₹28,500'
    },
    history: 'Om Parvat is unique for the naturally occurring “Om” symbol on its snow face, attracting both trekkers and spiritual seekers. The area is part of the ancient trade route to Tibet.',
    people: 'The local Bhotiya people are known for their resilience and deep-rooted culture. Their festivals and cuisine reflect a blend of Indian and Tibetan influences.',
    weather: 'Weather is cold and unpredictable. Summer (May-June) is cool (8-16°C), monsoon brings rain and fog, and autumn is clear and best for views. Winters are extremely cold and snowy.',
    bestTime: 'May-June and September-October are ideal for clear views and safe travel.'
  },
  {
    slug: 'panchachuli',
    name: 'Panchachuli',
    desc: 'A group of five majestic snow-capped peaks, Panchachuli is a paradise for adventure lovers and nature enthusiasts.',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    map: 'https://www.google.com/maps?q=Panchachuli&output=embed',
    package: {
      label: 'Tour Package',
      duration: '8 Days / 7 Nights',
      price: '₹25,000'
    },
    history: 'The Panchachuli peaks are steeped in legend, believed to be the place where the Pandavas cooked their last meal before ascending to heaven. The area is famous for its scenic trekking routes.',
    people: 'Villages around Panchachuli are inhabited by the Rung and Bhotiya tribes, who are skilled in weaving and traditional crafts. Their culture is closely tied to the mountains.',
    weather: 'Weather is cool in summer (10-20°C), with heavy monsoon rains and cold, snowy winters. Autumn offers the clearest views of the peaks.',
    bestTime: 'April-June and September-October are best for trekking and sightseeing.'
  }
];

const DestinationDetail = () => {
  const { slug } = useParams();
  const dest = destinations.find(d => d.slug === slug);
  if (!dest) return <div className="destination-detail-section"><h2>Destination not found</h2></div>;
  return (
    <section className="destination-detail-section">
      <div className="destination-hero fullscreen-hero">
        <img src={dest.img} alt={dest.name} className="destination-hero-img fullscreen-hero-img" />
        <div className="destination-hero-overlay fullscreen-hero-overlay">
          <h1 className="destination-hero-title fullscreen-hero-title">{dest.name}</h1>
        </div>
      </div>
      <div className="destination-detail-content fullscreen-detail-content">
        <p className="destination-detail-desc">{dest.desc}</p>
        <div className="destination-detail-package">
          <span className="package-label">{dest.package.label}</span>
          <span className="package-duration">{dest.package.duration}</span>
          <span className="package-price">{dest.package.price}</span>
        </div>
        <div className="destination-detail-extra">
          <h2>About {dest.name}</h2>
          <p className="destination-detail-history">{dest.history}</p>
          <h3>Local People & Culture</h3>
          <p className="destination-detail-people">{dest.people}</p>
          <h3>Weather & Best Time</h3>
          <p className="destination-detail-weather">{dest.weather}</p>
          <p className="destination-detail-besttime"><strong>Best Time to Visit:</strong> {dest.bestTime}</p>
        </div>
        <div className="destination-detail-map-section">
          <h2>Location Map</h2>
          <div className="destination-detail-map-wrap">
            <iframe
              src={dest.map}
              title={dest.name + ' Map'}
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetail; 
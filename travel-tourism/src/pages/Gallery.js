import React, { useEffect, useState } from "react";
import './gallery.css';

const fallbackImages = [
  { image: require('../assets/slider/1.jpg'), caption: '' },
  { image: require('../assets/slider/2.jpg'), caption: '' },
  { image: require('../assets/slider/3.jpg'), caption: '' },
  { image: require('../assets/images/gallery1.jpg'), caption: '' },
  { image: require('../assets/images/gallery2.jpeg'), caption: '' },
  { image: require('../assets/images/gallery3.webp'), caption: '' },
];

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [modalIdx, setModalIdx] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setGallery(data.map(g => ({ image: g.img, caption: g.title })));
        } else {
          setGallery(fallbackImages);
        }
      })
      .catch(() => setGallery(fallbackImages));
  }, []);

  const openModal = idx => setModalIdx(idx);
  const closeModal = () => setModalIdx(null);
  const prevImg = () => setModalIdx(i => (i === 0 ? gallery.length - 1 : i - 1));
  const nextImg = () => setModalIdx(i => (i === gallery.length - 1 ? 0 : i + 1));

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {gallery.map((g, idx) => (
          <button className="gallery-img-link" key={idx} onClick={() => openModal(idx)} style={{background:'none',border:'none',padding:0,margin:0,cursor:'pointer'}}>
            <img src={g.image} alt={g.caption || `Gallery ${idx+1}`} className="gallery-img" />
            {g.caption && <div className="gallery-caption">{g.caption}</div>}
          </button>
        ))}
      </div>
      {modalIdx !== null && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal" onClick={e => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>&times;</button>
            <img src={gallery[modalIdx].image} alt={gallery[modalIdx].caption || ''} className="gallery-modal-img" />
            {gallery[modalIdx].caption && <div className="gallery-modal-caption">{gallery[modalIdx].caption}</div>}
            <button className="gallery-modal-nav left" onClick={prevImg}>&#8592;</button>
            <button className="gallery-modal-nav right" onClick={nextImg}>&#8594;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 
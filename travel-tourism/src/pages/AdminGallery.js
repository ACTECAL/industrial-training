import React, { useState, useEffect } from "react";
import './admindashboard.css';
import { useNavigate } from 'react-router-dom';

const AdminGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [form, setForm] = useState({ image: '', caption: '' });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin-login');
      return;
    }
    fetch('http://localhost:5000/api/gallery', {
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(res => res.json())
      .then(data => setGallery(data))
      .catch(() => setGallery([]));
  }, [navigate]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = e => {
    const f = e.target.files[0];
    setFile(f);
    if (f) {
      const reader = new FileReader();
      reader.onload = ev => setPreview(ev.target.result);
      reader.readAsDataURL(f);
    } else {
      setPreview('');
    }
  };

  const handleAdd = e => {
    e.preventDefault();
    const token = localStorage.getItem('admin_token');
    if (!token) return navigate('/admin-login');
    if (!form.image) return setMsg('Image URL required');
    fetch('http://localhost:5000/api/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ img: form.image, title: form.caption })
    })
      .then(res => res.json())
      .then(() => {
        setMsg('Photo added!');
        setForm({ image: '', caption: '' });
        // Refresh list
        fetch('http://localhost:5000/api/gallery', { headers: { 'Authorization': 'Bearer ' + token } })
          .then(res => res.json())
          .then(data => setGallery(data));
        setTimeout(() => setMsg(''), 1200);
      });
  };

  const handleDelete = id => {
    const token = localStorage.getItem('admin_token');
    if (!token) return navigate('/admin-login');
    fetch(`http://localhost:5000/api/gallery/${id}`, { method: 'DELETE', headers: { 'Authorization': 'Bearer ' + token } })
      .then(() => {
        // Refresh list
        fetch('http://localhost:5000/api/gallery', { headers: { 'Authorization': 'Bearer ' + token } })
          .then(res => res.json())
          .then(data => setGallery(data));
      });
  };

  return (
    <section className="admin-section">
      <h1 className="admin-title">Manage Gallery</h1>
      <form className="admin-form" onSubmit={handleAdd} style={{marginBottom:'2rem'}}>
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="admin-input" />
        <input type="file" accept="image/*" onChange={handleFile} style={{marginTop:'0.7rem'}} />
        <input name="caption" value={form.caption} onChange={handleChange} placeholder="Caption (optional)" className="admin-input" />
        {preview && (
          <div style={{margin:'0.7rem 0'}}>
            <img src={preview} alt="Preview" style={{maxWidth:120, maxHeight:80, borderRadius:8, boxShadow:'0 2px 8px rgba(30,41,59,0.13)'}} />
            <div style={{fontSize:'0.95rem', color:'#1e3c72'}}>Preview</div>
          </div>
        )}
        <button className="admin-btn confirm-btn" type="submit">Add Photo</button>
        {msg && <div className="form-success" style={{marginTop:'0.7rem'}}>{msg}</div>}
      </form>
      <div className="admin-gallery-grid">
        {gallery.length === 0 ? (
          <div className="admin-empty">No photos in gallery.</div>
        ) : (
          <div className="gallery-grid">
            {gallery.map((g, idx) => (
              <div className="gallery-item" key={g.id || idx}>
                <img src={g.img} alt={g.title || ''} className="gallery-img" />
                {g.title && <div className="gallery-caption">{g.title}</div>}
                <button className="admin-btn delete-btn" onClick={() => handleDelete(g.id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminGallery; 
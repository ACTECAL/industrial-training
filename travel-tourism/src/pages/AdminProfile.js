import React, { useEffect, useState } from "react";
import './userprofile.css';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin-login');
      return;
    }
    fetch('http://localhost:5000/api/admins/me', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(async res => {
        if (res.ok) {
          const data = await res.json();
          setAdmin(data);
        } else {
          setError('Session expired. Please login again.');
          setTimeout(() => navigate('/admin-login'), 1500);
        }
      })
      .catch(() => {
        setError('Could not fetch profile.');
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) return <div className="userprofile-section"><h2>Loading...</h2></div>;
  if (error) return <div className="userprofile-section"><h2>{error}</h2></div>;
  if (!admin) return <div className="userprofile-section"><h2>Admin not found.</h2></div>;

  const initials = admin.name ? admin.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2) : admin.email[0].toUpperCase();

  return (
    <section className="userprofile-section">
      <div className="userprofile-card">
        <div className="userprofile-avatar">{initials}</div>
        <h2 className="userprofile-name">{admin.name}</h2>
        <div className="userprofile-email">{admin.email}</div>
        <button className="userprofile-btn" onClick={() => navigate('/admin')}>Back to Dashboard</button>
      </div>
    </section>
  );
};

export default AdminProfile; 
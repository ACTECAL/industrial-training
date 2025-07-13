import React, { useEffect, useState } from "react";
import './userprofile.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetch('http://localhost:5000/api/users/me', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(async res => {
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setError('Session expired. Please login again.');
          setTimeout(() => navigate('/login'), 1500);
        }
      })
      .catch(() => {
        setError('Could not fetch profile.');
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) return <div className="userprofile-section"><h2>Loading...</h2></div>;
  if (error) return <div className="userprofile-section"><h2>{error}</h2></div>;
  if (!user) return <div className="userprofile-section"><h2>User not found.</h2></div>;

  const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2) : user.email[0].toUpperCase();

  return (
    <section className="userprofile-section">
      <div className="userprofile-card">
        <div className="userprofile-avatar">{initials}</div>
        <h2 className="userprofile-name">{user.name}</h2>
        <div className="userprofile-email">{user.email}</div>
        <button className="userprofile-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </section>
  );
};

export default UserProfile; 
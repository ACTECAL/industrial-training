import React, { useState, useEffect } from "react";
import './admindashboard.css';
import { useNavigate } from 'react-router-dom';

const AdminDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', img: '', package_label: '', package_duration: '', package_price: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin-login');
      return;
    }
    fetch('http://localhost:5000/api/destinations', {
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(res => res.json())
      .then(data => setDestinations(data))
      .catch(() => setDestinations([]));
  }, [navigate]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = e => {
    e.preventDefault();
    const token = localStorage.getItem('admin_token');
    if (!token) return navigate('/admin-login');
    if (!form.name || !form.description) return setMsg('Name and description required');
    fetch('http://localhost:5000/api/destinations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({
        name: form.name,
        description: form.description,
        img: form.img,
        package_label: form.package_label,
        package_duration: form.package_duration,
        package_price: form.package_price
      })
    })
      .then(res => res.json())
      .then(() => {
        setMsg('Destination added!');
        // Refresh list
        fetch('http://localhost:5000/api/destinations', { headers: { 'Authorization': 'Bearer ' + token } })
          .then(res => res.json())
          .then(data => setDestinations(data));
        setTimeout(() => setMsg(''), 1200);
      });
  };

  const handleDelete = id => {
    const token = localStorage.getItem('admin_token');
    if (!token) return navigate('/admin-login');
    fetch(`http://localhost:5000/api/destinations/${id}`, { method: 'DELETE', headers: { 'Authorization': 'Bearer ' + token } })
      .then(res => res.json())
      .then(() => {
        // Refresh list
        fetch('http://localhost:5000/api/destinations', { headers: { 'Authorization': 'Bearer ' + token } })
          .then(res => res.json())
          .then(data => setDestinations(data));
      });
  };

  return (
    <section className="admin-section">
      <h1 className="admin-title">Manage Destinations</h1>
      <form className="admin-form" onSubmit={handleAdd} style={{marginBottom:'2rem'}}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Destination Name" className="admin-input" />
        <input name="img" value={form.img} onChange={handleChange} placeholder="Image URL" className="admin-input" />
        <input name="package_label" value={form.package_label} onChange={handleChange} placeholder="Package Label" className="admin-input" />
        <input name="package_duration" value={form.package_duration} onChange={handleChange} placeholder="Package Duration" className="admin-input" />
        <input name="package_price" value={form.package_price} onChange={handleChange} placeholder="Package Price" className="admin-input" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="admin-input" />
        <button className="admin-btn confirm-btn" type="submit">Add Destination</button>
        {msg && <div className="form-success" style={{marginTop:'0.7rem'}}>{msg}</div>}
      </form>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Package Label</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((dest, idx) => (
              <tr key={dest.id || idx}>
                <td>{dest.name}</td>
                <td>{dest.description}</td>
                <td>{dest.img ? <img src={dest.img} alt="" style={{width:60}} /> : '—'}</td>
                <td>{dest.package_label}</td>
                <td>{dest.package_duration}</td>
                <td>{dest.package_price}</td>
                <td>
                  <button className="admin-btn delete-btn" onClick={() => handleDelete(dest.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminDestinations; 
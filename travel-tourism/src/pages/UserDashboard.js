import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './userdashboard.css';

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(() => setBookings([]));
  }, []);

  const handleDelete = id => {
    fetch(`http://localhost:5000/api/bookings/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => {
        // Refresh bookings after delete
        fetch('http://localhost:5000/api/bookings')
          .then(res => res.json())
          .then(data => setBookings(data));
      });
  };

  if (bookings.length === 0) {
    return <div className="dashboard-section dashboard-empty"><h2>No bookings found.</h2>
      <button className="dashboard-back-btn" onClick={() => navigate('/')}>Back to Home</button>
    </div>;
  }

  return (
    <section className="dashboard-section">
      <button className="dashboard-back-btn" onClick={() => navigate('/')}>Back to Home</button>
      <h1 className="dashboard-title">Your Booking Requests</h1>
      <div className="dashboard-table-wrap">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>People</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, idx) => (
              <tr key={b.id || idx} className={b.confirmed ? 'confirmed-row' : ''}>
                <td>{b.destination}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.role}</td>
                <td>{b.people}</td>
                <td>{b.date}</td>
                <td>
                  {b.confirmed
                    ? <span className="confirmed">Confirmed</span>
                    : b.rejected
                      ? <span className="rejected">Rejected</span>
                      : <span className="pending">Pending</span>
                  }
                </td>
                <td>
                  <button className="dashboard-btn delete-btn" onClick={() => handleDelete(b.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserDashboard; 
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './admindashboard.css';

const AdminBookingsList = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(() => setBookings([]));
  }, []);

  // Accept/Reject handler
  const handleStatus = (id, status) => {
    fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
      .then(res => res.json())
      .then((data) => {
        setMessage(status === 'confirmed' ? 'Booking confirmed!' : 'Booking rejected!');
        // Refresh bookings after update
        fetch('http://localhost:5000/api/bookings')
          .then(res => res.json())
          .then(data => setBookings(data));
        setTimeout(() => setMessage(''), 2000);
      });
  };

  if (bookings.length === 0) {
    return <div className="admin-section admin-empty"><h2>No bookings found.</h2></div>;
  }

  return (
    <section className="admin-section">
      <h1 className="admin-title">All Bookings</h1>
      {message && <div className="admin-success-msg" style={{marginBottom:'1rem',color:'green',fontWeight:'bold'}}>{message}</div>}
      <div className="admin-table-wrap">
        <table className="admin-table">
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
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, idx) => (
              <tr key={idx} className={b.confirmed ? 'confirmed-row' : b.rejected ? 'rejected-row' : ''} onClick={() => navigate('/admin', { state: { bookingIdx: idx } })} style={{cursor:'pointer'}}>
                <td>{b.destination}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.role}</td>
                <td>{b.people}</td>
                <td>{b.date}</td>
                <td>
                  {b.confirmed ? (
                    <span className="confirmed">Confirmed</span>
                  ) : b.rejected ? (
                    <span className="rejected">Rejected</span>
                  ) : (
                    <>
                      <span className="pending">Pending</span>
                      <button className="admin-btn accept-btn" onClick={() => handleStatus(b.id, 'confirmed')} style={{marginLeft:'8px'}}>Accept</button>
                      <button className="admin-btn reject-btn" onClick={() => handleStatus(b.id, 'rejected')} style={{marginLeft:'4px'}}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminBookingsList; 
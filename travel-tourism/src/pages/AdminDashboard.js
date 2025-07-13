import React, { useEffect, useState } from "react";
import './admindashboard.css';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(() => setBookings([]));
  }, []);

  const total = bookings.length;
  const confirmed = bookings.filter(b => b.confirmed).length;
  const rejected = bookings.filter(b => b.rejected).length;
  const pending = bookings.filter(b => !b.confirmed && !b.rejected).length;
  const recent = bookings.slice(-5).reverse();

  return (
    <section className="admin-dashboard-section">
      <h1 className="admin-dashboard-title">Admin Dashboard</h1>
      <div className="admin-dashboard-cards">
        <div className="admin-dashboard-card total">
          <div className="card-label">Total Bookings</div>
          <div className="card-value">{total}</div>
        </div>
        <div className="admin-dashboard-card confirmed">
          <div className="card-label">Confirmed</div>
          <div className="card-value">{confirmed}</div>
        </div>
        <div className="admin-dashboard-card pending">
          <div className="card-label">Pending</div>
          <div className="card-value">{pending}</div>
        </div>
        <div className="admin-dashboard-card rejected">
          <div className="card-label">Rejected</div>
          <div className="card-value">{rejected}</div>
        </div>
      </div>
      <h2 className="recent-title">Recent Bookings</h2>
      {recent.length === 0 ? (
        <div className="admin-empty">No recent bookings.</div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Destination</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((b, idx) => (
                <tr key={idx} className={b.confirmed ? 'confirmed-row' : b.rejected ? 'rejected-row' : ''}>
                  <td>{b.destination}</td>
                  <td>{b.name}</td>
                  <td>{b.email}</td>
                  <td>{b.date}</td>
                  <td>
                    {b.confirmed ? <span className="confirmed">Confirmed</span> : b.rejected ? <span className="rejected">Rejected</span> : <span className="pending">Pending</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AdminDashboard; 
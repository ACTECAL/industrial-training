import React, { useEffect, useState } from "react";
import './admindashboard.css';

const AdminAnalytics = () => {
  const [users, setUsers] = useState([]);
  const [logins, setLogins] = useState(0);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
    const storedLogins = parseInt(localStorage.getItem('logins') || '0', 10);
    setLogins(storedLogins);
  }, []);

  return (
    <section className="admin-section">
      <h1 className="admin-title">User Analytics</h1>
      <div className="admin-dashboard-cards" style={{marginBottom:'2.5rem'}}>
        <div className="admin-dashboard-card total">
          <div className="card-label">Total Signups</div>
          <div className="card-value">{users.length}</div>
        </div>
        <div className="admin-dashboard-card confirmed">
          <div className="card-label">Total Logins</div>
          <div className="card-value">{logins}</div>
        </div>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr><td colSpan={2} style={{textAlign:'center'}}>No users found.</td></tr>
            ) : users.map((u, idx) => (
              <tr key={idx}>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminAnalytics; 
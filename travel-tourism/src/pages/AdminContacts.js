import React, { useEffect, useState } from "react";
import './admindashboard.css';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(() => setContacts([]));
  }, []);

  return (
    <section className="admin-section">
      <h1 className="admin-title">Contact Requests</h1>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr><td colSpan={4} style={{textAlign:'center'}}>No contact requests found.</td></tr>
            ) : contacts.map((c, idx) => (
              <tr key={c.id || idx}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.message}</td>
                <td>{c.created_at ? new Date(c.created_at).toLocaleString() : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminContacts; 
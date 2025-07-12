import React, { useState } from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

function AdminDashboard({ user }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  const handleAddFeatureCourse = () => {
    setActiveSection('feature-courses');
    navigate('/admin/add-feature-course');
  };

  return (
    <div className="admin-dashboard-root">
      {/* Sidebar */}
      <AdminSidebar 
        activeSection={activeSection} 
        onSectionChange={handleAddFeatureCourse} 
      />
      {/* Main Content */}
      <div className="admin-main-content">
        <div className="dashboard-header">
          <div className="user-profile">
            <div className="user-avatar">
              {user && user.email ? user.email.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="user-info">
              <h2>Welcome, Admin{user && user.email ? ` (${user.email.split('@')[0]})` : ''}!</h2>
              <p className="user-email">{user && user.email}</p>
              <div className="user-stats">
                <span className="stat">
                  <strong>3</strong> Pending Approvals
                </span>
                <span className="stat">
                  <strong>12</strong> Total Users
                </span>
                <span className="stat">
                  <strong>5</strong> New Messages
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="quick-actions">
          <h3>Admin Quick Actions</h3>
          <div className="action-buttons">
            <button className="action-btn primary" disabled>Manage Users (Coming Soon)</button>
            <button className="action-btn secondary" disabled>View Reports (Coming Soon)</button>
            <button className="action-btn secondary" disabled>Site Settings (Coming Soon)</button>
          </div>
        </div>
        <div className="recent-courses empty-state">
          <div className="empty-icon">🛠️</div>
          <h4>Admin Features Coming Soon</h4>
          <p>Here you will be able to manage users, view reports, and configure the platform.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard; 
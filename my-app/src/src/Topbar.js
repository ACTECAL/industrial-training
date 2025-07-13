import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="topbar-container">
      <h1 className="topbar-title">EVM Pro</h1>
      <div className="user-info">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout} className="btn-logout">Logout</button>
          </>
        ) : (
          <span>Welcome, Guest</span>
        )}
      </div>
    </div>
  );
}

export default Topbar; 
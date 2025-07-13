import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Login successful! Redirecting...');
        setMessageType('success');
        // Remove old keys if present
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedInUser');
        if (data.token) localStorage.setItem('token', data.token);
        setTimeout(() => navigate('/'), 1500);
      } else {
        setMessage(data.error || 'Login failed');
        setMessageType('error');
      }
    } catch (err) {
      setMessage('Login failed: ' + err.message);
      setMessageType('error');
    }
    setLoading(false);
  };

  return (
    <div className="login-bg">
      <div className="login-outer">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="login"
              placeholder="Username or Email"
              value={login}
              onChange={e => setLogin(e.target.value)}
              required
            />
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={{ width: '100%' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  color: '#007bff'
                }}
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          {message && (
            <p style={{ color: messageType === 'success' ? '#27ae60' : '#e74c3c' }}>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters');
      setMessageType('error');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setMessageType('error');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Signup successful! Redirecting to login...');
        setMessageType('success');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setMessage(data.error || 'Signup failed');
        setMessageType('error');
      }
    } catch (err) {
      setMessage('Signup failed: ' + err.message);
      setMessageType('error');
    }
    setLoading(false);
  };

  return (
    <div className="signup-bg">
      <div className="signup-outer">
        <div className="signup-form">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={6}
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
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                style={{ width: '100%' }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(v => !v)}
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
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Signing up...' : 'Signup'}
            </button>
          </form>
          {message && (
            <p style={{ color: messageType === 'success' ? '#27ae60' : '#e74c3c' }}>{message}</p>
          )}
          <p className="signup-tip">Tip: Use a strong password with letters, numbers, and symbols.</p>
          <p className="signup-login-link">Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup; 
import React, { useState } from 'react';

export default function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [showForgot, setShowForgot] = useState(false);

  // Login State
  const [voterId, setVoterId] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // Signup States
  const [fullName, setFullName] = useState('');
  const [emailOrAadhar, setEmailOrAadhar] = useState('');
  const [mobile, setMobile] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  // Forgot Password State
  const [forgotInput, setForgotInput] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');

  // ✅ LOGIN API Call
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: voterId, password }),
      });

      const data = await res.json();
      setLoginMessage(data.message || 'Login successful');
    } catch (err) {
      console.error('Login Error:', err);
      setLoginMessage('Login failed. Server not responding.');
    }
  };

  // ✅ SIGNUP API Call
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: emailOrAadhar,
          password: signupPassword,
          fullName,
          mobile,
        }),
      });

      const data = await res.json();
      setSignupMessage(data.message || 'Signup successful');
    } catch (err) {
      console.error('Signup Error:', err);
      setSignupMessage('Signup failed. Server not responding.');
    }
  };

  // Dummy Forgot Password Handler
  const handleForgot = async (e) => {
    e.preventDefault();
    setForgotMessage('If this account exists, a reset link has been sent.');
  };

  return (
    <div className="page" style={{ padding: '2rem', maxWidth: 400, margin: 'auto' }}>
      <div style={{ display: 'flex', marginBottom: '2rem' }}>
        <button
          onClick={() => { setActiveTab('login'); setShowForgot(false); }}
          style={{
            flex: 1,
            padding: '1rem',
            background: activeTab === 'login' && !showForgot ? '#007bff' : '#f0f0f0',
            color: activeTab === 'login' && !showForgot ? '#fff' : '#333',
            border: 'none',
            borderRadius: '8px 0 0 8px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
        <button
          onClick={() => { setActiveTab('signup'); setShowForgot(false); }}
          style={{
            flex: 1,
            padding: '1rem',
            background: activeTab === 'signup' ? '#007bff' : '#f0f0f0',
            color: activeTab === 'signup' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '0 8px 8px 0',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Signup
        </button>
      </div>

      {/* Login Form */}
      {activeTab === 'login' && !showForgot && (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          <input
            type="text"
            placeholder="Voter ID"
            value={voterId}
            onChange={(e) => setVoterId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Login
          </button>
          <p style={{ color: 'green', minHeight: 24 }}>{loginMessage}</p>
          <span style={{ textAlign: 'right', color: '#007bff', cursor: 'pointer', textDecoration: 'underline', fontSize: 14 }} onClick={() => setShowForgot(true)}>
            Forgot Password?
          </span>
        </form>
      )}

      {/* Forgot Password */}
      {showForgot && (
        <form onSubmit={handleForgot} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Forgot Password</h2>
          <input
            type="text"
            placeholder="Enter Email or Voter ID"
            value={forgotInput}
            onChange={(e) => setForgotInput(e.target.value)}
            required
          />
          <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Send Reset Link
          </button>
          <p style={{ color: 'green', minHeight: 24 }}>{forgotMessage}</p>
          <span style={{ textAlign: 'right', color: '#007bff', cursor: 'pointer', textDecoration: 'underline', fontSize: 14 }} onClick={() => setShowForgot(false)}>
            Back to Login
          </span>
        </form>
      )}

      {/* Signup Form */}
      {activeTab === 'signup' && !showForgot && (
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ textAlign: 'center' }}>Signup</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email or Aadhar"
            value={emailOrAadhar}
            onChange={(e) => setEmailOrAadhar(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            pattern="[0-9]{10}"
            maxLength={10}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: 4, fontWeight: 'bold' }}>
            Register
          </button>
          <p style={{ color: 'green', minHeight: 24 }}>{signupMessage}</p>
        </form>
      )}
    </div>
  );
}

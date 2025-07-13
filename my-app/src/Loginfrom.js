import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log('📤 Sending Login Request to backend...');

      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('📥 Got Response:', response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Backend Error:', errorData);
        alert('❌ ' + errorData.message);
        return;
      }

      const data = await response.json();
      console.log('✅ Success:', data);
      alert('✅ ' + data.message);
    } catch (err) {
      console.error('🔥 FETCH ERROR (React to Backend):', err);
      alert('❌ Server Error: ' + err.message);
    }
  };

  return (
    <div style={{ width: '300px', margin: '100px auto', padding: '20px', background: '#eee', borderRadius: '10px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

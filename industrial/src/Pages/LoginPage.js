import React, { useState } from "react";
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/login',
        form,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert(response.data.message || "Login successful");
      navigate('/user-details');
      // Yahan aap user ko dashboard ya home par redirect kar sakte hain
      // navigate('/dashboard');
    } catch (error) {
      alert(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="login-links">
        <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
      </div>
      <p>
        Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
      </p>
    </div>
  );
}

export default LoginPage;
import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // <-- Make sure this is imported

function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
     role: 'user'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/create',
        form, // <-- yahan form bhejein
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      alert("user signup successfully");
      navigate('/login');
    } catch (error) {
    console.log("API Error:", error.response?.data); // Yeh dekhein
    alert("Signup failed!");
  }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile number" value={form.mobile} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{' '}
        <span className="toggle-link" onClick={handleLoginRedirect}>Login</span>
      </p>
    </div>
  );
}

export default SignUpPage;
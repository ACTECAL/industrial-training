import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email address.')
        .required('Email is required.'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters.')
        .required('Password is required.'),
    }),
    onSubmit: async (values) => {
      setError('');
      try {
        const response = await fetch('http://localhost:8000/api/v1/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Welcome! Login successful.');
          localStorage.setItem('user', JSON.stringify(data.user || { email: values.email }));
          navigate('/dashboard');
        } else {
          setError(data.message || 'Login failed. Please check your credentials.');
        }
      } catch (err) {
        setError('Network error. Please try again.');
      }
    },
  });

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <form onSubmit={formik.handleSubmit} className="loginpage-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {formik.touched.email && formik.errors.email && (
        <p>{formik.errors.email}</p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.password && formik.errors.password && (
        <p>{formik.errors.password}</p>
      )}
      <input
        type="password"
        name="password"
        placeholder="Password (min 6 characters)"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <div className="forgot-password">
        <button 
          type="button" 
          onClick={handleForgotPassword}
          className="forgot-password-btn"
        >
          Forgot Password?
        </button>
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
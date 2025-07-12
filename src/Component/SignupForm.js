import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidMobile = (mobile) => {
    return /^[0-9]{10}$/.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!firstName || !lastName || !mobile || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      setIsLoading(false);
      return;
    }

    if (!isValidMobile(mobile)) {
      setError('Enter a valid 10-digit mobile number.');
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError('Enter a valid email address.');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

      try {
        const response = await fetch('http://localhost:8000/api/v1/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          name: `${firstName} ${lastName}`, // Combine first and last name
            mobile,
            email,
            password,
          role: 'user',
          }),
        });

        const data = await response.json();

        if (response.ok) {
        alert('Signup successful! Please login.');
          navigate('/login');
        } else {
          setError(data.message || 'Signup failed. Please try again.');
        }
      } catch (err) {
      console.error('Signup error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      {error && <div className="error-message">{error}</div>}
      
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        disabled={isLoading}
      />
      
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        disabled={isLoading}
      />
      
      <input
        type="text"
        placeholder="Mobile (10 digits)"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        maxLength={10}
        disabled={isLoading}
      />
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      
      <input
        type="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={isLoading}
      />
      
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  );
}

export default SignupForm;
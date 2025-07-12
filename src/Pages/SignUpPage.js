import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './SignUpPage.css';
import Button from '../components/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  mobile: yup
    .string()
    .required('Mobile Number is required')
    .matches(/^[0-9]{10}$/, 'Mobile Number must be 10 digits'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'Password must be at least 6 characters and contain at least 1 letter and 1 number.'
    ),
});

function SignUpPage({ setLoginPrefill }) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      mobile: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {

    const payload = {
        name: data.fullName,
        mobile: data.mobile,
        email: data.email,
        password: data.password,
        role: 'user'
      };

      try {
        const response = await axios.post(
          'http://localhost:5000/api/v1/user/create',
          payload,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

       alert("user signup successfully")
        setLoginPrefill({ email: data.email, password: data.password });
    setSuccess(true);
    setTimeout(() => {
      navigate('/login');
    }, 1500);
      } catch (error) {
        console.error('Error:', error);
      }

  };

  return (
    <div className="form-container">
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          {...register('fullName')}
        />
        {errors.fullName && <p style={{ color: 'red', margin: 0 }}>{errors.fullName.message}</p>}
        <input
          type="tel"
          placeholder="Mobile Number"
          {...register('mobile')}
          maxLength={10}
        />
        {errors.mobile && <p style={{ color: 'red', margin: 0 }}>{errors.mobile.message}</p>}
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        {errors.email && <p style={{ color: 'red', margin: 0 }}>{errors.email.message}</p>}
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
            style={{ paddingRight: 36 }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              position: 'absolute',
              right: 6,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              cursor: 'pointer',
              fontSize: 20,
              color: '#888',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 28,
              width: 28,
              borderRadius: 4
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={0}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && <p style={{ color: 'red', margin: 0 }}>{errors.password.message}</p>}
        <Button type="submit">Signup</Button>
      </form>
      {success && <p style={{ color: 'green' }}>Signup successful! Redirecting to login...</p>}
      <p>
        Already have an account?{' '}
        <span className="toggle-link" onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
}

export default SignUpPage;
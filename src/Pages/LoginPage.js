import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './LoginPage.css';
import Button from '../components/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

// Login schema
const schema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'Password must be at least 6 characters and contain at least 1 letter and 1 number.'
    ),
});

function LoginPage({ setUser, prefill = {} }) {
  const [showForgot, setShowForgot] = useState(false);
  const [forgotMsg, setForgotMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Login form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: prefill.email || '',
      password: prefill.password || '',
    },
  });

  // Forgot password form
  const {
    register: registerForgot,
    handleSubmit: handleForgotSubmit,
    formState: { errors: forgotErrors }
  } = useForm({
    resolver: yupResolver(yup.object().shape({
      email: yup.string().email('Enter a valid email').required('Email is required'),
    })),
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    if (prefill.email) setValue('email', prefill.email);
    if (prefill.password) setValue('password', prefill.password);
  }, [prefill, setValue]);

const onLogin = async (data) => {
  try {
    const payload = {
      email: data.email,
      password: data.password
    };

    const response = await axios.post('http://localhost:5000/api/v1/user/login', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.success) {
      const role = response.data.user.role;
      //what is this here ??
      //agr user ne login kiya to wo user wale me kese jayega ?
      const userObj = { ...response.data.user, isAdmin: role === 'admin' };
      setUser(userObj);
      alert(`${role} login successful`);
      navigate('/dashboard');
    } else {
      alert('Login failed');
    }

  } catch (error) {
    alert('Login error');
  }
};

    
  const handleForgotPassword = (data) => {
    setForgotMsg(`Password reset link sent to ${data.email}`);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onLogin)}>
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
        <Button type="submit">Login</Button>
      </form>
      
      <p style={{ margin: '10px 0 0 0' }}>
        <span
          className="toggle-link"
          onClick={() => { setShowForgot(true); setForgotMsg(''); }}
          style={{ fontSize: '0.98rem' }}
        >
          Forgot password?
        </span>
      </p>
      
      {showForgot && (
        <form onSubmit={handleForgotSubmit(handleForgotPassword)} style={{ marginTop: 10 }}>
          <input
            type="email"
            placeholder="Enter your email"
            {...registerForgot('email')}
          />
          {forgotErrors.email && <p style={{ color: 'red', margin: 0 }}>{forgotErrors.email.message}</p>}
          <Button type="submit" className="admin-login-btn" style={{ width: '100%' }}>
            Send Reset Link
          </Button>
          {forgotMsg && <p style={{ color: 'green', marginTop: 8 }}>{forgotMsg}</p>}
        </form>
      )}
      
      <p>
        Don't have an account?{' '}
        <span className="toggle-link" onClick={() => navigate('/signup')}>Sign up</span>
      </p>
    </div>
  );
}

export default LoginPage;
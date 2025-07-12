import React, { useState } from 'react';
import LoginForm from '../Component/LoginForm';
import SignupForm from '../Component/SignupForm';
import './LoginPage.css';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => { 
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="loginpage-outer">
      <div className="loginpage-container">
        <h2 className="loginpage-title">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <div className="loginpage-form">
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>

        <p className="loginpage-toggle">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={toggleForm}
            className="loginpage-toggle-btn"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
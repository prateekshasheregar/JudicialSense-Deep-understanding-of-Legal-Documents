import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageStyles.css';

const Login = ({ handleLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming the login or sign-up is successful
    if (isSignUp) {
      console.log('Sign Up:', { email, password });
      // Implement sign-up logic here if needed
    } else {
      console.log('Login:', { email, password });
      // Call the login function passed from App.js
      handleLogin();
      // Redirect to home page after login
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
          <button type="button" className="toggle-btn" onClick={toggleSignUp}>
            {isSignUp ? 'Already have an account? Login' : 'Create an Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

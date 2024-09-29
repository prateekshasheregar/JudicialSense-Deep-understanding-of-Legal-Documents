import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PdfUploader from './pages/PdfUploader';
import Login from './pages/Login';
import './App.css';

const App = () => {
  // Global login state to track whether a user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login function to update the login state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout function to reset the login state
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Custom Private Route component to restrict access
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/upload">Upload PDF</Link></li>
          {!isLoggedIn ? (
            <li><Link to="/login">Login</Link></li>
          ) : (
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          )}
        </ul>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route to Home */}
        <Route path="/about" element={<About />} />
        {/* Private Route for Upload PDF */}
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <PdfUploader />
            </PrivateRoute>
          }
        />
        {/* Login Page */}
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </div>
  );
};

export default App;

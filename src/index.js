import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Wrap your App with BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

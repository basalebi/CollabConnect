// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; // Import the Register component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register type="register" />} /> {/* Update this line */}
        <Route path="/register" element={<Register type="register" />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
  );
};

export default App;

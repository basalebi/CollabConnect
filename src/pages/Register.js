import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = ({ type }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Perform authentication or registration logic
    // For simplicity, this example always considers the login or registration as successful
    console.log(`${type} successful!`, { username, password });
    setError('');
  };

  return (
    <div>
      <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleAuth}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default Register;

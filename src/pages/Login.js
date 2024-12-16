import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Simulated credentials (for frontend-only functionality)
  const simulatedEmail = 'user@example.com';
  const simulatedPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the credentials match the simulated ones
    if (email === simulatedEmail && password === simulatedPassword) {
      // Simulate successful login
      const token = 'sample-jwt-token'; // Simulated token
      localStorage.setItem('authToken', token);
      navigate('/');
    } else {
      // Set an error if the credentials don't match
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;

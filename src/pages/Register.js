import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Simulated credentials for registration (frontend-only)
  const simulatedEmail = 'user@example.com'; // Sample email for demo

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email already exists in "local storage"
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setError('Email already registered');
      return;
    }

    // Basic validation (you can add more checks here)
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    // Simulate successful registration by saving user info to localStorage
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    // Simulate a registration success message
    alert('Registration successful! Please log in.');

    // Navigate to the login page after successful registration
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;

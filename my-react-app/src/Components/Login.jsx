import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', user);

      const loggedUser = {
        name: res.data.user.name,
        email: res.data.user.email
      };

      login(loggedUser); 
      alert('User logged in successfully');

      setUser({ email: '', password: '' });
      navigate('/');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  const goToSignup = () => navigate('/signup');

  return (
    <div id="login">
      <form onSubmit={handleSubmit} id="form">
        <h2 style={{ fontSize: '30px', textAlign: 'center', color: 'white' }}>Login</h2>
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <button type="submit">Login</button>
        <a onClick={goToSignup} style={{ cursor: 'pointer', display: 'block', marginTop: '10px' }}>
          Don't have an account? Sign up
        </a>
      </form>
    </div>
  );
};

export default Login;

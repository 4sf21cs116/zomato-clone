import React, { useState, useContext } from 'react';
import axios from 'axios';
import './AddUser.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function AddUser() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users', user);
      login(res.data); 
      alert('User added successfully');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div id="signup">
      <form onSubmit={handleSubmit} id="form">
        <h2 style={{ fontSize: '30px', textAlign: 'center', color: 'white' }}>Signup</h2>
        <input name="name" placeholder="Name" value={user.name} onChange={handleChange} required autoComplete="off" />
        <input name="email" placeholder="Email" value={user.email} onChange={handleChange} required autoComplete="off" />
        <input name="password" type="password" placeholder="Password" value={user.password} onChange={handleChange} required autoComplete="off" />
        <button type="submit">Register</button>
        <a onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Already have an account?</a>
      </form>
    </div>
  );
}

export default AddUser;

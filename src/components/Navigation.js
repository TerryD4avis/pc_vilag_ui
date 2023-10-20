import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userIsLoggedIn = !!token;

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/register">Register</Link></li>
        {userIsLoggedIn ? (
          <li><Link to="/login" onClick={logout}>Logout</Link></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

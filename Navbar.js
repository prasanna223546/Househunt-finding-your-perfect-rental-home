import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🏠 HouseHunt</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/add-property">Add Property</Link>
        <Link to="/my-bookings">My Bookings</Link>
      </div>
    </nav>
  );
};

export default Navbar;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProperty from './pages/AddProperty';
import MyBookings from './pages/MyBookings';
import Navbar from './components/Navbar';
import './App.css';
import Dashboard from './pages/Dashboard';

// Inside <Routes>:
<Route path="/dashboard" element={<Dashboard />} />

function App() {
  return (
    <div style={{ backgroundColor: 'white', color:'black', minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
















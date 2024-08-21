import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/about">Signup</Link>
        <Link to="/contact">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<Signup />} />
        <Route path="/contact" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
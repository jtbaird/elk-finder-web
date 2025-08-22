import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Regression from './pages/Regression';

// Example page components
function Home() {
  return <h2>Home Page</h2>;
}
function Map() {
  return <h2>Map Page</h2>;
}
function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ padding: 16 }}>
        <Button component={Link} to="/" variant="contained" color="primary" sx={{ mr: 2 }}>
          Home
        </Button>
        <Button component={Link} to="/map" variant="contained" color="primary" sx={{ mr: 2 }}>
          Map
        </Button>
        <Button component={Link} to="/contact" variant="contained" color="primary">
          Contact
        </Button>
        <Button component={Link} to="/regression" variant="contained" color="primary">
          Linear Regression
        </Button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/regression" element={<Regression />} />
      </Routes>
    </Router>
  );
}

export default App;
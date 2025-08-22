import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import Regression from './pages/Regression';
import DataSources from './pages/DataSources';
import About from './pages/About';
import Prediction from './pages/Prediction';

// Example page components
function Home() {
  return <h2>Home Page</h2>;
}
function Map() {
  return <h2>Map Page</h2>;
}

// Banner component
function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 200,
        backgroundImage: 'url(/banner.jpg)', // Place your landscape photo in public/banner.jpg
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.5)',
          px: 3,
          py: 1,
          borderRadius: 2,
          position: 'absolute',
          top: 24,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        BULLSEYE FORECAST
      </Typography>
    </Box>
  );
}

// Custom Tabs component to sync with router
function NavTabs() {
  const location = useLocation();
  const tabPaths = ['/', '/prediction', '/regression', '/datasources', '/about'];
  const currentTab = tabPaths.indexOf(location.pathname);

  return (
    <Tabs
      orientation="vertical"
      value={currentTab === -1 ? 0 : currentTab}
      sx={{ borderRight: 1, borderColor: 'divider', minWidth: 180, mt: 2 }}
    >
      <Tab label="Home" component={Link} to="/" />
      <Tab label="Prediction" component={Link} to="/prediction" />
      <Tab label="Linear Regression" component={Link} to="/regression" />
      <Tab label="Data Sources" component={Link} to="/datasources" />
      <Tab label="About" component={Link} to="/about" />
    </Tabs>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Banner />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <NavTabs />
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/regression" element={<Regression />} />
              <Route path="/datasources" element={<DataSources />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
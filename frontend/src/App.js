import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import Regression from './pages/Regression';
import DataSources from './pages/DataSources';

// Example page components
function Home() {
  return <h2>Home Page</h2>;
}
function Map() {
  return <h2>Map Page</h2>;
}

// Custom Tabs component to sync with router
function NavTabs() {
  const location = useLocation();
  const tabPaths = ['/', '/map', '/datasources', '/regression'];
  const currentTab = tabPaths.indexOf(location.pathname);

  return (
    <Tabs
      orientation="vertical"
      value={currentTab === -1 ? 0 : currentTab}
      sx={{ borderRight: 1, borderColor: 'divider', minWidth: 180 }}
    >
      <Tab label="Home" component={Link} to="/" />
      <Tab label="Map" component={Link} to="/map" />
      <Tab label="Data Sources" component={Link} to="/datasources" />
      <Tab label="Linear Regression" component={Link} to="/regression" />
    </Tabs>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <NavTabs />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/datasources" element={<DataSources />} />
            <Route path="/regression" element={<Regression />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
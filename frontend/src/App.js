import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box, Typography, Collapse } from '@mui/material';
import React from 'react';
import Home from './pages/Home';
import LinearRegressions from './pages/LinearRegressions';
import DataSources from './pages/DataSources';
import About from './pages/About';
import Prediction from './pages/Prediction';

// Banner component
function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 120, sm: 200 }, // Fixed height for mobile and desktop
        minHeight: { xs: 120, sm: 200 }, // Prevent shrinking
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          backgroundColor: 'rgba(164, 167, 149, 0.5)',
          px: 3,
          py: 1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Times New Roman, Times, serif',
          fontSize: { xs: '1.5rem', sm: '2.5rem' },
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
  const [methodologyOpen, setMethodologyOpen] = React.useState(false);

  // Tab values
  const TAB_HOME = 0;
  const TAB_PREDICTION = 1;
  const TAB_METHODOLOGY = 2;
  const TAB_METHODOLOGY_REGRESSION = 3;
  const TAB_DATASOURCES = 4;
  const TAB_ABOUT = 5;

  // Determine selected tab value
  let tabValue = TAB_HOME;
  if (location.pathname === '/home' || location.pathname === '/') tabValue = TAB_HOME;
  else if (location.pathname === '/prediction') tabValue = TAB_PREDICTION;
  else if (location.pathname === '/methodology/regression') tabValue = TAB_METHODOLOGY_REGRESSION;
  else if (location.pathname.startsWith('/methodology')) tabValue = TAB_METHODOLOGY;
  else if (location.pathname === '/datasources') tabValue = TAB_DATASOURCES;
  else if (location.pathname === '/about') tabValue = TAB_ABOUT;

  // Handler to collapse Methodology when other tabs are clicked
  const handleCollapse = () => setMethodologyOpen(false);

  return (
    <Box>
      <Tabs
        orientation="vertical"
        value={tabValue}
        textColor="inherit"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          minWidth: 180,
          mt: 0,
          '& .MuiTab-root': {
            color: 'black',
            fontFamily: 'Times New Roman, Times, serif',
            fontSize: '1.1rem'
          },
          '& .Mui-selected': {
            color: 'rgb(74, 76, 41)',
            fontWeight: 'bold',
            fontFamily: 'Times New Roman, Times, serif'
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'rgb(74, 76, 41)',
          },
        }}
      >
        <Tab label="Home" value={TAB_HOME} component={Link} to="/home" onClick={handleCollapse} />
        <Tab label="Prediction" value={TAB_PREDICTION} component={Link} to="/prediction" onClick={handleCollapse} />
        <Tab
          label="Methodology"
          value={TAB_METHODOLOGY}
          onClick={() => setMethodologyOpen((open) => !open)}
          sx={{ justifyContent: 'space-between', display: 'flex' }}
        />
        <Tab
          label={
            <span style={{ fontSize: '.95rem', fontFamily: 'Times New Roman, Times, serif' }}>
              Linear Regression
            </span>
          }
          value={TAB_METHODOLOGY_REGRESSION}
          component={Link}
          to="/methodology/regression"
          sx={{
            display: methodologyOpen || location.pathname.startsWith('/methodology') ? 'block' : 'none',
            color: tabValue === TAB_METHODOLOGY_REGRESSION ? 'rgb(74, 76, 41)' : 'black',
            textAlign: 'center',
            minWidth: '100%',
            fontWeight: tabValue === TAB_METHODOLOGY_REGRESSION ? 'bold' : 'normal',
            pl: 3,
          }}
          onClick={handleCollapse}
        />
        <Tab label="Data Sources" value={TAB_DATASOURCES} component={Link} to="/datasources" onClick={handleCollapse} />
        <Tab label="About" value={TAB_ABOUT} component={Link} to="/about" onClick={handleCollapse} />
      </Tabs>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Banner />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Box sx={{ backgroundColor: 'rgb(164, 167, 149)', minWidth: 180, width: 180, pt: 2 }}>
            <NavTabs />
          </Box>
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/methodology/regression" element={<LinearRegressions />} />
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
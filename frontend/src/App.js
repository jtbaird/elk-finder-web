import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import Home from './pages/Home';
import Regression from './pages/Regression';
import DataSources from './pages/DataSources';
import About from './pages/About';
import Prediction from './pages/Prediction';

// Banner component
function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 200,
        backgroundImage: 'url(/banner.jpg)',
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
          backgroundColor: 'rgba(164, 167, 149, 0.5)',
          px: 3,
          py: 1,
          borderRadius: 0,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Center both vertically and horizontally
          fontFamily: 'Times New Roman, Times, serif'
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
  const tabPaths = ['/home', '/prediction', '/regression', '/datasources', '/about'];
  const currentTab = tabPaths.indexOf(location.pathname);

  return (
    <Tabs
      orientation="vertical"
      value={currentTab === -1 ? 0 : currentTab}
      textColor="inherit"
      sx={{
        borderRight: 1,
        borderColor: 'divider',
        minWidth: 180,
        mt: 2,
        '& .MuiTab-root': {
          color: 'black', // default tab text color
          fontFamily: 'Times New Roman, Times, serif',
          fontSize: '1.1rem'
        },
        '& .Mui-selected': {
          color: 'rgb(74, 76, 41)', // dark green for selected tab text
          fontWeight: 'bold',
          fontFamily: 'Times New Roman, Times, serif'
        },
        '& .MuiTabs-indicator': {
          backgroundColor: 'rgb(74, 76, 41)', // dark green indicator
        },
      }}
    >
      <Tab label="Home" component={Link} to="/home" />
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
          <Box sx={{ backgroundColor: 'rgb(164, 167, 149)', minWidth: 180, width: 180, pt: 2 }}>
            <NavTabs />
          </Box>
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
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
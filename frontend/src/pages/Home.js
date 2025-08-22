import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to Bullseye Forecast!
      </Typography>
      <Typography variant="body1" paragraph>
        This website provides data-driven predictions and insights for Utah elk hunts. Explore interactive maps, view model results, and learn about the data sources powering our forecasts.
      </Typography>
      <Typography variant="h5" gutterBottom>
        How to Navigate
      </Typography>
      <Typography variant="body1" paragraph>
        Use the tabs on the left to access different sections:
        <ul>
          <li><strong>Home:</strong> Return to this page at any time.</li>
          <li><strong>Prediction:</strong> View elk hunt success predictions.</li>
          <li><strong>Linear Regression:</strong> Explore our regression model results.</li>
          <li><strong>Data Sources:</strong> Learn about the data behind our forecasts.</li>
          <li><strong>About:</strong> Find out more about this project and its creator.</li>
        </ul>
      </Typography>
      <Typography variant="body1">
        If you have questions or feedback, visit the About page for contact information.
      </Typography>
    </Box>
  );
}

export default Home;
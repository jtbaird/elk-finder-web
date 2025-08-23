import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ color: 'rgb(74, 76, 41)' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Bullseye Forecast!
      </Typography>
      <Typography variant="body1" paragraph>
        The purpose of this project is to combine open source DWR harvest reporting data with historical weather data to predict future elk hunting success rates in Utah. 
        If we can better predict animal populations, then we can more accurately allocate hunters, and thereby better fulfill our responsibility 
        to manage wild animals. Effective animal stewardship is the ethical and practical responsibility of all people living among animal populations. 
        In practical terms, managing animal populations has many benefits:
        <ul>
          <li>Ensuring plant bio-diversity
            <ul>
              <li>Large herds devour green sapling populations, preventing forest growth.</li>
            </ul>
          </li>
          <li>Ensuring successful breeding among the managed population
            <ul>
              <li>Old bulls are often strong enough to earn mating rates, but sterile from age. Culling these animals is vital to successful reproduction.</li>
            </ul>
          </li>
          <li>Protecting public health
            <ul>
              <li>Wild animals sustain tick and flea populations which are reservoirs for lymes disease, prion diseases, and even pneumonic plague. Reducing their populations has knock-on effects to these disease reservoirs.</li>
            </ul>
          </li>
        </ul>
        This list is not exhaustive, and does not begin to touch the vast economic and cultural benefits of hunting. Head over to our <Link to="/methodology/regression">linear regression page</Link> to see some preliminary forecasting!
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
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ color: 'rgb(74, 76, 41)' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Bullseye Forecast!
      </Typography>
      <Typography variant="body1" paragraph>
        The purpose of this project is to combine open source DWR harvest reporting data with historical weather data to forecast future elk hunting success rates in Utah. 
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
        Current status
      </Typography>
      <Typography variant="body1" paragraph>
        <ul>
          <li><strong>Weather data collection:</strong></li>
          <ul>
            <li>My <a href="https://www.ncei.noaa.gov/" target="_blank" rel="noopener noreferrer">best weather source</a> is down for maintenance for "weeks," so will see what I can drum up in the meantime.
            </li>
            <li>This is probably the most arduous and largest effort of the whole project. This really is the core of the project though,
               so once it's completed I think we'll start to see something interesting.
            </li>
          </ul>
          <li><strong>Feature exploration:</strong></li>
          <ul>
            <li>I'm expecting to need a break from the weather data, and will probably use feature exploration to keep things interesting. Assuming that's successful, expect more linear regressions.</li>
          </ul>
        </ul>
      </Typography>
      <Typography variant="body1">
        If you have questions or feedback, visit the About page for contact information.
      </Typography>
    </Box>
  );
}

export default Home;
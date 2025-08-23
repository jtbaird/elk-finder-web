import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

function LinearRegressions() {
  const [enlarged, setEnlarged] = useState(false);

  const handleDoubleClick = () => {
    setEnlarged((prev) => !prev);
  };

  return (
    <Box sx={{ color: 'rgb(74, 76, 41)' }}>
      <Typography variant="h4" gutterBottom>
        Linear Regressions
      </Typography>
      <Typography variant="h5" gutterBottom>
        Getting Started
      </Typography>
      <Typography variant="body1" paragraph>
        Prediction models are getting rolled out at the speed I clean and normalize the data. To give my reader(s?) a little taste of what's to come, I've made some
        preliminary charts. I figured we'd start with something extremely simple, a line graph of success rates over time.
        After all, what if every hunt is trending towards 100% success, in which case this whole project is pointless? Sounds like something that may be worth checking early,
        so here we go:
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <img
          src="/images/linear_regression_graphs/hunt_success_over_years.png"
          alt="Description"
          style={{
            maxWidth: enlarged ? '90vw' : '100%',
            maxHeight: enlarged ? '90vh' : '500px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'block'
          }}
          onDoubleClick={handleDoubleClick}
        />
      </Box>
      <Typography variant="body1" paragraph>
        I don't think Rainman could make any sense of that graph, and that's with only a fraction of the Utah hunts plugged in. At least now I can say some deeper analysis is 
        warranted here. So let's move onto some linear regressions.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Finally, machine learning
      </Typography>
      <Typography variant="body1" paragraph>
        From here on, the graphs will all be proper linear regressions. For the uninitiated, essentially a linear regression aims to model the relationship between a dependent 
        variable and one or more independent variables. It does this by plotting data points where X is the independent variable and Y is the dependent 
        variable, then drawing a line of best fit through those points. The goal is to find the line that minimizes the distance between itself and all the data points. 
        The better the line fits, the higher the r value is, the more confidently we can say that changes in X cause changes in Y. With that out of the way, let's see some results.
      </Typography>
      <Typography variant="h6" gutterBottom>
        "We'll get 'em next year!"
      </Typography>
      <Typography variant="body1" paragraph>
        What if the success rate of the previous year was a strong predictor of the next year's success rate? After all, if there's an 100% success rate in Panguitch in 2018, shouldn't
        there be fewer bulls in Panguitch in 2019? Let's see:
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <img
          src="/images/linear_regression_graphs/success_rate_real.png"
          alt="Description"
          style={{
            maxWidth: enlarged ? '90vw' : '100%',
            maxHeight: enlarged ? '90vh' : '500px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'block'
          }}
          onDoubleClick={handleDoubleClick}
        />
      </Box>
      <Typography variant="body1" paragraph>
        Looks like we have a decent correlation (r = 0.52 is moderate) between success rate in year n - 1 and year n. While I predicted a negative correlation (meaning success rate in year n-1
        would indicate lower success in year n), the data suggests otherwise. I'm no biologist, but this is probably just indicative of healthy populations producing more elk year over year. If 
        a heard is healthy and growing, people are more likely to encounter it, success rates will be higher, and the trend will continue. That's my guess anyway. If nothing else, we've provided
        some steam to the age old coping mechanism "we'll get 'em next year!"
      </Typography>
      <Typography variant="h6" gutterBottom>
        The bulls that weren't
      </Typography>
      <Typography variant="body1" paragraph>
        At this point in my work I had finished cleaning and normalizing the cow elk data, when I had the idea for this next regression. What if the success rate of a previous cow elk harvest had a
        negative impact on the success rate of a bull elk hunt some time in the future? An elk's gestation period is 8 months, and then a male calf will take about a year before it can grow antlers and be hunted.
        So theoretically, if a cow is harvested in 2020, then that's a bull elk that was never born, and one less bull for the 2022 hunt. Let's see if we can find any correlation there:
      </Typography>
      <Box display="flex" justifyContent="center" my={2}>
        <img
          src="/images/linear_regression_graphs/bull_vs_cow_2_year_real_success.png"
          alt="Description"
          style={{
            maxWidth: enlarged ? '90vw' : '100%',
            maxHeight: enlarged ? '90vh' : '500px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'block'
          }}
          onDoubleClick={handleDoubleClick}
        />
      </Box>
      <Typography variant="body1" paragraph>
        A positive correlation of r = 0.23 is pretty weak. While the pregnancy rates in elk populations are often near 90%, there's no guarantee that a cow elk in year n - 2 was pregnant at the time of harvest. Furthermore
        if she was, there's no guarantee that she was pregnant with a male. In hindsight, this probably explains the weak correlation.
      </Typography>
      <Typography variant="h5" gutterBottom>
        What's next?
      </Typography>
      <Typography variant="h6" gutterBottom>
        Weather data
      </Typography>
      <Typography variant="body1" paragraph>
        Weather data serves as a proxy for forage availability, which in turn impacts elk health and population dynamics. It is also super annoying to get into a format I can work with, and so is still in progress. Once that's 
        all been compiled though, we should start to see some really interesting stuff.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Feature exploration
      </Typography>
      <Typography variant="body1" paragraph>
        These little experiments I've laid out were mostly just a break from the monotony of data cleaning and normalization. As the regressions I've shared demonstrate, theorizing strength is weak to moderate. Using proper feature 
        engineering techniques will help identify new variables to compare against success rates, and will hopefully yield some stronger correlations.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Newer, hotter models
      </Typography>
      <Typography variant="body1" paragraph>
        Linear regressions are a good starting point, but they are probably the bottom rung of the machine learning ladder. Once all the data is together, and we've squeezed all the juice we can out of linear regression, I'll be moving on 
        to more advanced methods such as random forests, LSTM, etc. I expect these models will provide the confidence to ultimately publish my 2025 predictions.
      </Typography>

    </Box>
  );
}

export default LinearRegressions;
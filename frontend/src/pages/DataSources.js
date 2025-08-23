import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function DataSources() {
  const [feature, setFeature] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the feature suggestion to your backend or email
    setFeature('');
  };

  return (
    <Box sx={{ color: 'rgb(74, 76, 41)' }}>
      <Typography variant="h4" gutterBottom>
        Data Sources
      </Typography>
      <Typography variant="body1" paragraph>
        This project uses the following data sources:
        <ul>
          <li>
            <a href="https://wildlife.utah.gov/hunting/main-hunting-page/big-game/big-game-harvest-data.html" target="_blank" rel="noopener noreferrer">
              Utah DWR Big Game Harvest Reports
            </a>
          </li>
          <li>
            <a href="https://www.ncei.noaa.gov/access/past-weather/utah" target="_blank" rel="noopener noreferrer">
              NOAA Weather Data
            </a>
          </li>
          <li>
            <a href="https://nwcc-apps.sc.egov.usda.gov/imap/#version=170&elements=&networks=!&states=!&counties=!&hucs=&minElevation=&maxElevation=&elementSelectType=any&activeOnly=true&activeForecastPointsOnly=true&hucLabels=false&hucIdLabels=false&hucParameterLabels=true&stationLabels=&overlays=&hucOverlays=&basinOpacity=75&basinNoDataOpacity=25&basemapOpacity=100&maskOpacity=0&mode=data&openSections=dataElement,parameter,date,basin,options,elements,location,networks&controlsOpen=true&popup=&popupMulti=&popupBasin=&base=esriNgwm&displayType=station&basinType=6&dataElement=PREC&depth=-8&parameter=PCTMED&frequency=DAILY&duration=wytd&customDuration=&dayPart=E&monthPart=E&forecastPubDay=1&forecastExceedance=50&useMixedPast=true&seqColor=1&divColor=7&scaleType=D&scaleMin=&scaleMax=&referencePeriodType=POR&referenceBegin=1991&referenceEnd=2020&minimumYears=20&hucAssociations=true&relativeDate=-1&lat=39.420&lon=-111.830&zoom=7.0" target="_blank" rel="noopener noreferrer">
              NWCC Weather Data
            </a>
          </li>
        </ul>
      </Typography>
      <Typography variant="h5" gutterBottom>
        ETL Techniques
      </Typography>
      <Typography variant="body1" paragraph>
        Data was extracted from public reports and web sources using Python scripts and web scraping tools. Transformation included cleaning, normalization, and feature engineering (such as calculating hunt success rates and weather impact). The processed data was loaded into analysis-ready CSV files for modeling and visualization.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Recommend Feature Exploration
      </Typography>
      <Typography variant="body1" paragraph>
        Have an idea for a feature to explore? Submit your recommendation below!
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
        <TextField
          label="Feature Suggestion"
          variant="outlined"
          fullWidth
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        {submitted && (
          <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
            Thank you for your suggestion!
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default DataSources;
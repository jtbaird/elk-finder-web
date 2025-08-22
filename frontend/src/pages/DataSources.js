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
    <Box sx={{ fontFamily: 'Times New Roman, Times, serif', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Data Sources
      </Typography>
      <Typography variant="body1" paragraph>
        This project uses the following data sources:
        <ul>
          <li>
            <a href="https://wildlife.utah.gov/hunting/biggame/harvest-reports.html" target="_blank" rel="noopener noreferrer">
              Utah DWR Big Game Harvest Reports
            </a>
          </li>
          <li>
            <a href="https://www.weather.gov/" target="_blank" rel="noopener noreferrer">
              National Weather Service
            </a>
          </li>
          <li>
            <a href="https://www.usgs.gov/" target="_blank" rel="noopener noreferrer">
              USGS Geographic Data
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
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box sx={{ fontFamily: 'Times New Roman, Times, serif', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        About the Author
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box
          component="img"
          src="/images/me.jpg"
          alt="John Baird"
          sx={{
            width: 300,
            height: 500,
            objectFit: 'cover',
            mr: 3,
            borderRadius: 2,
            boxShadow: 2,
            border: '2px solid #fff',
          }}
        />
        <Typography variant="body1">
          Hello, my name is John Baird! I'm an avid outdoorsman, have a degree in computer science, and am the man behind
          Bullseye Forecast. The world is big and our time is short, so when I came across the Utah DWR harvest reports,
          I immediately wondered if it could be leveraged to help myself and others better allocate our time in the backcountry.
          Outside of my hobbies and this personal project, I work as a SRE and data engineer in the tech industry. If you're
          interested in collaborating, have questions, or just want to chat, here's where you can reach me:
          <ul>
            <li>Email: jtbaird95@gmail.com</li>
            <li>GitHub:</li>
            <ul>
                <li><a href="https://github.com/jtbaird/elk-finder-web" target="_blank" rel="noopener noreferrer">elk-finder-web</a></li>
                <li><a href="https://github.com/jtbaird/elk-finder" target="_blank" rel="noopener noreferrer">elk-finder</a></li>
            </ul>
            <li>LinkedIn: <a href="www.linkedin.com/in/john-baird-0b793aa5" target="_blank" rel="noopener noreferrer">linkedin.com/in/john-baird-0b793aa5</a></li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
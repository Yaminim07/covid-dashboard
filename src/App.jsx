import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CountryGrid from './components/CountryGrid';

import GlobalData from './components/GlobalData';
import Navbar from './components/Navbar';
import ChartByCountry from './components/ChartByCountry';

const useStyles = makeStyles(() => ({
  bodyContainer: {
    height: '600px',
  },
}
));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
      <GlobalData />
      <Grid container>
        <Grid xs={5} className={classes.bodyContainer}>
          <ChartByCountry />
        </Grid>
        <Grid xs={7} className={classes.bodyContainer}>
          <CountryGrid />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

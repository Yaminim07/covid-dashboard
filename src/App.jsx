import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CountryGrid from './components/CountryGrid';

import GlobalData from './components/GlobalData';
import Navbar from './components/Navbar';
import ChartByCountry from './components/ChartByCountry';
import ErrorPage from './components/ErrorPage';
import { CountryState } from './Context/CountryContext';

const useStyles = makeStyles(() => ({
  bodyContainer: {
    height: '600px',
  },
}
));

function App() {
  const { err, message } = CountryState();

  const classes = useStyles();
  if (err) {
    return (
      <ErrorPage err={message} />
    )
  }
  return (
    <div className="App">
      <Navbar />
      <GlobalData />
      <Grid container className={classes.mainContainer}>
        <Grid xs={12} lg={5} md={12} className={classes.bodyContainer}>
          <ChartByCountry />
        </Grid>
        <Grid xs={12} lg={7} md={12} className={classes.bodyContainer}>
          <CountryGrid />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

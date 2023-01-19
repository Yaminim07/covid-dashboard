import { AppBar, Typography } from '@mui/material'
import React from 'react';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from '../Ui/Navbar';

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      className={classes.app_bar}
    >
      <div className={classes.logo}>
        <CoronavirusIcon />
        <Typography variant="h6" color="inherit" component="div">
          Covid-Dashboard
        </Typography>
      </div>
      <div className={classes.search_container}>
        <SearchIcon />
        <input placeholder="Search By Country..." />
      </div>

    </AppBar>
  )
}

export default Navbar

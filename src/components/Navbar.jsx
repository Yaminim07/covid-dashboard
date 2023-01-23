/* eslint-disable no-unused-vars */
import { AppBar, Typography } from '@mui/material'
import React, { useState } from 'react';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import SearchIcon from '@mui/icons-material/Search';

import useStyles from '../Ui/Navbar';
import { CountryState } from '../Context/CountryContext';

function Navbar() {
  const [_, handleCountry] = CountryState();
  const [searchInput, setSearchInput] = useState('')

  const classes = useStyles();

  const handleSearch = () => {
    if (searchInput !== '') {
      handleCountry(searchInput);
      setSearchInput('');
    }
  };

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
        <input placeholder="Search By Country..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button type="button" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>

    </AppBar>
  )
}

export default Navbar

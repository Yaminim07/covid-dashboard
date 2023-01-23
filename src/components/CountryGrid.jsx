import React, { useState } from 'react';
import {
  TextField, Box, AppBar, Toolbar, Typography, InputAdornment, Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { useQuery } from 'react-query';
import fetchData from '../helper/queryHelper';
import { COUNTRY_DATA_QUERY } from '../helper/queries';
import useStyles from '../Ui/CountryGrid';

const flagImage = (params) => (<Avatar src={params.value} variant="rounded" className="flag" />);

function CountryGrid() {
  const classes = useStyles();

  const [gridApi, setGridApi] = useState(null);
  const columnDefs = [
    {
      field: 'country',
    },
    {
      field: 'flag',
      cellRenderer: flagImage,
    },
    { field: 'continent' },
    { field: 'population' },
    { field: 'tests' },
    { field: 'cases' },
    { field: 'deaths' },
    { field: 'recovered' },
    { field: 'active' },
    { field: 'critical' },
  ];
  const defaultColDef = {
    resizable: 'true',
  }
  const {
    data, isSuccess,
  } = useQuery(
    'allCountry-data',
    fetchData(COUNTRY_DATA_QUERY),
  );
  const onFilterTextChange = (event) => {
    gridApi.setQuickFilter(event.target.value);
  };
  const onGridReady = (params) => {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
  };
  if (isSuccess) {
    const rows = data.countries.map((element) => ({
      flag: element?.countryInfo?.flag,
      country: element?.country,
      continent: element?.continent,
      tests: element?.result?.tests,
      active: element?.result?.active,
      recovered: element?.result?.recovered,
      critical: element?.result?.critical,
      cases: element?.result?.cases,
      deaths: element?.result?.deaths,
      population: element?.result?.population,
    }));
    return (
      <div
        className="ag-theme-alpine"
      >
        <Box className={classes.gridHeader}>
          <AppBar position="relative" color="primary">
            <Toolbar className="appBarToolBar">
              <Typography variant="h6">
                All country data sort by cases
              </Typography>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                className="textField"
                size="small"
                placeholder="Search"
                onChange={onFilterTextChange}
              />
            </Toolbar>
          </AppBar>
        </Box>
        <Box className={classes.gridBody}>
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rows}
            onGridReady={onGridReady}
          />
        </Box>
      </div>
    );
  } return (
    <div className={classes.wrapper}>Loading...</div>
  )
}

export default CountryGrid;

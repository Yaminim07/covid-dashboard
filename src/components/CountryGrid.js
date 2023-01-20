/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import {
  TextField, Box, AppBar, Toolbar, Typography, InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import { makeStyles } from '@mui/styles';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import { useQuery } from 'react-query';
import { fetchData } from '../helper/queryHelper';

import { COUNTRY_DATA_QUERY } from '../helper/queries';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });
function CountryGrid() {
  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([{}]);
  const [columnDefs] = useState([
    { field: 'country', resizable: 'true', cellRenderer: (flag) => `<img style="height: 14px; width: 14px" src=${flag} />` },
    { field: 'continent' },
    { field: 'population' },
    { field: 'tests' },
    { field: 'cases' },
    { field: 'deaths' },
    { field: 'recovered' },
    { field: 'active' },
    { field: 'critical' },
  ]);
  const { data, isSuccess } = useQuery(
    'allCountry-data',
    fetchData(COUNTRY_DATA_QUERY),
  );
  const updateData = () => {
    if (isSuccess) {
      console.log(typeof (data.countries[0].countryInfo.flag));
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
      setRowData(rows);
    }
  };
  useEffect(updateData, [data, isSuccess]);
  const onFilterTextChange = (event) => {
    gridApi.setQuickFilter(event.target.value);
  };
  const onGridReady = (params) => {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
    // setGridColumnApi(params.columnApi)
  };

  // access API from callback params object
  const sendToClipboard = (e) => {
    e.api.sizeColumnsToFit();
    e.columnApi.resetColumnState();
  };
  return (
    <div
      className="ag-theme-material"
      style={{
        height: '400px',
        width: '80%',
        margin: 'auto',
      }}
    >
      <Box>
        <AppBar position="relative" color="primary">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">
              Covid Data Of All Countries
            </Typography>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              style={{ backgroundColor: 'white', borderRadius: '4px' }}
              size="small"
              placeholder="Search"
              onChange={onFilterTextChange}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
        sendToClipboard={sendToClipboard}
      />
    </div>
  );
}

export default CountryGrid;

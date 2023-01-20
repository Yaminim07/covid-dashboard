/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { useQuery } from 'react-query';
import { fetchData } from '../helper/queryHelper';

import { COUNTRY_DATA_QUERY } from '../helper/queries';

function CountryGrid() {
  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([{}]);
  const [columnDefs] = useState([
    { field: 'country', pinned: 'left' },
    { field: 'continent', pinned: 'left' },
    { field: 'population', pinned: 'left' },
    { field: 'tests', pinned: 'left' },
    { field: 'cases', pinned: 'left' },
    { field: 'deaths', pinned: 'left' },
    { field: 'recovered', pinned: 'left' },
    { field: 'active', pinned: 'left' },
    { field: 'critical', pinned: 'left' },
  ]);
  const { data, isSuccess } = useQuery('allCountry-data', fetchData(COUNTRY_DATA_QUERY));
  const updateData = () => {
    if (isSuccess) {
      const rows = data.countries.map((element) => ({
        country: element.country, continent: element.continent, tests: element.result.tests, active: element.result.active, recovered: element.result.recovered, critical: element.result.critical, cases: element.result.cases, deaths: element.result.deaths, population: element.result.population,
      }))
      setRowData(rows);
    }
  }
  useEffect((updateData), [data, isSuccess])
  const onFilterTextChange = (event) => {
    gridApi.setQuickFilter(event.target.value)
  }
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi)
  }

  // access API from callback params object
  const sendToClipboard = (e) => {
    e.api.sizeColumnsToFit();
    e.columnApi.resetColumnState();
  }
  return (
    <div className="ag-theme-alpine" style={{ height: '100vh', width: '100%' }}>
      <TextField
        placeholder="Enter Country Name"
        onChange={onFilterTextChange}
      />
      <AgGridReact columnDefs={columnDefs} rowData={rowData} onGridReady={onGridReady} sendToClipboard={sendToClipboard} />
    </div>
  );
}

export default CountryGrid;

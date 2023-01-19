/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function CountryGrid() {
  const [rowData] = useState([
    { Country: 'India', Continent: 'Asia', Covid_CAses: 35000 },
  ]);

  const [columnDefs] = useState([
    { field: 'Country' },
    { field: 'Continent' },
    { field: 'Covid_CAses' },

  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}

export default CountryGrid;

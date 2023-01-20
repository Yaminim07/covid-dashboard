import React from 'react';
import CountryGrid from './components/CountryGrid';

import GlobalData from './components/GlobalData';
import Navbar from './components/Navbar';
import ChartByCountry from './components/ChartByCountry';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalData />
      <ChartByCountry />
      <CountryGrid />
    </div>
  );
}

export default App;

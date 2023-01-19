import React from 'react';

import GlobalData from './components/GlobalData';
import Navbar from './components/Navbar';
import ChartByCountry from './components/ChartByCountry';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalData />
      <ChartByCountry />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import GlobalData from './components/GlobalData';
import CountryGrid from './components/CountryGrid';

function App() {
  return (
    <div className="App">
      <GlobalData />
      <CountryGrid />
    </div>
  );
}

export default App;

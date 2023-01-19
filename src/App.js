import './App.css';
import React from 'react';

import GlobalData from './components/GlobalData';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalData />
    </div>
  );
}

export default App;

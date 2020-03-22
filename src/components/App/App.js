import React from 'react';
import './App.css';
import Carusel from '../Carusel/Carusel'

function App() {
  return (
    <div id="forsage-main-grid">
      <div id="carusel">
        <Carusel/>
      </div>
      <div id="recognized-frame">
        Recognized frame
      </div>
      <div id="overview-frame">
        Overview frame
      </div>
      <div id="forsage-additional-grid">
        Additional grid
      </div>
    </div>
  );
}

export default App;

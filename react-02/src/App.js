import React, { useState } from 'react';
//import logo from './logo.svg';
import earth from './earth.svg';
import smile from './smile.svg';
import sport from './sport.svg';
import science from './science.svg';
import dna from './dna.svg';
import microbe from './microbe.svg';
import brain from './brain-and-head.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row ">
          <div id="Science" className="span_4 column">
            <img src={science} className="App-logo-reverse" alt="logo" />
          </div>
          <div id="Smile" className="span_4 column">
            <img src={smile} className="App-logo" alt="logo" />
          </div>
          <div id="Sport" className="span_4 column">
            <img src={sport} className="App-logo" alt="logo" />
          </div>
          <div id="DNA" className="span_4 column">
            <img src={dna} className="App-logo" alt="logo" />
          </div>
          <div id="Earth" className="span_4 column">
            <img src={earth} className="App-logo" alt="logo" />
          </div>
          <div id="Microbe" className="span_4 column">
            <img src={microbe} className="App-logo" alt="logo" />
          </div>
          <div id="Brain" className="span_4 column">
            <img src={brain} className="App-logo" alt="logo" />
          </div>
        </div>


      </header>
    </div>
  );
}

export default App;

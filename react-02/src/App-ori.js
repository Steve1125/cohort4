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
import c140b from './components/c140b';
import Starter from './components/Starter';
import TicTacToe from './components/TicTacToe';

function App() {

  const [messageArea, setMessage] = useState("Edit src/App.js and save to reload.");
  const [appToRun, setAppToRun] = useState("Starter");
  //const [count, setCount] = useState(10);

  function myClick(e) {
    let appName = "";
    const appKey = Number(e.target.getAttribute('ikey'));
    console.log(appKey);

    //setCount(count + 1);
    appName = c140b.appList[appKey];

    setMessage(`Call Application #${appKey} Name is ${appName}`);
    setAppToRun(appName);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="row clearfix">
          <div onClick={myClick} id="Science" className="span_4 column" ikey="1">
            <img src={science} className="App-logo-reverse" alt="logo" />
          </div>
          <div onClick={myClick} id="Smile" className="span_4 column" ikey="2">
            <img src={smile} className="App-logo" alt="logo" />
          </div>
          <div onClick={myClick} id="Sport" className="span_4 column" ikey="3">
            <img src={sport} className="App-logo" alt="logo" />
          </div>
          <div onClick={myClick} id="DNA" className="span_4 column" ikey="4">
            <img src={dna} className="App-logo" alt="logo" />
          </div>
          <div onClick={myClick} id="Earth" className="span_4 column" ikey="5">
            <img src={earth} className="App-logo" alt="logo" />
          </div>
          <div onClick={myClick} id="Microbe" className="span_4 column" ikey="6">
            <img src={microbe} className="App-logo" alt="logo" />
          </div>
          <div onClick={myClick} id="Brain" className="span_4 column" ikey="7">
            <img src={brain} className="App-logo" alt="logo" />
          </div>
        </div>
      </header>
      <div className="AppArea">
        {appToRun !== "TicTacToe" &&
          <div>
            <Starter sMessageArea={messageArea} />
          </div>
        }
        {appToRun === "TicTacToe" &&
          <div>
            <TicTacToe sMessageArea={messageArea} />
          </div>
        }
      </div>
    </div>
  );
}

export default App;

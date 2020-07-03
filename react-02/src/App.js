import React, { useState } from 'react';
import earth from './earth.svg';
import smile from './smile.svg';
import sport from './sport.svg';
// import { ReactComponent as Logo } from './science.svg';
import science from './science.svg';
import dna from './dna.svg';
import microbe from './microbe.svg';
import brain from './brain-and-head.svg';
import './App.css';
import Starter from './components/Starter';
import TicTacToe from './components/TicTacToe';

function App() {
  
  const [messageArea, setMessage] = useState("Edit src/App.js and save to reload.");
  const [appKey, setAppKey] = useState("starter");
  
  function myClick(e) {
    
    let appKey = e.target.getAttribute('ikey');
    console.log(appKey);

    setMessage(`Call Application ${appKey}`);
    setAppKey(appKey);
  }

  console.log("*********Start to render************");

  let output = [];

  if(appKey === "starter") {
    output.push(<Starter sMessageArea={messageArea} key={appKey} />);
  } else if(appKey === "tictactoe") {
    output.push(<TicTacToe sMessageArea={messageArea} key={appKey} />);
  } else {

  }  

  return (
    <div className="App">
      <header className="App-header">
        <div className="row clearfix">
          <div onClick={myClick} id="Science" className="span_4 column" ikey="starter">
            {/* <Logo className="App-logo-reverse" /> */}
            <img src={science} className="App-logo-reverse" alt="logo" />
          </div>
          <div onClick={myClick} id="Smile" className="span_4 column" ikey="tictactoe">
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
          <div>
            {output}
          </div>        
      </div>
    </div>
  );
}

export default App;

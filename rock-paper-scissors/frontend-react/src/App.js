import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sign from './components/Sign';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the rock paper scissors game! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="Sign">
        <Sign name='Rock' />  
      </div>

      <div className="Sign">
        <Sign name='Paper' />  
      </div>

      <div className="Sign">
        <Sign name='Scissors' />  
      </div>
    </div>
  );
}

export default App;

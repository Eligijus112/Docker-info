// Importing the components for the App
import React from 'react';
import './App.css';
import Sign from './components/Sign';

// Importing logos for signs 
import rock from './rock.svg'
import paper from './paper.svg'
import scissors from './scissors.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the rock paper scissors game! 
        </p>
      </header>
      
      <div className="subHeader">
        <p> Select a sign and go head to head against the AI! </p>
      </div>

      <div className="Signs">
        <div className="Sign">
          <Sign name='Rock' logo={rock} />  
        </div>

        <div className="Sign">
          <Sign name='Paper' logo={paper}/>  
        </div>

        <div className="Sign">
          <Sign name='Scissors' logo={scissors}/>  
        </div>
      </div>

    </div>
  );
}

export default App;

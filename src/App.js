import React, { Component } from 'react';
import './App.css';
import CircleSelector from './Components/CircleSelector/CircleSelector'
import Circles from './Components/Circles/Circles'



class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector />
          <Circles />

        </main>
      </div>
    );
  }
}

export default App;
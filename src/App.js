import React, { Component } from 'react';
import './App.css';
import Clock from 'react-live-clock';

var isVisible = 'true';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Clock style={{fontSize: '10.5em'}}  format={'h:mm:ss A'} ticking={true} timezone={'US/Pacific'} />
      </div>
    );
  }
}

export default App;

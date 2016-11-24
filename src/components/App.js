import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader.js';
import AppBody from './AppBody/AppBody.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppBody/>
      </div>
    );
  }
}

export default App;

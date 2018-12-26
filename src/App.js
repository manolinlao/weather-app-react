import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather App (aplicación del clima)
        <LocationList></LocationList>
      </div>
    );
  }
}

export default App;

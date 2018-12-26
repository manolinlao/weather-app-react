import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Buenos Aires,ar",
  "Washington,us",
  "Barcelona,es",
  "Hamburg,de",
  "Bogotá,col",
  "Ciudad de México,mx"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather App (aplicación del clima)
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;

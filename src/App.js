import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
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

  handleSelectedLocation = city => {
    console.log("App.js::handleSelectionLocation::city = " + city);
  }

  render() {
    return (
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <div className="details"></div>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;

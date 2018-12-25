import React, { Component } from 'react';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url'; //se pone con {} porque no usé default
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
    SUN
} from './../../constants/weathers';

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: "Barcelona",
            data: null,
        };
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }

    componentWillMount(){
        console.log("UNSFE componentWillMount");
    }

    componentWillUpdate(nextProps,nextState){
        console.log("UNSFE componentWillUpdate");
    }

    handleUpdateClick = () =>{
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data=>{
           const newWeather = transformWeather(data);
           this.setState({
               data:newWeather
           });
        });
    }

    render(){
        console.log("render");
        const { city, data } = this.state; //destructuring
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    "cargando datos"
                }
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>  
        );
    }

}

export default WeatherLocation;

import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

import {
    CLOUD,
    SUN,   
    RAIN,  
    SNOW,  
    THUNDER,
    DRIZZLE,
} from './../../../constants/weathers';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers"
}

const getWeatherIcon = ( weatherState ) => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if(icon){
        return(
            <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
        );
    }else{
        return(
            <WeatherIcons className="wicon" name={"day-sunny"} size="2x"/>
        );
    }
};

const WeatherTemperature = ( {temperature, weatherState} ) => {
    return(
        <div className="weatherTemperatureCont">
            {
                getWeatherIcon(weatherState)
            }
            <span className="temperature">{ `${temperature}` }</span>
            <span className="temperatureType">{` ºC`}</span>
        </div>
    );
};

//Validación de proptypes,
//decimos que esperamos a temperature que va a ser numérico
//y esperamos weatherState que va a ser string
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
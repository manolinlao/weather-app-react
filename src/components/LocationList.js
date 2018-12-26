import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
    return(
        <div>
            <WeatherLocation city="bangkok,th"></WeatherLocation>
            <WeatherLocation city="barcelona,es"></WeatherLocation>
            <WeatherLocation city="hamburg,de"></WeatherLocation>
            <WeatherLocation city="mexico,mx"></WeatherLocation>
        </div>
    );
}

export default LocationList;
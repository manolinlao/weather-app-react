import Convert from 'convert-units';

import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../constants/weathers';

const getTemp = kelvin => {
    return Convert(kelvin).from("K").to("C").toFixed(0);
}

const getWeatherState = weather => {
    const { id } = weather;
    if(id < 300){
        return THUNDER;
    }
    if(id < 400){
        return DRIZZLE;
    }
    if(id < 600){
        return RAIN;
    }
    if(id < 700){
        return SNOW;
    }
    if(id === 800){
        return SUN;
    }
    return CLOUD;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);

    //la temperatura viene en grados Kelvin, si queremos celsius podríamos haber hecho:
    // añadir &units=metric al query de api_weather
    //o bien usar una librería de conversión
    //instalaremos con yarn o npm:   yarn add conver-units
    const temperature = Number(getTemp(temp));

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;

}

export default transformWeather;
import Convert from 'convert-units';

import {
    SUN
} from './../constants/weathers';

const getTemp = kelvin => {
    return Convert(kelvin).from("K").to("C").toFixed(2);
}

const getWeatherState = weather_data => {
    return SUN;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);

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
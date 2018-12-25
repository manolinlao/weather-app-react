
const api_key = "1bd7e3edb1db7489c62b1b078f1c9af5";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const location = "Barcelona,es";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const openWeatherMapService = require("./openWeatherMapService");
const accurWeatherService = require("./accurWeatherService");

function createConnection(source) {
    if (source == "accur_weather") {
        return accurWeatherService.getWeather();
    } else if (source == "open_weather_map") {
        return openWeatherMapService.getWeather();
    } else {
        throw new Error('api weather is not supported');
    }
}

module.exports = createConnection;
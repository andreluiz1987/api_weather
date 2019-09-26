const weatherFactory = require("./weatherFactory");

exports.getWeather = () => {
    return weatherFactory("open_weather_map"); 
}

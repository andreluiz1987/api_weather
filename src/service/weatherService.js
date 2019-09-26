const weatherFactory = require("./weatherFactory");

exports.getWeather = () => {
    return weatherFactory("accur_weather"); 
}

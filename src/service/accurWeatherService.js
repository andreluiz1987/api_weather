const axios = require('axios');
var fahrenheitToCelsius = require('fahrenheit-to-celsius');
const Weather = require("../models/weatherModel");

exports.getWeather = () => {
    let url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/44403?apikey=FA8zLQNeMBQ4dTkp2uKxweY6OQPHHgWK';
    return axios.get(url)
        .then(response => {
            let weather = new Weather("Belo Horizonte",
                parseInt(fahrenheitToCelsius(response.data.DailyForecasts[0].Temperature.Maximum.Value)),
                0);
            return weather;
        })
        .catch(error => {
            console.log(error);
        });
}

const axios = require('axios');
var fahrenheitToCelsius = require('fahrenheit-to-celsius');
const Weather = require("../models/weatherModel");
const { API_KEY_ACCUR_WEATHER, URL_ACCUR_WEATHER } = require('../../config');

exports.getWeather = () => {
    let token = API_KEY_ACCUR_WEATHER;
    let url = URL_ACCUR_WEATHER;
    
    return axios.get(url.concat(token))
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

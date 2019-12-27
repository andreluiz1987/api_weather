const axios = require('axios');
const kelvinToCelsius = require('kelvin-to-celsius');
const Weather = require("../models/weatherModel");
const { API_KEY_OPEN_WEATHER, URL_OPEN_WEATHER } = require('../../config');

exports.getWeather = () => {
    let token = API_KEY_OPEN_WEATHER;
    let url = URL_OPEN_WEATHER;	
    return axios.get(url.concat(token))
        .then(response => {
            let code = response.data.cod;
            if (code == 200) {
                let temp = parseInt(response.data.main.temp);
                let weather = new Weather(response.data.name,
                    parseInt(kelvinToCelsius(temp)),
                    response.data.main.humidity);
                return weather;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

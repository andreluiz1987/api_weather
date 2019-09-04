const axios = require('axios');
const kelvinToCelsius = require('kelvin-to-celsius');
const Weather = require("../models/weatherModel");

exports.getWeather = () => {
    return axios.get('https://api.openweathermap.org/data/2.5/weather?id=2270968&appid=8506ad2c74c3c69fbdd1708ec177fdf2')
        .then(response => {
            let code = response.data.cod;
            if (code == 200) {
                let weather = new Weather(response.data.name,
                    kelvinToCelsius(response.data.main.temp),
                    response.data.main.humidity);
                return weather;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

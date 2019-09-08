const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    API_KEY_ACCUR_WEATHER: process.env.API_KEY_ACCUR_WEATHER,
    API_KEY_OPEN_WEATHER: process.env.API_KEY_OPEN_WEATHER,
    URL_ACCUR_WEATHER: process.env.URL_ACCUR_WEATHER,
    URL_OPEN_WEATHER: process.env.URL_OPEN_WEATHER
};
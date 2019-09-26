'use scrict'

const service = require('../service/weather');
const express = require('express');
const router = express.Router();

router.get('/temperatures', service.getWeather);

module.exports = router;

'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/weatherController');

router.get('/weather', controller.getWeather);

module.exports = router;
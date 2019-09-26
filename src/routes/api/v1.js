const weatherController = require('../../controllers/weatherController');
const express = require('express');

let router = express.Router();

router.use('/weather', weatherController);
module.exports = router;
'use strict'

const express = require('express');
const apiRoute = require('./api');

let router = express.Router();

router.use('/api', apiRoute);

module.exports = router;
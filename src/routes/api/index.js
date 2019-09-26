const express = require('express');

let v1ApiController = require('./v1');
let healthCheck = require('./health-check')

let router = express.Router();

router.use('/v1', v1ApiController);
router.use('/v1', healthCheck);

module.exports = router;
const express = require('express');

let v1ApiController = require('./v1');
let healthCheck = require('./health-check')

let router = express.Router();

router.use('/v1', v1ApiController);
router.use('/v1', healthCheck);
router.use('/v2', healthCheck);
router.use('/v2', v1ApiController);

module.exports = router;
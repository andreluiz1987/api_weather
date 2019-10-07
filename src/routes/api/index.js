const express = require('express');

let v1ApiController = require('./v1');
let v2ApiController = require('./v2')

let router = express.Router();

router.use('/v1', v1ApiController);
router.use('/v2', v2ApiController);

module.exports = router;
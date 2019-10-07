const weatherController = require('../../controllers/weatherController');
const express = require('express');

let router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        version: '1.0.0'
    });
});

router.use('/weather', weatherController);
module.exports = router;
const express = require('express');
let router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        version: '1.0.0'
    });
});

module.exports = router;
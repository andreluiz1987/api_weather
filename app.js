const express = require('express');
const fs = require('fs');
const app = express();

const files = fs.readdirSync(__dirname + '/src/routes/').filter(function (x) { return x.substr(-3) == ".js"; });
for (let i = 0; i != files.length; ++i) {
	app.use('/', require('./src/routes/' + files[i]))
}

module.exports = app;
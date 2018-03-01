//express
var express = require('express');
//express instance
var apiApp = express();
//path for join function
var path = require('path');


apiApp.get('/api', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/test.html' ));
});

module.exports = apiApp;
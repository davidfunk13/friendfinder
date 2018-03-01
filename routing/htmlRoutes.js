//express
var express = require('express');
//express instance
var htmlApp = express();
//path for join function
var path = require('path');

htmlApp.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html' ));
});

module.exports = htmlApp;
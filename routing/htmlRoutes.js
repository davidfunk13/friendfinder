//express
var express = require('express');
//express instance
var htmlApp = express();
//path for join function
var path = require('path');

//html endpoint request
htmlApp.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html' ));
});

htmlApp.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'))
})

//export html get request
module.exports = htmlApp;
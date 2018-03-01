var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = module.exports = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname + '/app/public/')))

app.listen(PORT, function (error, response){
    if (error) {
        console.log(error);
    }
    console.log(`Application listening on port ${PORT}`);
});

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname + '/app/public/')))

app.get('/', function (req, res){
 res.sendFile(path.join(__dirname + "/app/public/home.html"));
});

app.listen(PORT, function (error, response){
    if (error) {
        console.log(error);
    }
    console.log(`Application listening on port ${PORT}`);
});

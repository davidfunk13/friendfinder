//Globals
// - express
var express = require('express');
var serverApp = express();
var PORT = process.env.PORT || 3000;
// - path for join function
var path = require('path');
// - body parser
var bodyParser = require('body-parser');

//requires endpoints files
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');

//tell express server listener to use these endpoints
serverApp.use(htmlRoutes);
serverApp.use(apiRoutes);

//Server Listener
serverApp.listen(PORT, function (error, response){
    if (error) {
        console.log(error);
    }
    console.log(`Application listening on port ${PORT}`);
});
//express
var express = require('express');
//Server listener instance of express
var app = express();
//Port env for heroku and local dev port
var PORT = process.env.PORT || 3000;
//Path for join function
var path = require('path');
//Body Parser for JSON objects
var bodyParser = require('body-parser');

//express data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//requires endpoints files
// var htmlRoutes = require('./app/routing/htmlRoutes');
// var apiRoutes = require('./app/routing/apiRoutes');

//tell express server listener to use these endpoints
// serverApp.use(htmlRoutes);
// serverApp.use(apiRoutes);

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
//Server Listener
app.listen(PORT, function (error, response){
    if (error) {
        console.log(error);
    }
    console.log(`Application listening on port ${PORT}`);
});
//Globals
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

//endpoint files
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');
//endpoints
app.use(htmlRoutes);
app.use(apiRoutes);

//Server Listener
app.listen(PORT, function (error, response){
    if (error) {
        console.log(error);
    }
    console.log(`Application listening on port ${PORT}`);
});

//export router module
module.exports = router;
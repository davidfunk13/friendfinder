
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/api', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/test.html' ));
});

module.exports = router;
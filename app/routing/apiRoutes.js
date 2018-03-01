//express
var express = require('express');
//express instance
var apiApp = express();
//path for join function
var path = require('path');

var bodyParser = require('body-parser');

apiApp.use(bodyParser.urlencoded({ extended: false }));
apiApp.use(bodyParser.json());

var dummyData = [
    {
      routeName: "yoda",
      name: "Yoda",
      role: "Jedi Master",
      age: 900,
      forcePoints: 2000
    },
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwankenobi",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    }
  ];
  
//get request
apiApp.get('/api/friends', function(req, res){
    res.json(dummyData);
})
apiApp.post('/api/friends', function (req, res) {
    var friend = req.body;
    dummyData.push(friend)
    console.log(friend);
    res.json(friend)
});

//export express get 
module.exports = apiApp;
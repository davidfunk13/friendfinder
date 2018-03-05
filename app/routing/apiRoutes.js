var path = require('path');
let friends = require('../data/friends');
// let survey = require('../public/javascript/survey')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function (req, res) {
    var userValues = req.body;
    userValuesArray = Object.values(userValues)
    console.log(`User: ${userValuesArray} Comparisons: ${friends[0].scores} ${friends[1].scores}`);
    for (var i = 0; i < friends.length; i++){
      console.log(friends[i])
      //compare friends[i].scores with userValuesArray
      let friend = friends[i].scores;
      let you = userValuesArray;
      for (var i = 0; i < 9; i++) {
        console.log(`Friend Value: ${friend[i]} You value ${you[i]}`)
      }
    }
      res.json(userValues);
  });
}
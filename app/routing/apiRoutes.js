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
    console.log(`User: ${userValuesArray} Comparisons: ${friends[0].scores} ${friends[1].scores}`)
    // console.log(userAnswers);
    res.json(userValues);
    // console.log(friends[1].scores)
  });
}
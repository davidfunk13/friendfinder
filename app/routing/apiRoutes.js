var path = require('path');
let friends = require('../data/friends');
// let survey = require('../public/javascript/survey')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function (req, res) {
    var userValues = req.body;
    Vals = Object.values(userValues)
    console.log(Vals)
    // console.log(userAnswers);
    res.json(userValues);
    // console.log(friends[1].scores)
  });
}
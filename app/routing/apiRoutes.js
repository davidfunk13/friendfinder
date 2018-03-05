var path = require('path');
let friends = require('../data/friends');
// let survey = require('../public/javascript/survey')
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function (req, res) {
    totalDifferences = []
    var userValues = req.body;
    userValuesArray = Object.values(userValues)
    // console.log(`User: ${userValuesArray} Comparisons: ${friends[0].scores} ${friends[1].scores}`);
    // var differenceGetter = [];
    for (var i = 0; i < friends.length; i++) {
      let friend = friends[i].scores;
      let you = userValuesArray
      let sum = 0;
      let differenceGetter = [];

      for (var j = 0; j < 10; j++) {
        let valComparison = Math.abs(friend[j] - you[j])
        differenceGetter.push(valComparison);
        if (differenceGetter.length === 10) {
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          totalDifferences.push(differenceGetter.reduce(reducer));
        }
      }
    }
    // res.json(userValues);
    Array.min = function (totalDifferences) {
      return Math.min.apply(Math, totalDifferences);
    };
    var smallestDifference = Array.min(totalDifferences)
    var smallestDifferenceIndex = totalDifferences.indexOf(smallestDifference)
    var result = {
      name: friends[smallestDifferenceIndex].name,
      photo: friends[smallestDifferenceIndex].photo,
      pointDifferential: smallestDifference,
    }
    res.json(result)
    console.log(result)
  });
}

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
      console.log(friends[i])

      // ////// LOOP 2 STARTS HEREcompare friends[i].scores with userValuesArray//////
      let friend = friends[i].scores;
      let you = userValuesArray
      let sum = 0;        
      let differenceGetter = [];

      for (var j = 0; j < 10; j++) {
        console.log(`Friend Value: ${friend[j]} You value ${you[j]}`)
        let valComparison = Math.abs(friend[j] - you[j])
        console.log(valComparison)
        differenceGetter.push(valComparison);
        console.log(differenceGetter)
        if (differenceGetter.length === 10) {
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          console.log(`total :${differenceGetter.reduce(reducer)}`);
          totalDifferences.push(differenceGetter.reduce(reducer));
        }
      }
    }
    console.log(totalDifferences)
    res.json(userValues);
    Array.min = function(totalDifferences){
      return Math.min.apply( Math, totalDifferences);
  };
  var smallestDifference = Array.min(totalDifferences)
  var smallestDifferenceIndex = totalDifferences.indexOf(smallestDifference)
  console.log(friends[smallestDifferenceIndex].name)
  });
}
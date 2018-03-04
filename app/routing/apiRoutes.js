var path = require('path');
let friends = require('../data/friends');

console.log(friends[0],friends[1])

module.exports = function(app) {
  app.get('/api/friends', function(req, res){
    res.json(dummyData);
});
app.post('/api/friend', function (req, res) {
    var friend = req.body;
    dummyData.push(friend)
    console.log(friend);
    res.json(friend)
});
}
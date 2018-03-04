var path = require('path');
let friends = require('../data/friends');
// let survey = require('../public/javascript/survey')

module.exports = function(app) {
  app.get('/api/friends', function(req, res){
    res.json(friends)
});
app.post('/api/friend', function (req, res) {

});
}
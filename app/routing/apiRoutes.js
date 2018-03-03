var path = require('path');


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

module.exports = function(app) {
  app.get('/api/friends', function(req, res){
    res.json(dummyData);
})
app.post('/api/friend', function (req, res) {
    var friend = req.body;
    dummyData.push(friend)
    console.log(friend);
    res.json(friend)
});
}
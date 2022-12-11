var db = require("../models");
var Spotify = require("node-spotify-api");

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var songPicker = require("../scripts/genreSorter");

module.exports = function(app) {
  // Get all liked songs where the userid in the database matches the userid param. Include a join from the 'users' table so we have a grab on the foreign/primary keys. This is not used in MVP, but it's necessary for future features.
  app.get("/api/favorites/:id", function(req, res) {
    db.Song.findAll({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbFavsResult) {
      res.json(dbFavsResult);
    });
  });

  // Login route. Checks if the user is in the db, and returns their userid.
  app.post("/api/login", function(req, res) {
    console.log("Logging in user ");
    db.User.findOne({
      where: {
        username: req.body.email,
        password: req.body.password
      }
    }).then(function(dbUserResult) {
      if (dbUserResult === null) {
        res.json({ status: "error" });
      } else {
        var userData = {
          id: dbUserResult.id,
          username: dbUserResult.username
        };
        res.json(userData);
      }
    });
  });


// log in and save to DB

app.post("/", function(req, res) {
    db.User.create({
      username: req.body.email,
      password: req.body.password
    }).then(function(newUser) {
      res.json(newUser);
    });
  });

// this is the favorite parts 
// having the the  songname, artistname and songdetails //
module.exports = function(sequelize, DataTypes) {
    var favoriteSongs = sequelize.define("favoriteSongs", {
      songName: DataTypes.STRING,
      artistName: DataTypes.STRING,
      songDetails: DataTypes.STRING
    });
    return favoriteSongs;
  };
  
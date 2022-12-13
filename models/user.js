
// importing the user data //

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'userName',
        validate: {
          len: [4]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [4]
      },
      rockLike: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      rockDislike: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
    });
}
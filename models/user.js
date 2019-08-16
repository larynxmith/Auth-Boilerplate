'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    bio: DataTypes.TEXT,
    profile: DataTypes.TEXT
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
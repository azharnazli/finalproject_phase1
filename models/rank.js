'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rank = sequelize.define('Rank', {
    class_name: DataTypes.STRING
  }, {});
  Rank.associate = function(models) {
    // associations can be defined here
    Rank.hasMany(models.Hero)
  };
  return Rank;
};
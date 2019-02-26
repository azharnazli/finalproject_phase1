'use strict';
module.exports = (sequelize, DataTypes) => {
  const HeroesThreats = sequelize.define('HeroesThreats', {
    heroesId: DataTypes.INTEGER,
    threatId: DataTypes.INTEGER
  }, {});
  HeroesThreats.associate = function(models) {
    // associations can be defined here
  };
  return HeroesThreats;
};
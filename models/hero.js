'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define('Hero', {
    name: DataTypes.STRING,
    powerLevel: DataTypes.INTEGER
  }, {});
  Hero.associate = function(models) {
    // associations can be defined here
    Hero.hasOne(models.Rank)
    Hero.belongsToMany(models.Threat,{through:models.HeroesThreats})
  };
  return Hero;
};
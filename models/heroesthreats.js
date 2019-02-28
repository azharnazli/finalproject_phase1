'use strict';
module.exports = (sequelize, DataTypes) => {
  const HeroesThreats = sequelize.define('HeroesThreats', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    HeroesId: DataTypes.INTEGER,
    ThreatId: DataTypes.INTEGER,
    history:  DataTypes.INTEGER
  }, {});
  HeroesThreats.associate = function(models) {
    // associations can be defined here
  };
  return HeroesThreats;
};
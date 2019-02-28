'use strict';
module.exports = (sequelize, DataTypes) => {
  const Threat = sequelize.define('Threat', {
    level_name: DataTypes.STRING
  }, {});
  Threat.associate = function(models) {
    // associations can be defined here
    Threat.belongsToMany(models.Hero,{through: models.HeroesThreats, foreignKey:'ThreatId'})
  };
  return Threat;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define('Hero', {
    name: DataTypes.STRING,
    powerLevel: DataTypes.INTEGER,
    RankId : DataTypes.INTEGER,
    password : DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    hooks : {
      beforeUpdate : function(Hero){
        if(Hero.powerLevel <= 60) {
          return Hero.RankId = 4
        }else if(Hero.powerLevel <= 100){
          return Hero.RankId = 3
        }
      }
    }
  });
  Hero.associate = function(models) {
    // associations can be defined here
    Hero.hasOne(models.Rank)
    Hero.belongsToMany(models.Threat,{through:models.HeroesThreats, foreignKey:'ThreatId'})
  };

  Hero.prototype.updateRank = function (){
    const rank = 0;
    if(this.powerLevel < 60){
      rank == 4
    }else if(this.powerLevel < 100){
      rank == 3
    }
    return rank
  }
  return Hero;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define('Hero', {
    name: {
      type : DataTypes.STRING,
      isUnique : true,
      allowNull: false
    },
    powerLevel: DataTypes.INTEGER,
    RankId : DataTypes.INTEGER,
    password : {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: DataTypes.STRING,
    email: {
          type : DataTypes.STRING,
          isUnique : true,
          allowNull : false,
          validate : {
          isEmail : true
        }
    }
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
    Hero.belongsTo(models.Rank)
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
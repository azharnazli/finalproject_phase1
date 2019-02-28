const {
  Hero,
  Rank,
  Threat,
  Question,
  Answer,
  HeroesThreats
} = require('../models')
const express = require('express');
const router = express.Router();
const helper = require('../helper/helper')

router.get('/:id/', (req, res) => {
  HeroesThreats.findByPk(req.params.id)
    .then(threat => {
      Hero.findByPk(req.session.login.id)
        .then(hero => {
          // res.send({data: helper.fight(hero,threat)})
          res.render("threat/main", {
            data: helper.fight(hero, threat),
            hero,
            threat
          })
        })
    })
})

router.post('/:id/', (req, res) => {
  let result = req.body.result
  let score;
  if (result == 'lose') {
    result = -10
  } else {
    result = 30
  }
  Hero.findByPk(req.params.id)
    .then(hero => {
      let clas = helper.checkClass(hero)
      score = hero.powerLevel + result
      Hero.update({
        RankId:clas,
        powerLevel: score
      }, {
        where: {
          id: req.params.id
        }
      })
      .then ( ()=>{
        res.redirect(`/hero/${req.params.id}`)
      })
    })



})

module.exports = router
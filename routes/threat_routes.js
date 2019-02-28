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
  let idthreat = req.params.id
  HeroesThreats.findByPk(req.params.id)
    .then(threat => {
      Hero.findByPk(req.session.login.id)
        .then(hero => {
          res.render("threat/main", {
            data: helper.fight(hero, threat),
            hero,
            idthreat,
            threat,
            session: req.session.login
          })
        })
    })
})

router.post('/:id/', (req, res) => {
  let idthreat = req.body.idthreat
  let result = req.body.result
  let score;
  if (result == 'lose') {
    score = -10
  } else {
    score = 30
  }
  Hero.findByPk(req.params.id)
    .then(hero => {
      let clas = helper.checkClass(hero)
      score = hero.powerLevel + score
      return Hero.update({
          RankId: clas,
          powerLevel: score
        }, {
          where: {
            id: req.params.id
          }
        })
        .then(() => {
          HeroesThreats.update({
            history: result,
            HeroesId:req.params.id
          }, {
            where: {
              id: idthreat
            }
          })
        })
    })
    .then(() => {
      res.redirect(`/hero/${req.params.id}`)
    })



})

module.exports = router
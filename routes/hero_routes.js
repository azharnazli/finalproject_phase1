const {Hero,Rank,Threat,Question,Answer,HeroesThreats} = require('../models')
const express = require('express');
const router = express.Router();
const helper = require('../helper/helper')

router.get('/:id', (req, res) => {
  if (req.session.login) {
    Hero.findByPk(req.session.login.id)
    .then(data=>{
      HeroesThreats.findAll({
        where : {
          HeroesId:null
        }
      })
      .then(threat =>{
        // res.send(threat)
        res.render('hero/hero', {
          session: req.session.login,
          data,threat
        })
      })
    })
    .catch(err=>{
      res.send(err.message)
    })
  } else {
    res.redirect('/')
  }
})

router.post('/:id', (req, res) => {
  Hero.update({
    powerLevel : helper.quizResult(req.body),
  },{
    where : {
      id : req.params.id
    }
  })
  .then(()=>{
    Hero.findByPk(req.params.id)
    .then(data=>{
      let rankId;
        if(data.powerLevel <= 60){
          rankId = 4
        }else if(data.powerLevel <= 100){
          rankId = 3
        }
        Hero.update({
          RankId : rankId
        },{
          where : {
            id : req.params.id
          }
        })
      res.redirect('/hero/hero')
    })
  })
  .catch(err=>{
    res.send(err.message)
  })
})

router.get('/:id/quiz', (req, res) => {
  Hero.findByPk(req.session.login.id)
  .then(data=>{
    Question.findAll({
      include: [Answer]
    })
    .then(questions => {
      // res.send(questions)
      
      res.render('hero/quiz', {
        questions,
        data
      })
    })
  })
    .catch(err => {
      res.send(err.message)
    })
})

router.post('/:id/quiz', (req, res) => {
  res.send(req.body)
})


module.exports = router
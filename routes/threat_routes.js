const {Hero,Rank,Threat,Question,Answer,HeroesThreats} = require('../models')
const express = require('express');
const router = express.Router();
const helper = require('../helper/helper')

router.get('/:id/',(req, res)=>{
  HeroesThreats.findByPk(req.params.id)
  .then (threat =>{
    res.render('threat/main')
  })
})

module.exports = router
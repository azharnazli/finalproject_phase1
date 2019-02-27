const {Hero,Rank,Threat} = require('../models')
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{res.render('home')}) //DISPLAY HOME

//-----------REGISTER NEW HEROES-------------
router.get('/register',(req, res)=>{
    res.render('register')
  })
  
  router.post('/',(req,res)=>{
  
      const addHero = 
      {
          name: req.body.name,
          powerLevel: req.body.powerLevel,
          RankId : req.body.RankId,
          password : req.body.password,
          gender : req.body.gender
      }
  
      Hero.create(addHero)
      .then(()=>{
          res.redirect('/home')
      })
      .catch(err=>{
          res.send(err.message)
      })
  })
//--------------LOGIN HEROES------------------
router.get('')
module.exports = router
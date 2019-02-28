const {Hero,Rank,Threat,Question,Answer} = require('../models')
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('hero/hero')
})

router.get('/quiz',(req,res)=>{
  Question.findAll()
  .then(questions=>{
    res.render('hero/quiz',{questions})
  })
  
})

router.get('/quiz-result',(req,res)=>{
  res.render('hero/quiz-result')
})

module.exports = router
        
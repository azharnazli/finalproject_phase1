const {Hero,Rank,Threat,Question,Answer} = require('../models')
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('hero/hero')
})

router.get('/quiz',(req,res)=>{
  Question.findAll({
    include : [Answer]
  })
  .then(questions=>{
    // res.send(questions)
    res.render('hero/quiz',{questions})
  })
  .catch(err=>{
    res.send(err.message)
  })
})

router.post('/quiz',(req,res)=>{
  res.send(req.body)
})

router.post('/quiz-result',(req,res)=>{
  res.render('quiz-result.ejs',{data:req.body})
})


module.exports = router
        
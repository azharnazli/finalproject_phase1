const {Hero,Rank,Threat} = require('../models')
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('hero/hero')
})

module.exports = router
        
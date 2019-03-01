const {Hero,Rank,Threat,Question,Answer,HeroesThreats} = require('../models')
const express = require('express');
const router = express.Router();

//------------TOP GLOBAL-----------------------
router.get('/', (req, res) => {
    Hero.findAll({
        include: [{model : Rank}],
        order : [['powerLevel','DESC']]
    })
        .then(heroes => {
            // res.send(heroes)
            res.render('top-global', {
                heroes,session: req.session.login
            })
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router
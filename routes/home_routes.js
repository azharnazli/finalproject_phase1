const {
    Hero,
    Rank,
    Threat
} = require('../models')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);



router.get('/', (req, res) => {
    res.render('home', {
        session: req.session.login
    })
}) //DISPLAY HOME

//-----------REGISTER NEW HEROES-------------
router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {

    const addHero = {
        name: req.body.name,
        powerLevel: req.body.powerLevel,
        email:req.body.email,
        RankId: req.body.RankId,
        password: req.body.password,
        gender: req.body.gender
    }
    addHero.password = bcrypt.hashSync(addHero.password, salt)

    Hero.create(addHero)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            res.send(err.message)
        })
})

//--------------LOGIN HEROES------------------
router.get('/login', (req, res) => {
    let errMessage

    if (req.query.err) {
        errMessage = req.query.err
    }

    res.render('login', {
        errMessage
    })
})

router.post('/login', (req, res) => {
    Hero.findOne({
            where: {
                name: req.body.name
            }
        })
        .then(hero => {
            if (bcrypt.compareSync(req.body.password,hero.password)) {
                req.session.login = {
                    id: hero.id,
                    nama: hero.name
                }
                res.redirect('/')
            } else {
                throw new Error('password salah')
            }
        })
        .catch(err => {
            res.redirect(`/login?err=${err}`)
        })
})

//--------logout----------------
router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})


//------------TOP GLOBAL-----------------------
router.get('/top-global', (req, res) => {
    Hero.findAll({
        include: [{model : Rank}]
    })
        .then(heroes => {
            // res.send(heroes)
            res.render('top-global', {
                heroes
            })
        })
        .catch(err => {
            res.send(err)
        })
})
module.exports = router
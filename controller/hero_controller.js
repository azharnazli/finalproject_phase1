const {Hero, Rank, Threat} = require('../models')

class Hero_Controller {
    static findAll(req,res) {
        Hero.findAll({
            include : [
                {
                    model : Rank
                }
            ],
            order : [['id','ASC']]
        })
        .then(heroes=>{
            res.render('hero/list',{heroes})
        })
        .catch(err=>{
            res.render('error/error',{err})
        })
    }
}
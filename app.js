const model = require('./models')
const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./routes/home_routes')
const heroRouter = require('./routes/hero_routes')
const threatRouter = require('./routes/threat_routes')
const session = require('express-session')
const cron = require('node-cron')
const helper = require('./helper/helper')






app.use(session({
    secret: 'foxheroes',
    resave:true,
    cookie:true
}))
app.locals.quizResult = require('./helper/helper')
app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(__dirname + '/public'))
app.use("*/css",express.static("public/css"));
app.use('*/js',express.static("public/js"));
app.use("*/images",express.static("public/images"))

app.use('/', homeRouter)
app.use('/hero', heroRouter)
app.use('/threat', threatRouter)


cron.schedule('*/5 * * * *',()=>{
    model.HeroesThreats.create({
        ThreatId: helper.randomNumber(),
        createdAt:new Date(),
        updatedAt:new Date(),
    })
})


app.listen(port, () => {
    console.log(`listening to port : ${port}`)
})
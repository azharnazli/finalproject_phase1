const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./routes/home_routes')
const heroRouter = require('./routes/hero_routes')
const session = require('express-session')



app.use(session({
    secret: 'foxheroes'
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





app.listen(port, () => {
    console.log(`listening to port : ${port}`)
})
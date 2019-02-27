const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./routes/home_routes')
const heroRouter = require('./routes/hero_routes')
const session = require('express-session')


app.use(session({
    secret: 'foxheroes'
}))

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(__dirname + '/public'))
app.get('/session', (req, res) => {
})

app.use('/', homeRouter)
app.use('/hero', heroRouter)





app.listen(port, () => {
    console.log(`listening to port : ${port}`)
})
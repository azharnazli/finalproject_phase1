const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./routes/home_routes')
const heroRouter = require('./routes/hero_routes')


app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/public'))


app.use('/',homeRouter)
//------------------------------------------




app.listen(port,()=>{
    console.log(`listening to port : ${port}`)
})
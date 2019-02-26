const express = require('express');
const app = express();
const port = 3000;
// const routes = require('./routes')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))


app.use('/',(req,res)=>{
    res.send('WELCOME')
})

app.listen(port,()=>{
    console.log(`listening to port : ${port}`)
})
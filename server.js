const express = require('express');
const app = express();
const path = require('path');
const {engine} = require('express-handlebars');
const dotenv = require('dotenv');
dotenv.config({path:'./env.env'})
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
app.engine('.hbs',engine({
    extname:'.hbs',
    defaultView:'default',
    layoutsDir: path.join(__dirname,'views'),
    partialsDir: path.join(__dirname,'views/partials')
}))
app.set('view engine','.hbs');
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('main')
})

app.listen(5000,()=>{
    console.log('server started click---- http://localhost:5000' )
})
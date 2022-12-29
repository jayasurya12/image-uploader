const express = require('express');

const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.json('start')
})

app.listen(5000,()=>{
    console.log('server started')
})
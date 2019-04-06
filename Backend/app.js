require('./db')
const rtsIndex = require('./router/index.router');
const express = require('express')
const bodyparser = require('body-parser')
const cors =require('cors')

var app = express();
var port = process.env.PORT || 4000

app.use(bodyparser.json())
app.use(cors())

app.use('/api',rtsIndex)

app.listen(port, ()=>
console.log('server started at port :${process.env.PORT}')
);
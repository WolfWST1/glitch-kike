const express = require('express')
const app = express()
const path = require('path')
require('ejs')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res)=>{
    res.render('Hello_world');
})

app.get('/form', (req, res)=>{
    res.render('form');
})

app.listen(3000)
console.log('Server on port 3000')
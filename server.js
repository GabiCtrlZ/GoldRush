const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./routes/api')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost/cityWeatherDB', {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/', api)




const port = 3000
app.listen(port, function(){
    console.log('Listening on port ' + port )
})
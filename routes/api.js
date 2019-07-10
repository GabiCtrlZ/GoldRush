const express = require('express')
const City = require('../model/City')
const request = require('request-promise')
const router = express.Router()
const apiKey = 'a0ece18dd52b481c98084956191007'
const url = 'http://api.apixu.com/v1/forecast.json'



router.get('/city/:cityName', function (req, res) {
    const city = req.params.cityName || 'paris'
    if (city.length > 12) {
        city = ''
        return res.send('ilegal input')
    }
    request.get(`${url}?key=${apiKey}&q=${city}`).then(function (response) {

        console.log('request was succsessful')
        const data = JSON.parse(response)
        const obj = {
            name: data.location.name,
            updatedAt: data.current.last_updated,
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            conditionPic: data.current.condition.icon
        }
        res.send(obj)

    }).catch(function(err){
        console.log('error')
        res.send('error')
    })
})

router.get('/cities', function (req, res) {
    console.log('a get to city has been made')
    City.find({}, function (err, response) {
        res.send(response)
    })
})

router.post('/city', function (req, res) {
    const data = req.body
    data.name = data.name.toLowerCase()
    const newCity = new City(data)
    newCity.save()
    console.log('new data has been saved')
    res.end()
})

router.delete('/city/:cityName', function (req, res) {
    const data = req.params.cityName.toLowerCase()
    City.findOneAndRemove({ name: data }, function (err) {
        console.log('deleted ' + data)
        res.end()
    })
})

module.exports = router
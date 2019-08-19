const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String
})

const City = mongoose.model('cities', citySchema)

module.exports = City
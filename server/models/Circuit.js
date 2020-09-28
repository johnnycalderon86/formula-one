const mongoose = require('mongoose')

const Schema = mongoose.Schema


const circuitSchema = new Schema({
    name: String,
    city: String,
    fastestLap: String,
    fastestLapDriver: String,
    length: String,
    country: String,
    fastestLapCar: String,
    fastestLapYear: String,
    fastestLapTeam: String,
});

module.exports = mongoose.model('Circuit', circuitSchema)
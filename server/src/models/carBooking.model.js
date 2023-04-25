const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const carBookingSchema = Schema({
    startdate: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true

    },
    destination: {
        type: String,
        required: true

    }
});

const carBooking = new mongoose.model("CarBooking", carBookingSchema)

module.exports = carBooking;
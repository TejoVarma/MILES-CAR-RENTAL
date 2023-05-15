const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myBookingSchema = Schema({
    startdate: {
        type: String
    },
    enddate: {
        type: String
    },
    origin: {
        type: String
    },
    destination: {
        type: String
    },
    carname: {
        type: String
    },
    type: {
        type: String
    },
    model: {
        type: String
    },
    mileage: {
        type: Number
    },
    perkm: {
        type: Number
    },
    availablefrom: {
        type: String
    },
    availabletill: {
        type: String
    },
    description: {
        type: String
    },
    cardetails: {
        type: String
    },
    details: {
        type: String
    },
    image: {
        type: String
    },
    carnumber : {
        type : String
    },
    bookingId : {
        type : String
    },
    bookingTime : {
        type : String
    },
    bookingDate : {
        type : String
    },
    pricePerKm  : {
        type : String
    },
    pricing : {
        type : String
    },
    taxes : {
        type : String
    },
    subTotal : {
        type : String
    },
    userId: {
        type: String
    },
    carId:{
        type: String
    }
});

const Bookings = mongoose.model("myBookings", myBookingSchema);
module.exports = Bookings;

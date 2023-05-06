const express = require('express');
const app = express();
const cors = require('cors');
const adminCarRoutes = require('./routers/adminCarDetails.router');
const carBookingRoutes = require('./routers/booking.router');
const myBookingRoutes = require('./routers/myBooking.router');
const loginRoutes = require('./routers/logins.router');


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());

app.use('/admin', adminCarRoutes);
app.use('/user',carBookingRoutes)
app.use('/user',myBookingRoutes)
app.use('/',loginRoutes);
module.exports = app;
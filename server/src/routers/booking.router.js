const express = require('express')
const { getbookingdetails, bookingdetailcontrol, updatebooking, deletebooking, getAllCars, getCarById, } = require("../controllers/bookingDetails.controller")
const router = express.Router()
router.get('/getbookingdetails', getbookingdetails);
router.post('/bookingdetails', bookingdetailcontrol);
router.put('/updatebooking/:id', updatebooking)
router.delete('/deletebooking/:id', deletebooking);
router.get("/getcars", getAllCars)
router.get('/getcar/:id', getCarById);
module.exports = router;
const express = require("express")
const { getmybookings, postbookings, deletemybooking, getmybookingbyid, updatemybooking } = require("../controllers/myBooking.controller")
const router = express.Router()
router.get('/mybookings', getmybookings);
router.post('/postmybookings', postbookings);
router.delete("/mybookings/:id", deletemybooking)
router.get('/get/:id', getmybookingbyid);
router.patch('/update/:id', updatemybooking);

module.exports = router;
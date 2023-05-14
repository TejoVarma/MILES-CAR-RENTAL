const carBooking = require("../models/carBooking.model");
const Cars = require("../models/adminCarDetails.model");
const jwt = require("jsonwebtoken");
const User = require("../models/userRegister.model");
exports.getbookingdetails = async (req, res) => {
    try {
        let token = await getToken(req.headers);
        let payload = await jwt.verify(token, process.env.SECRET);
        // console.log(payload);
        let newUser = await User.findById(payload._id);
        if (token && newUser) {
            const bookings = await carBooking.find({});
            return res.status(200).send({
                status : "Success",
                userCount: bookings.length,
                message: "All users Data",
                result: bookings,
            });
        } else {
            res.status(403).json({ status: "Failed", result: "Unauthorized" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error in Getting All users Data",
            err,
        });
    }
};
exports.bookingdetailcontrol = async (req, res) => {
    try {
        let token = await getToken(req.headers);
        let payload = await jwt.verify(token, process.env.SECRET);
        console.log(payload);
        let newUser = await User.findById(payload._id);
        if (token && newUser) {
            const { startdate, enddate, origin, destination } = req.body;
            await carBooking.deleteMany({});
            if (!startdate || !enddate || !origin || !destination) {
                return res.status(401).send({
                    success: false,
                    message: "please fill all fields",
                });
            }
            const user = new carBooking({
                startdate,
                enddate,
                origin,
                destination,
                userId: newUser._id,
            });
            await user.save();
            return res.status(200).json({
                status: "Success",
                result : user
            });
        } else {
            res.status(403).json({ status: "Failed", result: "Unauthorized" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "error in car booking",
            err,
        });
    }
};
exports.updatebooking = async (req, res) => {
    try {
        let token = await getToken(req.headers);
        let payload = await jwt.verify(token, process.env.SECRET);
        console.log(payload);
        let newUser = await User.findById(payload._id);
        if (token && newUser) {
            const { id } = req.params;
            const { startdate, enddate, origin, destination } = req.body;
            if (!startdate || !enddate || !origin || !destination) {
                return res.status(401).send({
                    success: false,
                    message: "please fill all fields",
                });
            }
            const updatedDetails = await carBooking.findByIdAndUpdate(
                id,
                { startdate, enddate, origin, destination },
                { new: true }
            );
            if (!updatedDetails) {
                return res.status(404).send({
                    success: false,
                    message: "Booking details not found",
                });
            }
            return res.status(200).send({
                success: true,
                message: "Booking Details Updated Succesfully",
                details: updatedDetails,
            });
        } else {
            res.status(403).json({ status: "Failed", result: "Unauthorized" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "error in updated booking details",
            err,
        });
    }
};
exports.deletebooking = async (req, res) => {
    try {
        let token = await getToken(req.headers);
        let payload = await jwt.verify(token, process.env.SECRET);
        console.log(payload);
        let newUser = await User.findById(payload._id);
        if (token && newUser) {
            const bookingId = req.params.id;
            const booking = await carBooking.findByIdAndDelete(bookingId);
            if (!booking) {
                return res.status(404).send({
                    success: false,
                    message: "Booking details not found",
                });
            }
            return res.status(200).send({
                success: true,
                message: "Booking Details Deleted Succesfully",
                booking,
            });
        } else {
            res.status(403).json({ status: "Failed", result: "Unauthorized" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "error in deleting booking details",
            err,
        });
    }
};
exports.getAllCars = async (req, res) => {
    try {
        let token = await getToken(req.headers);
        let payload = await jwt.verify(token, process.env.SECRET);
        // console.log(payload);
        let newUser = await User.findById(payload._id);
        if (token && newUser) {
            let cars = await Cars.find();
            res.status(200).send({
                success: true,
                message: "all car details",
                result: cars,
            });
        } else {
            res.status(403).json({ status: "Failed", result: "Unauthorized" });
        }
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "failed to get car details",
            err,
        });
    }
};
exports.getCarById = async (req,res)=>{
    try{
        let token = await getToken(req.headers);
        let payload = await jwt.verify(token, process.env.SECRET);
        // console.log(payload);
        let newUser = await User.findById(payload._id);
        if (token && newUser) {
            let car = await Cars.find({_id : req.params.id});
            res.status(200).send({
                success: true,
                message: "all car details",
                result: car,
            });
        }
        else {
            res.status(403).json({ status: "Failed", result: "Unauthorized" });
        }
    }
    catch(err)
    {
        res.status(400).send({
            success: false,
            message: "failed to get car details",
            err,
        });
    }
}

function getToken(headers) {
    if (headers && headers.authorization) {
        let token = headers.authorization;
        return token;
    } else {
        return null;
    }
}

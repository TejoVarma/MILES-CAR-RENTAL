const Admin = require('../models/adminRegister.model');
const { validationResult } = require('express-validator');
require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.SECRET;

adminController = {};


// creating a new user

adminController.createAdmin = async function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await Admin.create({
            name: req.body.name,
            contact: req.body.contact,
            email: req.body.email,
            password: secPassword
        })
        res.json({ success: true })

    } catch (error) {
        res.json({ success: false })
        console.log(error)

    }
}
//---------------------------------------------------------------------------------
// logging in a new user 
adminController.loginAdmin = async function (req, res) {
    let email = req.body.email;
    try {
        let userData = await Admin.findOne({ email })
        if (!userData) {
            return res.status(400).json({ errors: "user not found" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
        if (!pwdCompare) {
            return res.status(400).json({ errors: "incorrect password" });
        }

        const data = {
            admin: {
                id: userData._id,
                email: userData.email
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        return res.json({ success: true, authToken: authToken })
    } catch (error) {
        res.json({ success: false })
        console.log(error)

    }

}

module.exports = adminController;

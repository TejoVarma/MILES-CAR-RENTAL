const express = require("express")
const router = express.Router();
const User = require("../models/userRegister.model");
const { body, validationResult } = require('express-validator');
require("dotenv").config();


const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.SECRET;

const userController = {}

// creating a new user 

userController.createUser = async function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await User.create({
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

userController.loginUser = async function (req, res) {
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email })
        if (!userData) {
            return res.status(400).json({ errors: "user not found" });
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
        if (!pwdCompare) {
            return res.status(400).json({ errors: "incorrect password" });
        }

        const data = {
            user: {
                id: userData.id,
                email : userData.email
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        return res.json({ success: true, authToken: authToken })
    } catch (error) {
        res.json({ success: false })
        console.log(error)

    }
}

module.exports = userController;

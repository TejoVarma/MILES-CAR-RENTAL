const express = require( "express")
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const userController = require('../controllers/user.controller');
const { body, validationResult } = require('express-validator');
require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.SECRET;


router.post("/registerAdmin", [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password min length is 5').isLength({ min: 5 }),
], adminController.createAdmin);

//---------------------------------------------------------------------------------
// logging in a new user 

router.post("/loginAdmin", adminController.loginAdmin)

// creating a new user 
router.post("/registerUser", [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password min length is 8').isLength({ min: 8 }),
], userController.createUser);

//---------------------------------------------------------------------------------
// logging in a new user 

router.post("/loginUser", userController.loginUser);


module.exports = router;

require("dotenv").config();
const User = require("../models/userRegister.model");
const Admin = require("../models/adminRegister.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//TO REGISTER AS USER
const userRegister = async (req, res) => {
    try {
        let { password, email, secret } = req.body;
        let hashedPassword = await bcrypt.hash(password, 10);
        let hashedSecret = await bcrypt.hash(secret, 10);

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ status: "Failed", field: "email", message: "Email already exist!!" })
        let newUser = await new User({
            ...req.body,
            password: hashedPassword,
            secret: hashedSecret
        });
        newUser = await newUser.save();
        res.status(201).json({ status: "Success", user: newUser });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}

//TO REGISTER AS admin
const adminRegister = async (req, res) => {
    try {
        let { password, email, secret } = req.body;
        let hashedPassword = await bcrypt.hash(password, 10);
        let hashedSecret = await bcrypt.hash(secret, 10);

        let user = await Admin.findOne({ email });
        if (user) return res.status(400).json({ status: "Failed", field: "email", message: "Email already exist!!" })
        let newUser = await new Admin({
            ...req.body,
            password: hashedPassword,
            secret: hashedSecret
        });
        newUser = await newUser.save();
        res.status(201).json({ status: "Success", user: newUser });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}

//TO LOGIN AS USER
const userLogin = async (req, res) => {
    let { email, password, contact } = req.body;
    try {
        let user = await User.findOne({ email });

        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const { name, email, contact, isUser, selected, _id, profilePic } = user;
                let jwtToken = await jwt.sign({ name, email, contact, isUser, selected, _id }, process.env.SECRET);
                res.status(200).json({ status: "Success", token: "JWT " + jwtToken, user : { name, email, contact, isUser, selected, _id, profilePic }});
            } else {
                res.status(401).json({ status: "Failed", field: "password", message: "Password not match!!" });
            }
        } else {
            res.status(401).json({ status: "Failed", field: "email", message: "User not found!!" });
        }

    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}

//TO CHECK SECRET OF USER
const userSecretCheck = async (req, res) => {
    let { email, secret } = req.body;
    try {
        let user = await User.findOne({ email });

        if (user) {
            if (await bcrypt.compare(secret, user.secret)) {
                res.status(200).json({ status: "Success" });
            } else {
                res.status(401).json({ status: "Failed", field: "secret", message: "secret not match!!" });
            }
        } else {
            res.status(401).json({ status: "Failed", field: "email", message: "User not found!!" });
        }

    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}

//TO RESET PASSWORD OF USER
const userPasswordReset = async (req, res) => {
    let { password, email } = req.body;
    try {
        let user = await User.findOne({ email });
        let hashedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate(user._id, {password : hashedPassword});
        res.status(201).json({ status: "Success" });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}

//TO LOGIN AS admin
const adminLogin = async (req, res, next) => {
    let { email, password, contact } = req.body;
    try {
        let user = await Admin.findOne({ email });
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const { name, email, contact, isadmin, _id, profilePic } = user;
                let jwtToken = await jwt.sign({ name, email, contact, isadmin, _id }, process.env.SECRET);
                res.status(200).json({ status: "Success", token: "JWT " + jwtToken, user : { name, email, contact, isadmin, _id, profilePic } });
            } else {
                res.status(401).json({ status: "Failed", field: "password", message: "Password not match!!" });
            }
        } else {
            res.status(401).json({ status: "Failed", field: "email", message: "User not found!!" });
        }

    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}

//TO CHECK SECRET OF admin
const adminSecretCheck = async (req, res) => {
    let { email, secret } = req.body;
    try {
        let user = await Admin.findOne({ email });

        if (user) {
            if (await bcrypt.compare(secret, user.secret)) {
                res.status(200).json({ status: "Success" });
            } else {
                res.status(401).json({ status: "Failed", field: "secret", message: "secret not match!!" });
            }
        } else {
            res.status(401).json({ status: "Failed", field: "email", message: "User not found!!" });
        }

    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}

//TO RESET PASSWORD OF admin
const adminPasswordReset = async (req, res) => {
    let { password, email } = req.body;
    try {
        let user = await Admin.findOne({ email });
        let hashedPassword = await bcrypt.hash(password, 10);
        await Admin.findByIdAndUpdate(user._id, {password : hashedPassword});
        res.status(201).json({ status: "Success" });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}

//TO GET SINGLE admin DETAIS
const getSingleadmin = async (req, res) => {
    try {
        let admin = await Admin.findById(req.params.id);
        res.status(200).json({ status: "Sucess", admin });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message })
    }
}

module.exports = { userLogin, userRegister, adminLogin, adminRegister, getSingleadmin, userSecretCheck, adminSecretCheck, userPasswordReset, adminPasswordReset };
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        contact: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        secret: {
            type: String,
            required: true,
        },
        isVendor: {
            type: Boolean,
            required: true,
            default: true
        },
    },
    { timestamp: true }
);
const Admin = mongoose.model("Admins", AdminSchema);
module.exports = Admin;
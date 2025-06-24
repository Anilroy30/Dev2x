const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: [4, "First Name must be at least 4 characters long"],
        maxlength: [20, "First Name cannot exceed 20 characters"],
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: [4, "Last Name must be at least 4 characters long"],
        maxlength: [20, "Last Name cannot exceed 20 characters"],
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: "Invalid Email Address",
        },
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: validator.isStrongPassword,
            message: "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
        },
    },
    about: {
        type: String,
        default: "This is a default about of the user!",
        lowercase: true,
    },
    photoUrl: {
        type: String,
        default: "https://www.google.com",
        validate: {
            validator: validator.isURL,
            message: "Invalid Photo URL",
        },
    },
}, { timestamps: true });

// JWT Token Generator
userSchema.methods.getJWT = async function () {
    const user = this;
    const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET,  // Replace with process.env.JWT_SECRET in production
        { expiresIn: "7d" }
    );
    return token;
};

// Password Validation for Login
userSchema.methods.validatePassword = async function (passwordInput) {
    return bcrypt.compare(passwordInput, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;

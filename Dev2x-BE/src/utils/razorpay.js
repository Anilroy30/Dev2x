const Razorpay = require("razorpay");
require('dotenv').config();

var instance = new Razorpay({
    key_id: process.env.RAZORPAY_TEST_KEY_ID,
    key_secret: process.env.RAZORPAY_TEST_KEY_SECRET,
});

module.exports = instance;
const sendEmail = require('../utils/sendTestEmail');
const express = require("express");
const authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/user");
const {validateSignUpData} = require("../utils/validations");

authRouter.post("/signup", async (req, res) => {
    try {
        validateSignUpData(req);

        const { firstName, lastName, emailId, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);

        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash,
        });

        const savedUser = await user.save();
        const token = await savedUser.getJWT();

        await sendEmail({
          to: savedUser.emailId?.toString(),
          subject: "🎉 Welcome to Dev2x!",
          html: `
        <h2>Hi ${savedUser.firstName} 👋</h2>
        <p>Welcome to <strong>Dev2x</strong>, your new developer community home!</p>
        <p>Connect. Collaborate. Grow. 🚀</p>
        <hr>
        <p style="font-size: 12px; color: #999;">If you did not sign up for Dev2x, you can ignore this email.</p>
    `,
        });

        res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000), httpOnly: true });
        res.json({ message: "User added successfully", data: savedUser });
    } catch (err) {
    console.error("Signup error:", err);
    res.status(400).json({ message: err.message });
}
});

authRouter.post("/login", async (req, res) => {
    try{
        const {emailId, password} = req.body;

        const user = await User.findOne({emailId: emailId});

        if(!user){
            throw new Error("User not found");
        }

        const isPasswordValid = await user.validatePassword(password);

        if(isPasswordValid){
            const token = await user.getJWT();

            res.cookie("token", token, {expires: new Date(Date.now() + 8 * 3600000), httpOnly: true});
            res.send(user);
        }
        else{
            throw new Error("Invalid credentials");
        }

    }
    catch(err){
        res.status(400).send("Error: " + err.message);
    }
})

authRouter.post("/logout", async (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
    })

    res.send("Logged out successfully");
})

module.exports = authRouter;
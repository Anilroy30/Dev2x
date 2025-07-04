const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

// const jwt = require("jsonwebtoken");
const corsOptions =  {
    origin: process.env.FRONTEND_URL,
    credentials: true,
} 


app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter, profileRouter, requestRouter, userRouter);

connectDB()
    .then(() => {
        console.log("Database connected Successfully...");
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port 7777");
        })
    })
    .catch((err) => {
        console.error("Error connecting to database...");
    });
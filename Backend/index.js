const express = require('express')
const cors = require('cors')
const mongoose= require('./database');
const session = require("express-session");
const passport = require("passport");
const authRoute = require("./route/googleAuth");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.REACT_APP_PORT;

// configration
const app = express();

app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

app.use(passport.initialize());

mongoose();

app.use("/api/user", require("./route/signin"));
app.use("/api/Course", require("./route/course"));
app.use("/auth", authRoute);



app.listen(port, () => {
    console.log(`freecodecamp backend  listening on port http://localhost:${port}`)
})







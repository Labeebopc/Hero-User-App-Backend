const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv").config()
const session = require('express-session')

const { readdirSync } = require("fs")
const database = require("./config/database.js")

const app = express()

// Middlewares
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors())

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)))

// Setting up the session middleware
app.use(session({
    secret: `${process.env.SESSION_SECRET_KEY}`,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 60000
    }
}));


// database
mongoose.set("strictQuery", true);
database();

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const MONGO_URL = process.env.MONGO_URL


// dotenv.config();

mongoose.connect(
    MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true})
      .then(() => console.log( 'Database Connected' ))
      .catch(err => console.log( err ))
  
 

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/auth/register", authRoute)

app.get("/", (req, res) => {
  res.send("Welcome to homepage")
})

app.get("/users", (req, res) => {
  res.send("Welcome to users page")
})



app.listen(PORT, () => {
    console.log(`Server is ON FIYA!`)
})
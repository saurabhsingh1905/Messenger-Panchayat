const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://singhsaurabh1905:saurabh@cluster0.am1jack.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch((err) => {
    console.log("Error connecting to mongoDb", err);
  });

// app.listen(port, () => {
//   console.log("Server running on port 8000");
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const User = require("./models/user");
const Message = require("./models/message");

//ENDPOINT FOR REGISTER

app.post("/register",(req,res) =>{
  const {name,email,password,image} =req.body;
  console.log(name)

  //create a new user
  const newUser = new User ({name,email,password,image})
  console.log(newUser)

  //save user to database
  newUser.save().then(()=> {
    res.status(200).json({message:"User Registerd Successfully"})
  }).catch((err)=>{
    console.log("Error Registering The User ", err)
    res.status(500).json({message:"Error registering the User"})
  })
})
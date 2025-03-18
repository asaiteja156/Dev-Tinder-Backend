const express = require('express');
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());    // Middleware to parse the request body

// Post API - SignUp
app.post('/signup', async (req, res) => {

    // Creating a new instance of the User model
    const user = new User(req.body);

    try{
        await user.save();    // Save the user to the database - returns a Promise
        res.send("User created successfully");
    } 
    catch(err) {
        res.status(400).send("Error creating the user" + err.message);
    }
});

connectDB()
.then(() => {
  console.log("Connected to the devTinder database");
  app.listen((3000), () => {;
    console.log('Server running & Listening on port 3000')
    });
})
.catch((err) => {
  console.log("Error connecting to the database", err);
});
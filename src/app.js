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

// Get user by emailId
app.get("/user", async (req,res)=>{
    const userEmail = req.body.emailId;

    try{
        const user = await User.find({emailId: userEmail});
        if(user.length === 0){
            res.status(404).send("User not found");
        }
        else{
            res.send(user);
        }
    }
    catch(err){
        res.status(400).send("Error finding the user" + err.message);
    }
})

// Feed (Read) API - Get all users
app.get('/feed', async (req, res) => {
   
    try{
        const users = await User.find({});
        res.send(users);
    }
    catch(err){
        res.status(400).send("Error finding the user" + err.message);
    }
})

// delete API - using Id
app.delete('/user', async (req, res) => {
        const userId = req.body.userId;
        try{
            const user = await User.findByIdAndDelete({_id: userId});
            res.send("User deleted successfully");
        }
        catch(err){
            res.status(400).send("Error deleting the user" + err.message);
        }
});

// update API 
app.patch('/user', async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        await User.findByIdAndUpdate({_id: userId}, data);
        res.send("User updated successfully");
    }     
    catch(err){
        res.status(400).send("Error updating the user" + err.message);
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
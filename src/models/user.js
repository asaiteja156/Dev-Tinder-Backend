const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({       // Schema is a function on top of mongoose
        firstName : {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 20
        },
        lastName : {
            type: String
        },
        emailId : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password : {
            type: String,
            required: true
        },
        age : {
            type: Number,
            min : 18
        },
        gender : {
            type: String,
            validate(value){
                if(!["male","female","Others"].includes(value)){
                    throw new Error("Invalid");
                }
            }
        },
        photoUrl : {
            type: String,
            default: "https://geographyandyou.com/images/user-profile.png",
        },
        about: {
            type: String,
            default: "This is a default about of the user!",
        },
        skills : {
            type : [String],
        } 
    },
    {
        timestamps: true        
    }
);

// Once you create a schema, you need to create a Mongoose model
// Model is a function on top of mongoose

module.exports = mongoose.model("User", userSchema);    // ("name of the model", schema)       
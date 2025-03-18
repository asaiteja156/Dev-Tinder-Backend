const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({       // Schema is a function on top of mongoose
        firstName : {
            type: String
        },
        lastName : {
            type: String
        },
        emailId : {
            type: String
        },
        password : {
            type: String
        },
        age : {
            type: Number
        },
        gender : {
            type: String
        },    
});

// Once you create a schema, you need to create a Mongoose model
// Model is a function on top of mongoose

module.exports = mongoose.model("User", userSchema);    // ("name of the model", schema)       
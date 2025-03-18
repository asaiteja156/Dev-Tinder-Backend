const mongoose = require("mongoose");

// Connection URL
const URL = "mongodb+srv://namastedev:ISRd41ZnkVDogYew@namastenode.e75od.mongodb.net/devTinder";        // Cluster
const connectDB = async () => await mongoose.connect(URL);   // Returns a Promise


module.exports = connectDB;
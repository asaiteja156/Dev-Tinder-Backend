const express = require('express');
const app = express();

// app.use("/",(req, res) => {
//     console.log('This is a middleware function');
//     res.send('<h1>Hello World</h1>');
// });

app.use("/about",(req, res) => {
    console.log('This is a middleware function');
    res.send('<h1>About Us</h1>');
});

app.use("/",(req, res) => {
    console.log('This is a middleware function');
    res.send('<h1>Hello World</h1>');
});

app.listen((3000), () => {;
    console.log('Server running on port 3000')
});
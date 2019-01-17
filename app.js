/*
Step 1 : Require the dependencies
Step 2 : Initialize the app
Step 3 : Dedicate port
Step 4 : Tell express app to listen on that port
*/



// Step 1
const express = require('express');
const bodyParser = require('body-parser');

// Import Routes
const product = require('./routes/product.route');

// Step 2
const app = express();
app.use('/products', product);

// Step 3
let port = 1234;

// Step 4
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
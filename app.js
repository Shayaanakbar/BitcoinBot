const express = require('express');
const bodyParser = require('body-parser');

// item routes

// initialize express instance
const app = express();
app.use(bodyParser.json());

// endpoint routes

// Server running
app.listen('5000', () => {
    console.log('Server started on port 5000')
})

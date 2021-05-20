const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/router');

// initialize express instance
const app = express();

// Define the port
const PORT = process.env.PORT || 5000;
app.use(express.json());

// Testing initial endpont
app.get("/", (req, res) => {        // Health check endpoint (optional)
    return res.json({ status: "Up and running" });
});

// Routes requests
app.use(routes);

// App requests
app.listen(PORT, () => {
    console.log("Server started listening!")
});

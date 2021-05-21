// express middleware
const express = require('express');

// Database
const db = require('./db/db')

// Test DB
db.authenticate()
    .then(() => console.log("Database Connected..."))
    .catch(err => console.log('Error ' + err))

// Price Controllers
const CurrentPriceController = require("./controllers/CurrentPriceController")

// Aert Controllers
const sendAlertsController = require("./controllers/sendAlertsController")

// initialize express instance
const app = express();

// Define the port
const PORT = process.env.PORT || 5000;
app.use(express.json());

// App requests
app.listen(PORT, async () => {
    // previousPrice
    let previousPrice = await CurrentPriceController().getCurrentPrice()
    // temporary price to get the current number
    let tempPrice = parseInt(previousPrice.data.BTC)
    console.log(tempPrice)
    console.log("Server started listening!")
    const fetchOnInterval = async () => {
        // do next request
        const currentPrice = await CurrentPriceController().getCurrentPrice();
        // current temp Price turned into a Number
        let currentTempPrice = parseInt(currentPrice.data.BTC)
        console.log(currentTempPrice);
        if (tempPrice < currentTempPrice * .9999) { // .01% variance decreasing
            console.log(".9999 email sent")
            sendAlertsController()
        } else {
            console.log(".9999 email cannot be sent yet!")
        }
        if (tempPrice > currentTempPrice * 1.0001) { // .01% variance increasing
            console.log(".0001 email sent")
            sendAlertsController()
        } else {
            console.log("1.0001 email cannot be sent yet!")
        }
        setTimeout(fetchOnInterval, 5000)
        console.log("its been 5 seconds")
    }
    fetchOnInterval();
});

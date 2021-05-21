// express middleware
const express = require('express');

// Price Controllers
const CurrentPriceController = require("./controllers/controllers")

// initialize express instance
const app = express();

// Define the port
const PORT = process.env.PORT || 5000;
app.use(express.json());

// App requests
app.listen(PORT, () => {
    let previousPrice = null;
    console.log("Server started listening!")
    const fetchOnInterval = async () => {
        // what was my previous price
        // if previous price was 0.01 changed then send message
        // do next request
        const currentPrice = await CurrentPriceController().getCurrentPrice();
        console.log(currentPrice)
        setTimeout(fetchOnInterval, 5000)
        console.log("its been 5 seconds")
    }
    fetchOnInterval();
});


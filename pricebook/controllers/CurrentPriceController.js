// API fetching current price
const  { fetchCurrentPrice } = require("../helpers/currentPrice")

// Current price controllers
const CurrentPriceController = () => {
    return {
        getCurrentPrice: async () => {
            try {
                let prices = await fetchCurrentPrice();
                // make this return price fetched
                return prices
            } catch (error) {
                console.log(error)
            }
        },
    }
}

module.exports = CurrentPriceController;

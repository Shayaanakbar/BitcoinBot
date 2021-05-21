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
        }
    }
}

// Create Alerts Controller
const getAlertsController = async () => {

}

module.exports = CurrentPriceController;

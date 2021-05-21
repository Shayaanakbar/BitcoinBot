const { errorObject } = require('../config');
const  { fetchCurrentPrice } = require("../helpers/currentPrice")

// Current price controllers
const CurrentPriceController = () => {
    return {
        getCurrentPrice: async (req, res) => {
            try {
                let prices = await fetchCurrentPrice();
                // if (prices.error) return res.status(500).json(errorObject);
                // return res.status(200).json({
                //     success: true,
                //     price_data: prices.data,
                // });

                // make this return price fetched
            } catch (error) {
                // return res.status(500).json(errorObject);

            }
        }
    }
}

module.exports = CurrentPriceController;

const axios = require("axios");

// Fetch Current Price from Uphold API
exports.fetchCurrentPrice = async () => {
    try {
        let url = "https://api.uphold.com/v0/ticker/BTCUSD";
        const response = await axios.get(url);
        return {
            data: {
                BTC: response.data.bid,
            }
        }
    } catch (error) {
        return {
            error: true
        };
    }
}

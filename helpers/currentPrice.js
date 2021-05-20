const axios = require("axios");

module.exports = async () => {
    try {
            let url = "https://api.uphold.com/v0/ticker/BTCUSD";
            const response = await axios.get(url);
            return {
                error: false,
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

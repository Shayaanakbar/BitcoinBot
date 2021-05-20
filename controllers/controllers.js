exports.CurrentPrice = async (req, res) => {
    try {
        let prices = await currentPrice();
        if (prices.error) return res.status(500).json(errorObject);
        return res.status(200).json({
            success: true,
            price_data: prices.data,
        });
    } catch (error) {
        return res.status(500).json(errorObject);
    }
};

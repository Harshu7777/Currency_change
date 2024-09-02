const asyncHandler = require('express-async-handler');
const axios = require('axios');
const Conversion = require('../models/conversionModel');

const currencyConverter = asyncHandler(async (req, res) => {
  const { from, to, amount } = req.body;

  try {
    const response = await axios.get(`${process.env.API_URL}/${process.env.API_KEY}/latest/${from}`);

    const rate = response.data.conversion_rates[to];

    if (!rate) {
      res.status(404);
      throw new Error(`Currency not supported: Unable to get exchange rate from ${from} to ${to}`);
    }

    const result = rate * amount;

    const conversion = new Conversion({
      user: req.user._id, // Link conversion to the logged-in user
      from,
      to,
      amount,
      result,
    });
    await conversion.save();

    res.status(200).json({ success: true, from, to, amount, result });

  } catch (error) {
    console.error('Currency conversion failed:', error.message);
    res.status(500).json({
      success: false,
      message: 'Currency conversion failed. Please try again later.',
      error: error.message,
    });
  }
});

module.exports = { currencyConverter };

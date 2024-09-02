const express = require('express');
const { currencyConverter } = require('../controllers/conversionController');
const { protect } = require('../middlewares/protectMiddleware');

const router = express.Router();

router.post('/convert', protect, currencyConverter);

module.exports = router;

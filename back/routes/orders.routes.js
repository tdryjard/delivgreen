const express = require('express');
const orders = require('../controllers/orders.controller');

const router = express.Router();

router.get('/', orders.findOrders);

// Create order
router.post('/', orders.create);

module.exports = router;

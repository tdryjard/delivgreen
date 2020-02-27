const express = require('express');
const orders = require('../controllers/orders.controller');

const router = express.Router();

router.get('/', orders.findOrders);

router.put('/:orderId', orders.updateOrder);

module.exports = router;

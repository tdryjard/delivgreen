const express = require('express');
const orders = require('../controllers/orders.controller');

const router = express.Router();

router.get('/', orders.findOrders);

router.put('/:orderId', orders.updateOrder);

router.get('/myOrders/:userId', orders.findMyOrders);

module.exports = router;

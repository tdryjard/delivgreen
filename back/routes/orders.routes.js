const express = require('express');
const orders = require('../controllers/orders.controller');

const router = express.Router();

router.get('/', orders.findOrders);
router.get('/:userId/historique', orders.findOrdersByUser);

module.exports = router;

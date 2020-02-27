const express = require('express');
const createOrder = require('../controllers/createOrder.controller');

const router = express.Router();

router.post('/order', createOrder.createOrders);
router.post('/addressStart', createOrder.createAddressStart);
router.post('/addressEnd', createOrder.createAddressEnd);

module.exports = router;

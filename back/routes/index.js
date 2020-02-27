const express = require('express');
const orders = require('./orders.routes');
const createOrder = require('./createOrder.route');

const users = require('./users.route');

const router = express.Router();

router.use('/users', users);

router.use('/orders', orders);

router.use('/createOrder', createOrder);

module.exports = router;

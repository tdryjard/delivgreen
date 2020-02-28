const express = require('express');
const orders = require('./orders.routes');
const adhesion = require('./adhesion.routes');
const createOrder = require('./createOrder.route');
const admin = require('./admin.route');

const users = require('./users.route');

const router = express.Router();

router.use('/users', users);

router.use('/orders', orders);

router.use('/adhesion', adhesion);

router.use('/createOrder', createOrder);

router.use('/admin', admin);

module.exports = router;

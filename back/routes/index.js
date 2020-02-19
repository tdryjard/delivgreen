const express = require('express');
const orders = require('./orders.routes');

const users = require('./users.route');

const router = express.Router();

router.use('/users', users);

router.use('/orders', orders);

module.exports = router;

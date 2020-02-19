const express = require('express');
const orders = require('./orders.routes');

const users = require('./users.routes');

const router = express.Router();

router.use('/users', users);

router.use('/orders', orders);

module.exports = router;

const express = require('express');
const orders = require('./orders.routes');
const users = require('./users.routes');

const router = express.Router();

router.use('/orders', orders);
router.use('/users', users);

module.exports = router;

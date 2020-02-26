const express = require('express');
const orders = require('./orders.routes');
const adhesion = require('./adhesion.routes');
const users = require('./users.route');

const router = express.Router();

router.use('/users', users);

router.use('/orders', orders);

router.use('/adhesion', adhesion);

module.exports = router;

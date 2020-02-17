const express = require('express');
const users = require('../controllers/users.controllers');

const router = express.Router();

router.get('/infos/:userId', users.findUserInfo);

module.exports = router;

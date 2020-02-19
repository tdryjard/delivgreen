const express = require('express');
const users = require('../controllers/users.controllers');

const router = express.Router();

router.get('/infos/pro/:userId', users.findProfessionalInfo);

router.get('/infos/deliv/:userId', users.findDeliverInfo);

router.get('/infos/part/:userId', users.findPartInfo);

module.exports = router;

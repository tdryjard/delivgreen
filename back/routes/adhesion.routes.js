const express = require('express');
const adhesion = require('../controllers/adhesion.controller.js');

const router = express.Router();

router.post('/delivery-man', adhesion.createNewDeliveryMan);

router.post('/professional', adhesion.createNewProfessional);

router.put('/:userId', adhesion.updateUserAdhesion);

module.exports = router;

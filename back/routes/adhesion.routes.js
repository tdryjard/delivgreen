const express = require('express');
const adhesion = require('../controllers/adhesion.controller.js');

const router = express.Router();

// Create adhesions
router.post('/', adhesion.createNewAdhesion);

// Read all adhesion
router.get('/', adhesion.findAllAdhesion);

// Read adhesions by ID
router.get('/:adhesion_id', adhesion.findByIdAdhesion);

// Delete adhesions
router.delete('/:adhesion_id', adhesion.deleteAdhesion);

module.exports = router;

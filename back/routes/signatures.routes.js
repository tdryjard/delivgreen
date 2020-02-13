const express = require('express');
const signatures = require('../controllers/signature_controller');

// Initialize a router
const router = express.Router();

// New product
router.post('/', signatures.create);

// Show all products
router.get('/', signatures.findAll);

// Update the product
// router.put('/:signatureId', signatures.update);

// Delete product
// router.delete('/:signatureId', signatures.delete);

module.exports = router;

const express = require('express');
const router = express.Router();

// Require the controllers which we did not create yet
const product_controller = require('../controllers/product.controller');

// Test url to check all files are communicating correctly
router.get('/test', product_controller.test);

module.exports = router;
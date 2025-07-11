const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const auth = require('../middleware/authMiddleware');

// Public: Add a new contact message
router.post('/', contactController.submitContact);

// Admin: Get all contact messages
router.get('/', auth, contactController.getAllMessages);

module.exports = router;

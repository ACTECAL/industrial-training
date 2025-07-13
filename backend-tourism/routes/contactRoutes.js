const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contacts - add a new contact
router.post('/', contactController.addContact);

// GET /api/contacts - get all contacts
router.get('/', contactController.getAllContacts);

module.exports = router; 
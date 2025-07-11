const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');
const auth = require('../middleware/authMiddleware');

// Public route for fetching destinations
router.get('/public', destinationController.getAll);

// All routes require admin (for simplicity)
router.get('/', auth, destinationController.getAll);
router.post('/', auth, destinationController.create);
router.put('/:id', auth, destinationController.update);
router.delete('/:id', auth, destinationController.delete);

module.exports = router;

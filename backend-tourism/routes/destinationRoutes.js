const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// POST /api/destinations - create a new destination
router.post('/', destinationController.createDestination);

// GET /api/destinations - get all destinations
router.get('/', destinationController.getAllDestinations);

// PUT /api/destinations/:id - update a destination
router.put('/:id', destinationController.updateDestination);

// DELETE /api/destinations/:id - delete a destination
router.delete('/:id', destinationController.deleteDestination);

// TEMP: Add a sample destination for setup/debugging
router.post('/sample', destinationController.addSampleDestination);

// TEMP: Add Om Parvat and Panchachuli destinations for setup/debugging
router.post('/sample-bulk', destinationController.addSampleDestinationsBulk);

module.exports = router; 
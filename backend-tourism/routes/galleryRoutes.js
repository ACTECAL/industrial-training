const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// POST /api/gallery - add a new image
router.post('/', galleryController.addImage);

// GET /api/gallery - get all images
router.get('/', galleryController.getAllImages);

// DELETE /api/gallery/:id - delete an image
router.delete('/:id', galleryController.deleteImage);

module.exports = router; 
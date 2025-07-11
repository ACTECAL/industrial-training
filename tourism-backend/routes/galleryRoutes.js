const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const multer = require('multer');
const path = require('path');

// Uploads folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.get('/', galleryController.getAllImages);
router.post('/', upload.single('image'), galleryController.addImage);
router.delete('/:id', galleryController.deleteImage);

module.exports = router; 
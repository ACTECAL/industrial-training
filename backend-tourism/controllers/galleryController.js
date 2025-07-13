const galleryModel = require('../models/galleryModel');

// Add a new image
async function addImage(req, res) {
  try {
    const db = req.app.locals.db;
    const { title, img } = req.body;
    if (!img) return res.status(400).json({ error: 'Image URL is required' });
    await galleryModel.addImage(db, { title, img });
    res.status(201).json({ message: 'Image added' });
  } catch (err) {
    console.error('[GALLERY ADD ERROR]', err);
    res.status(500).json({ error: 'Failed to add image', details: err.message });
  }
}

// Get all images
async function getAllImages(req, res) {
  try {
    const db = req.app.locals.db;
    const images = await galleryModel.getAllImages(db);
    if (Array.isArray(images) && images.length && images[0].id !== undefined) {
      res.json(images);
    } else if (Array.isArray(images) && images[0] && Array.isArray(images[0])) {
      res.json(images[0]);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.error('[GALLERY FETCH ERROR]', err);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}

// Delete an image
async function deleteImage(req, res) {
  try {
    const db = req.app.locals.db;
    const { id } = req.params;
    await galleryModel.deleteImage(db, id);
    res.json({ message: 'Image deleted' });
  } catch (err) {
    console.error('[GALLERY DELETE ERROR]', err);
    res.status(500).json({ error: 'Failed to delete image', details: err.message });
  }
}

module.exports = {
  addImage,
  getAllImages,
  deleteImage,
}; 
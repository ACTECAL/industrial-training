const db = require('../config/db');
const path = require('path');
const fs = require('fs');

exports.getAllImages = (req, res) => {
  db.query('SELECT * FROM gallery_images ORDER BY uploaded_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addImage = (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const imageUrl = '/uploads/' + req.file.filename;
  db.query('INSERT INTO gallery_images (image_url) VALUES (?)', [imageUrl], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, image_url: imageUrl });
  });
};

exports.deleteImage = (req, res) => {
  const { id } = req.params;
  db.query('SELECT image_url FROM gallery_images WHERE id = ?', [id], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: 'Image not found' });
    const imagePath = path.join(__dirname, '..', results[0].image_url);
    db.query('DELETE FROM gallery_images WHERE id = ?', [id], (err) => {
      if (err) return res.status(500).json({ error: err });
      // Delete file from disk
      fs.unlink(imagePath, () => {});
      res.json({ success: true });
    });
  });
}; 
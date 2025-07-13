const db = require('../db');

// Ensure gallery table exists
async function ensureGalleryTable(db) {
  return new Promise((resolve, reject) => {
    db.query(
      `CREATE TABLE IF NOT EXISTS gallery (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255),
        img VARCHAR(255) NOT NULL
      )`,
      (err) => (err ? reject(err) : resolve())
    );
  });
}

// Add a new image
async function addImage(db, { title, img }) {
  await ensureGalleryTable(db);
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO gallery (title, img) VALUES (?, ?)`,
      [title, img],
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}

// Get all images
async function getAllImages(db) {
  await ensureGalleryTable(db);
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM gallery`, (err, results) => (err ? reject(err) : resolve(results)));
  });
}

// Delete an image
async function deleteImage(db, id) {
  await ensureGalleryTable(db);
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM gallery WHERE id=?`, [id], (err, result) => (err ? reject(err) : resolve(result)));
  });
}

module.exports = {
  ensureGalleryTable,
  addImage,
  getAllImages,
  deleteImage,
}; 
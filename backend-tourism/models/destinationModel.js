const db = require('../db');

// Ensure destinations table exists
async function ensureDestinationTable(db) {
  return new Promise((resolve, reject) => {
    db.query(
      `CREATE TABLE IF NOT EXISTS destinations (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        img VARCHAR(255),
        package_label VARCHAR(100),
        package_duration VARCHAR(100),
        package_price VARCHAR(100)
      )`,
      (err) => (err ? reject(err) : resolve())
    );
  });
}

// Create a new destination
async function createDestination(db, { name, description, img, package_label, package_duration, package_price }) {
  await ensureDestinationTable(db);
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO destinations (name, description, img, package_label, package_duration, package_price) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, description, img, package_label, package_duration, package_price],
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}

// Get all destinations
async function getAllDestinations(db) {
  await ensureDestinationTable(db);
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM destinations`, (err, results) => (err ? reject(err) : resolve(results)));
  });
}

// Update a destination
async function updateDestination(db, id, { name, description, img, package_label, package_duration, package_price }) {
  await ensureDestinationTable(db);
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE destinations SET name=?, description=?, img=?, package_label=?, package_duration=?, package_price=? WHERE id=?`,
      [name, description, img, package_label, package_duration, package_price, id],
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}

// Delete a destination
async function deleteDestination(db, id) {
  await ensureDestinationTable(db);
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM destinations WHERE id=?`, [id], (err, result) => (err ? reject(err) : resolve(result)));
  });
}

module.exports = {
  ensureDestinationTable,
  createDestination,
  getAllDestinations,
  updateDestination,
  deleteDestination,
}; 
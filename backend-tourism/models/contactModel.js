const db = require('../db');

// Ensure contacts table exists
async function ensureContactTable(db) {
  return new Promise((resolve, reject) => {
    db.query(
      `CREATE TABLE IF NOT EXISTS contacts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => (err ? reject(err) : resolve())
    );
  });
}

// Add a new contact
async function addContact(db, { name, email, message }) {
  await ensureContactTable(db);
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)` ,
      [name, email, message],
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}

// Get all contacts
async function getAllContacts(db) {
  await ensureContactTable(db);
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM contacts ORDER BY created_at DESC`, (err, results) => (err ? reject(err) : resolve(results)));
  });
}

module.exports = {
  ensureContactTable,
  addContact,
  getAllContacts,
}; 
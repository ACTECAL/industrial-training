const connectToDatabase = require('../db');
const bcrypt = require('bcrypt');

// Ensure admins table exists
async function ensureAdminTable() {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query(`CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      token TEXT
    )`, (err, result) => {
      if (err) return reject(err);
      db.query('ALTER TABLE admins ADD COLUMN IF NOT EXISTS name VARCHAR(255)', () => {
        db.query('ALTER TABLE admins ADD COLUMN IF NOT EXISTS email VARCHAR(255) UNIQUE', () => {
          db.query('ALTER TABLE admins ADD COLUMN IF NOT EXISTS token TEXT', () => resolve(result));
        });
      });
    });
  });
}

async function createAdmin(name, email, passwordHash) {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO admins (name, email, password) VALUES (?, ?, ?)', [name, email, passwordHash], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

async function findAdminByEmail(email) {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM admins WHERE email = ?', [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
}

async function updateAdminToken(email, token) {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('UPDATE admins SET token = ? WHERE email = ?', [token, email], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = {
  ensureAdminTable,
  createAdmin,
  findAdminByEmail,
  updateAdminToken
}; 
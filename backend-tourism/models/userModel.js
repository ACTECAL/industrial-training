const connectToDatabase = require('../db');
const bcrypt = require('bcrypt');

// Ensure users table exists with name, email, password, token columns
async function ensureUserTable() {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query(`CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      token TEXT
    )`, (err, result) => {
      if (err) return reject(err);
      db.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS name VARCHAR(255)', () => {
        db.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS email VARCHAR(255) UNIQUE', () => {
          db.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS token TEXT', () => resolve(result));
        });
      });
    });
  });
}

async function createUser(name, email, passwordHash) {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, passwordHash], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

async function findUserByEmail(email) {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
}

async function updateUserToken(email, token) {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('UPDATE users SET token = ? WHERE email = ?', [token, email], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

// Ensure testimonials table exists
async function ensureTestimonialsTable() {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query(`CREATE TABLE IF NOT EXISTS testimonials (
      id INT AUTO_INCREMENT PRIMARY KEY,
      userName VARCHAR(255),
      userEmail VARCHAR(255),
      rating INT,
      review TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

async function addTestimonial(userName, userEmail, rating, review) {
  await ensureTestimonialsTable();
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO testimonials (userName, userEmail, rating, review) VALUES (?, ?, ?, ?)', [userName, userEmail, rating, review], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

async function getTestimonials() {
  await ensureTestimonialsTable();
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('SELECT id, userName, userEmail, rating, review, createdAt FROM testimonials ORDER BY createdAt DESC', (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  ensureUserTable,
  createUser,
  findUserByEmail,
  updateUserToken,
  ensureTestimonialsTable,
  addTestimonial,
  getTestimonials
}; 
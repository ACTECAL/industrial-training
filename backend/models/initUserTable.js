const db = require('../db');

async function initUserTable() {
  try {
    await db.query(`CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )`);
    console.log('✅ Users table is ready.');
  } catch (err) {
    console.error('❌ Failed to create users table:', err.message);
  }
}

initUserTable();

const connectToDatabase = require('./db');

// Example: Get all users
async function getAllUsers() {
  const db = await connectToDatabase();
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

module.exports = {
  getAllUsers,
  // Add more functions as needed
}; 
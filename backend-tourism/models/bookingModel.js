const db = require('../db');

// Ensure bookings table exists
async function ensureBookingTable(db) {
  return new Promise((resolve, reject) => {
    db.query(
      `CREATE TABLE IF NOT EXISTS bookings (
        id INT PRIMARY KEY AUTO_INCREMENT,
        destination VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        role VARCHAR(50) NOT NULL,
        people INT NOT NULL,
        date VARCHAR(50) NOT NULL,
        confirmed TINYINT DEFAULT 0,
        rejected TINYINT DEFAULT 0
      )`,
      (err) => (err ? reject(err) : resolve())
    );
  });
}

// Add a new booking
async function createBooking(db, { destination, name, email, phone, role, people, date }) {
  await ensureBookingTable(db);
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO bookings (destination, name, email, phone, role, people, date) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [destination, name, email, phone, role, people, date],
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}

// Get all bookings
async function getAllBookings(db) {
  await ensureBookingTable(db);
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM bookings`, (err, results) => (err ? reject(err) : resolve(results)));
  });
}

// Update booking status
async function updateBookingStatus(db, id, status) {
  // status: 'confirmed' or 'rejected'
  let updateField = status === 'confirmed' ? 'confirmed' : 'rejected';
  return new Promise((resolve, reject) => {
    db.query(
      `UPDATE bookings SET ${updateField} = 1 WHERE id = ?`,
      [id],
      (err, result) => (err ? reject(err) : resolve(result))
    );
  });
}

// Delete a booking
async function deleteBooking(db, id) {
  await ensureBookingTable(db);
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM bookings WHERE id=?`, [id], (err, result) => (err ? reject(err) : resolve(result)));
  });
}

module.exports = {
  ensureBookingTable,
  createBooking,
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
}; 
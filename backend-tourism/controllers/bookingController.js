const bookingModel = require('../models/bookingModel');

// Create a new booking
async function createBooking(req, res) {
  try {
    const db = req.app.locals.db;
    const { destination, name, email, phone, role, people, date } = req.body;
    if (!destination || !name || !email || !phone || !role || !people || !date) {
      return res.status(400).json({ error: 'All fields are required', received: req.body });
    }
    await bookingModel.createBooking(db, { destination, name, email, phone, role, people, date });
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    console.error('[BOOKING CREATE ERROR]', err);
    res.status(500).json({ error: 'Failed to create booking', details: err.message, stack: err.stack });
  }
}

// Get all bookings
async function getAllBookings(req, res) {
  try {
    const db = req.app.locals.db;
    const bookings = await bookingModel.getAllBookings(db);
    // MySQL2 sometimes returns [rows, fields], ensure only rows are sent
    if (Array.isArray(bookings) && bookings.length && bookings[0].id !== undefined) {
      res.json(bookings);
    } else if (Array.isArray(bookings) && bookings[0] && Array.isArray(bookings[0])) {
      res.json(bookings[0]);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.error('[BOOKING FETCH ERROR]', err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
}

// Update booking status
async function updateBookingStatus(req, res) {
  try {
    const db = req.app.locals.db;
    const { id } = req.params;
    const { status } = req.body; // 'confirmed' or 'rejected'
    if (!['confirmed', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    await bookingModel.updateBookingStatus(db, id, status);
    res.json({ message: `Booking ${status}` });
  } catch (err) {
    console.error('[BOOKING STATUS UPDATE ERROR]', err);
    res.status(500).json({ error: 'Failed to update booking status', details: err.message });
  }
}

// Delete a booking
async function deleteBooking(req, res) {
  try {
    const db = req.app.locals.db;
    const { id } = req.params;
    await bookingModel.deleteBooking(db, id);
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    console.error('[BOOKING DELETE ERROR]', err);
    res.status(500).json({ error: 'Failed to delete booking', details: err.message });
  }
}

module.exports = {
  createBooking,
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
}; 
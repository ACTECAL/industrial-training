const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST /api/bookings - create a new booking
router.post('/', bookingController.createBooking);

// GET /api/bookings - get all bookings
router.get('/', bookingController.getAllBookings);

// PATCH /api/bookings/:id - update booking status
router.patch('/:id', bookingController.updateBookingStatus);

// DELETE /api/bookings/:id - delete a booking
router.delete('/:id', bookingController.deleteBooking);

module.exports = router; 
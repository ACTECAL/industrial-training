const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleware');

// POST /api/bookings (user)
router.post('/', auth, bookingController.createBooking);

// GET /api/bookings (admin)
router.get('/', auth, bookingController.getAllBookings);

// GET /api/bookings/my (user)
router.get('/my', auth, bookingController.getMyBookings);

// DELETE /api/bookings/:id (admin or owner)
router.delete('/:id', auth, bookingController.deleteBooking);

// PATCH /api/bookings/:id/status (admin)
router.patch('/:id/status', auth, bookingController.updateStatus);

module.exports = router;

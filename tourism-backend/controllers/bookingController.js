const mailer = require('../utils/mailer');
const db = require('../config/db');


// Book Now (user booking)
exports.createBooking = (req, res) => {
  const { destination_id, hotel_id, booking_date, guests, name, email, phone, message } = req.body;
  const user_id = req.user ? req.user.id : null;
  if (!destination_id || !booking_date || !guests || !name || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const sql = `INSERT INTO bookings (destination_id, hotel_id, booking_date, guests, name, email, phone, message, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [destination_id, hotel_id, booking_date, guests, name, email, phone, message, user_id];
  console.log('Booking insert values:', values);
  db.query(sql, values, async (err, result) => {
    if (err) {
      console.error('Booking failed:', err);
      return res.status(500).json({ message: 'Booking failed', error: err.message });
    }
    console.log(`Booking created: ${name} (${email}), Destination: ${destination_id}, Hotel: ${hotel_id || 'N/A'}`);
    // Send email to user and admin
    try {
      await mailer.sendBookingEmail(email, 'Booking Received', `Your booking for destination ${destination_id} is received.`);
      await mailer.sendBookingEmail(process.env.EMAIL_USER, 'New Booking', `Booking by ${name} (${email}) for destination ${destination_id}.`);
    } catch (e) { console.error('Email error:', e.message); }
    res.json({ success: true, booking_id: result.insertId });
  });
};

// Admin: Get all bookings
exports.getAllBookings = (req, res) => {
  const sql = `
    SELECT b.*, d.title AS destination_name, h.name AS hotel_name
    FROM bookings b
    LEFT JOIN destinations d ON b.destination_id = d.id
    LEFT JOIN hotels h ON b.hotel_id = h.id
    ORDER BY b.created_at DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
};

// User: Get my bookings
exports.getMyBookings = (req, res) => {
  const user_id = req.user.id;
  const sql = `
    SELECT b.*, d.title AS destination_name, h.name AS hotel_name
    FROM bookings b
    LEFT JOIN destinations d ON b.destination_id = d.id
    LEFT JOIN hotels h ON b.hotel_id = h.id
    WHERE b.user_id = ?
    ORDER BY b.created_at DESC
  `;
  db.query(sql, [user_id], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
};

// Cancel/Delete booking (admin or owner)
exports.deleteBooking = (req, res) => {
  const booking_id = req.params.id;
  const user = req.user;
  // Only allow if admin or booking owner
  db.query('SELECT * FROM bookings WHERE id = ?', [booking_id], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ message: 'Booking not found' });
    const booking = results[0];
    if (user.role !== 'admin' && booking.user_id !== user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    db.query('DELETE FROM bookings WHERE id = ?', [booking_id], (err2) => {
      if (err2) return res.status(500).json({ message: 'Delete failed' });
      res.json({ success: true });
    });
  });
};

// Admin: Update booking status
exports.updateStatus = (req, res) => {
  const booking_id = req.params.id;
  const { status } = req.body;
  if (!['pending','confirmed','cancelled'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }
  db.query('UPDATE bookings SET status = ? WHERE id = ?', [status, booking_id], async (err) => {
    if (err) return res.status(500).json({ message: 'Update failed' });
    // Optionally send email on status change
    try {
      // Get booking email
      db.query('SELECT email FROM bookings WHERE id = ?', [booking_id], async (e2, r2) => {
        if (!e2 && r2.length > 0) {
          await mailer.sendBookingEmail(r2[0].email, 'Booking Status Updated', `Your booking status is now: ${status}`);
        }
      });
    } catch (e) { console.error('Email error:', e.message); }
    res.json({ success: true });
  });
};

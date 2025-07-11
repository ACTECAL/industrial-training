// Basic Express server setup for tourism-backend

// Basic Express server setup for tourism-backend
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Set default JWT_SECRET if not provided
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'your_jwt_secret_key_here_make_it_long_and_secure_12345';
}


// Middleware
app.use(cors());
app.use(express.json());

// Auth routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Booking routes
const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

// Destination routes (after app is defined)
const destinationRoutes = require('./routes/destinationRoutes');
app.use('/api/destinations', destinationRoutes);

// Contact routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// Gallery routes
const galleryRoutes = require('./routes/galleryRoutes');
app.use('/api/gallery', galleryRoutes);
app.use('/uploads', express.static('uploads'));

// Test route
app.get('/', (req, res) => {
  res.send('Tourism backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API: http://localhost:${PORT}`);
});

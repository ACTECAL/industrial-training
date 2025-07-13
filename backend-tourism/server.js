const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');
const { getAllUsers } = require('./dataService');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contacts', contactRoutes);

connectToDatabase().then((db) => {
  app.locals.db = db;
  console.log('Database connection established. You can now make queries.');

  // Test endpoint
  app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' });
  });

  app.get('/', (req, res) => {
    res.send('Backend is running!');
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to database. Server not started.');
}); 
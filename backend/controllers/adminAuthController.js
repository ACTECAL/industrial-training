const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getUserModel = require('../models/userModel');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

module.exports = {
  // Admin signup
  signup: async (req, res) => {
    try {
      const User = await getUserModel();
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
      // Check if user already exists
      const existing = await User.findOne({ where: { email } });
      if (existing) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
      }
      const hashed = await bcrypt.hash(password, 10);
      const admin = await User.create({ name, email, password: hashed, isAdmin: true });
      res.json({ success: true, message: 'Admin registered successfully' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Signup failed', error: err.message });
    }
  },

  // Admin login
  login: async (req, res) => {
    try {
      const User = await getUserModel();
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
      const admin = await User.findOne({ where: { email, isAdmin: true } });
      if (!admin) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
      const match = await bcrypt.compare(password, admin.password);
      if (!match) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: admin.id, isAdmin: true }, JWT_SECRET, { expiresIn: '1d' });
      res.json({ success: true, token, admin: { id: admin.id, name: admin.name, email: admin.email } });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Login failed', error: err.message });
    }
  }
};

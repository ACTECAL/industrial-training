const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Signup
exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' });
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length > 0) return res.status(409).json({ message: 'Email already exists' });
    const hashed = bcrypt.hashSync(password, 10);
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashed], (err2) => {
      if (err2) return res.status(500).json({ message: 'Signup failed' });
      console.log(`User signup: ${email}`);
      res.status(201).json({ message: 'Signup successful' });
    });
  });
};

// User Login
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'All fields required' });
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    const user = results[0];
    if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, email: user.email, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log(`User login: ${email}`);
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
};

// Get User Profile
exports.getUserProfile = (req, res) => {
  const userId = req.user.id;
  db.query('SELECT id, name, email, created_at FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(results[0]);
  });
};

// Update User Profile
exports.updateUserProfile = (req, res) => {
  const userId = req.user.id;
  const { name, email } = req.body;
  
  if (!name || !email) return res.status(400).json({ message: 'Name and email are required' });
  
  // Check if email is already taken by another user
  db.query('SELECT id FROM users WHERE email = ? AND id != ?', [email, userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length > 0) return res.status(409).json({ message: 'Email already exists' });
    
    // Update user profile
    db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, userId], (err2) => {
      if (err2) return res.status(500).json({ message: 'Update failed' });
      console.log(`User profile updated: ${email}`);
      res.json({ message: 'Profile updated successfully' });
    });
  });
};

// Change Password
exports.changePassword = (req, res) => {
  const userId = req.user.id;
  const { currentPassword, newPassword } = req.body;
  
  if (!currentPassword || !newPassword) return res.status(400).json({ message: 'Current and new password are required' });
  
  // Get current user password
  db.query('SELECT password FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    
    const user = results[0];
    if (!bcrypt.compareSync(currentPassword, user.password)) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }
    
    // Hash new password and update
    const hashed = bcrypt.hashSync(newPassword, 10);
    db.query('UPDATE users SET password = ? WHERE id = ?', [hashed, userId], (err2) => {
      if (err2) return res.status(500).json({ message: 'Password update failed' });
      console.log(`Password changed for user: ${userId}`);
      res.json({ message: 'Password changed successfully' });
    });
  });
};

// Admin Signup
exports.adminSignup = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' });
  db.query('SELECT * FROM admins WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length > 0) return res.status(409).json({ message: 'Email already exists' });
    const hashed = bcrypt.hashSync(password, 10);
    db.query('INSERT INTO admins (name, email, password) VALUES (?, ?, ?)', [name, email, hashed], (err2) => {
      if (err2) return res.status(500).json({ message: 'Signup failed' });
      console.log(`Admin signup: ${email}`);
      res.status(201).json({ message: 'Admin signup successful' });
    });
  });
};

// Admin Login
exports.adminLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'All fields required' });
  db.query('SELECT * FROM admins WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    const admin = results[0];
    if (!bcrypt.compareSync(password, admin.password)) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: admin.id, email: admin.email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log(`Admin login: ${email}`);
    res.json({ token, admin: { id: admin.id, name: admin.name, email: admin.email } });
  });
};

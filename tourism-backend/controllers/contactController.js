const db = require('../config/db');

// Get all contact messages
exports.getAllMessages = (req, res) => {
  db.query('SELECT * FROM contact_messages ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
};

// Add a new contact message
exports.addMessage = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  db.query('INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)', [name, email, message], (err, result) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json({ success: true, id: result.insertId });
  });
};

exports.submitContact = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'All fields required' });
  db.query('INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)', [name, email, message], (err, result) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.status(201).json({ message: 'Message submitted successfully' });
  });
};

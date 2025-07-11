const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM destinations ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
};

exports.create = (req, res) => {
  const { title, description, image, package: pkg, details } = req.body;
  if (!title) return res.status(400).json({ message: 'Title required' });
  db.query('INSERT INTO destinations (title, description, image, package, details) VALUES (?, ?, ?, ?, ?)',
    [title, description, image, pkg, details], (err, result) => {
      if (err) return res.status(500).json({ message: 'Create failed' });
      res.json({ success: true, id: result.insertId });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { title, description, image, package: pkg, details } = req.body;
  db.query('UPDATE destinations SET title=?, description=?, image=?, package=?, details=? WHERE id=?',
    [title, description, image, pkg, details, id], (err) => {
      if (err) return res.status(500).json({ message: 'Update failed' });
      res.json({ success: true });
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM destinations WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Delete failed' });
    res.json({ success: true });
  });
};

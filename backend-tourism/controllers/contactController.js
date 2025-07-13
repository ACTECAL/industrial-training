const contactModel = require('../models/contactModel');

// Add a new contact
async function addContact(req, res) {
  try {
    const db = req.app.locals.db;
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' });
    await contactModel.addContact(db, { name, email, message });
    res.status(201).json({ message: 'Contact message sent' });
  } catch (err) {
    console.error('[CONTACT ADD ERROR]', err);
    res.status(500).json({ error: 'Failed to send message', details: err.message });
  }
}

// Get all contacts
async function getAllContacts(req, res) {
  try {
    const db = req.app.locals.db;
    const contacts = await contactModel.getAllContacts(db);
    if (Array.isArray(contacts) && contacts.length && contacts[0].id !== undefined) {
      res.json(contacts);
    } else if (Array.isArray(contacts) && contacts[0] && Array.isArray(contacts[0])) {
      res.json(contacts[0]);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.error('[CONTACT FETCH ERROR]', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
}

module.exports = {
  addContact,
  getAllContacts,
}; 
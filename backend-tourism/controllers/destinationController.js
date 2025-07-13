const destinationModel = require('../models/destinationModel');

// Create a new destination
async function createDestination(req, res) {
  try {
    const db = req.app.locals.db;
    const { name, description, img, package_label, package_duration, package_price } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });
    await destinationModel.createDestination(db, { name, description, img, package_label, package_duration, package_price });
    res.status(201).json({ message: 'Destination created' });
  } catch (err) {
    console.error('[DESTINATION CREATE ERROR]', err);
    res.status(500).json({ error: 'Failed to create destination', details: err.message });
  }
}

// Get all destinations
async function getAllDestinations(req, res) {
  try {
    const db = req.app.locals.db;
    const destinations = await destinationModel.getAllDestinations(db);
    if (Array.isArray(destinations) && destinations.length && destinations[0].id !== undefined) {
      res.json(destinations);
    } else if (Array.isArray(destinations) && destinations[0] && Array.isArray(destinations[0])) {
      res.json(destinations[0]);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.error('[DESTINATION FETCH ERROR]', err);
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
}

// Update a destination
async function updateDestination(req, res) {
  try {
    const db = req.app.locals.db;
    const { id } = req.params;
    const { name, description, img, package_label, package_duration, package_price } = req.body;
    await destinationModel.updateDestination(db, id, { name, description, img, package_label, package_duration, package_price });
    res.json({ message: 'Destination updated' });
  } catch (err) {
    console.error('[DESTINATION UPDATE ERROR]', err);
    res.status(500).json({ error: 'Failed to update destination', details: err.message });
  }
}

// Delete a destination
async function deleteDestination(req, res) {
  try {
    const db = req.app.locals.db;
    const { id } = req.params;
    await destinationModel.deleteDestination(db, id);
    res.json({ message: 'Destination deleted' });
  } catch (err) {
    console.error('[DESTINATION DELETE ERROR]', err);
    res.status(500).json({ error: 'Failed to delete destination', details: err.message });
  }
}

// TEMP: Add a sample destination for setup/debugging
async function addSampleDestination(req, res) {
  try {
    const db = req.app.locals.db;
    await destinationModel.createDestination(db, {
      name: 'Aadi Kailash',
      description: 'A sacred mountain in the Himalayas, known as Chhota Kailash, offering spiritual peace and breathtaking views.',
      img: '',
      package_label: 'Tour Package',
      package_duration: '9 Days / 8 Nights',
      package_price: '₹32,000'
    });
    res.json({ message: 'Sample destination added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add sample destination', details: err.message });
  }
}

// TEMP: Add Om Parvat and Panchachuli destinations for setup/debugging
async function addSampleDestinationsBulk(req, res) {
  try {
    const db = req.app.locals.db;
    await destinationModel.createDestination(db, {
      name: 'Om Parvat',
      description: 'Famous for the natural Om symbol formed by snow, Om Parvat is a mystical destination for trekkers and pilgrims.',
      img: '/assets/slider/2.jpg',
      package_label: 'Tour Package',
      package_duration: '9 Days / 8 Nights',
      package_price: '₹28,500'
    });
    await destinationModel.createDestination(db, {
      name: 'Panchachuli',
      description: 'A group of five majestic snow-capped peaks, Panchachuli is a paradise for adventure lovers and nature enthusiasts.',
      img: '/assets/slider/3.jpg',
      package_label: 'Tour Package',
      package_duration: '8 Days / 7 Nights',
      package_price: '₹25,000'
    });
    res.json({ message: 'Om Parvat and Panchachuli added (with images)' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add sample destinations', details: err.message });
  }
}

module.exports = {
  createDestination,
  getAllDestinations,
  updateDestination,
  deleteDestination,
  addSampleDestination,
  addSampleDestinationsBulk,
}; 
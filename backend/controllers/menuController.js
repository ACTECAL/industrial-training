
const getMenuModel = require('../models/menuModel');

exports.getMenu = async (req, res) => {
  try {
    const Menu = await getMenuModel();
    const menu = await Menu.findAll();
    res.json({ success: true, foods: menu });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch menu' });
  }
};

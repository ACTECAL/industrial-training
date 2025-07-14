const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');
const Menu = require('../models/menuModel');

exports.getOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.findAll({ where: { userId } });
    // Add a status field for each order (for demo, set as 'Placed')
    const ordersWithStatus = orders.map(order => ({ ...order.toJSON(), status: order.status || 'Placed' }));
    res.json({ success: true, orders: ordersWithStatus });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
};

exports.placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItems = await Cart.findAll({ where: { userId }, include: Menu });
    if (!cartItems.length) return res.status(400).json({ message: 'Cart is empty' });
    const items = cartItems.map(item => ({
      id: item.menuId,
      name: item.Menu.name,
      price: item.Menu.price,
      quantity: item.quantity
    }));
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order = await Order.create({ userId, items, total });
    await Cart.destroy({ where: { userId } });
    res.json({ order });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to place order' });
  }
};

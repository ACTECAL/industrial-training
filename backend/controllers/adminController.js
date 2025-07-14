// Admin controller for orders, carts, and (optionally) menu management
const getOrderModel = require('../models/orderModel');
const getCartModel = require('../models/cartModel');
const getUserModel = require('../models/userModel');
const getMenuModel = require('../models/menuModel');

module.exports = {
  // Get all orders
  getAllOrders: async (req, res) => {
    try {
      const Order = await getOrderModel();
      const User = await getUserModel();
      const orders = await Order.findAll({ include: [{ model: User, attributes: ['id', 'name', 'email'] }] });
      res.json({ success: true, orders });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch orders', error: err.message });
    }
  },

  // Update order status (assumes 'status' field exists or is handled in items JSON)
  updateOrderStatus: async (req, res) => {
    try {
      const Order = await getOrderModel();
      const { orderId } = req.params;
      const { status } = req.body;
      const order = await Order.findByPk(orderId);
      if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
      // If status is a top-level field:
      if ('status' in order) {
        order.status = status;
      } else {
        // If status is inside items JSON:
        let items = order.items;
        if (Array.isArray(items)) {
          items = items.map(item => ({ ...item, status }));
          order.items = items;
        }
      }
      await order.save();
      res.json({ success: true, message: 'Order status updated' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to update order status', error: err.message });
    }
  },

  // Get all carts
  getAllCarts: async (req, res) => {
    try {
      const Cart = await getCartModel();
      const User = await getUserModel();
      const Menu = await getMenuModel();
      const carts = await Cart.findAll({ include: [User, Menu] });
      res.json({ success: true, carts });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch carts', error: err.message });
    }
  },

  // (Optional) Menu management endpoints can be added here
};

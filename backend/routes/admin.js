const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');

// Orders
router.get('/orders', adminAuth, adminController.getAllOrders);
router.put('/orders/:orderId/status', adminAuth, adminController.updateOrderStatus);

// Carts
router.get('/carts', adminAuth, adminController.getAllCarts);

// Menu (optional: for menu management)
// router.get('/menu', adminAuth, adminController.getAllMenuItems);
// router.post('/menu', adminAuth, adminController.addMenuItem);
// router.put('/menu/:menuId', adminAuth, adminController.updateMenuItem);
// router.delete('/menu/:menuId', adminAuth, adminController.deleteMenuItem);

module.exports = router;

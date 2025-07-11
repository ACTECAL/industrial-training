const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// User routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// User profile routes (protected)
router.get('/profile', authMiddleware, authController.getUserProfile);
router.put('/profile', authMiddleware, authController.updateUserProfile);
router.put('/change-password', authMiddleware, authController.changePassword);

// Admin routes
router.post('/admin/signup', authController.adminSignup);
router.post('/admin/login', authController.adminLogin);

module.exports = router;

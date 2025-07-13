const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/me', userController.me);
router.get('/testimonials', userController.getTestimonials);
router.post('/testimonials', userController.addTestimonial);

module.exports = router; 
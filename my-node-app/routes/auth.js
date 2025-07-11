const express = require('express');
const router = express.Router();
const authController = require('../routes/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);

models.exports = router;

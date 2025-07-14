const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');
const getUserModel = require('../models/userModel');

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    const User = await getUserModel();
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    console.log('✅ User registered:', email);
    // Generate JWT token
    const token = generateToken({ id: user.id, email, name });
    res.status(201).json({ success: true, message: 'Signup successful!', token });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    const User = await getUserModel();
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    console.log('✅ Login successful for:', email);
    // Generate JWT token
    const token = generateToken({ id: user.id, email, name: user.name });
    res.status(200).json({ success: true, message: 'Login successful!', token });
  } catch (err) {
    next(err);
  }
};

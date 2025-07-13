const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const JWT_SECRET = 'your_jwt_secret_key'; // Change to a strong secret in production

// Signup controller
async function signup(req, res) {
  const { name, email, password } = req.body;
  console.log(`[SIGNUP ATTEMPT] Email: ${email}`);
  if (!name || !email || !password) {
    console.log('[SIGNUP FAILED] Missing name, email or password');
    return res.status(400).json({ error: 'Name, email and password required' });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    console.log('[SIGNUP FAILED] Invalid email format');
    return res.status(400).json({ error: 'Invalid email address' });
  }
  try {
    await userModel.ensureUserTable();
    const existingEmail = await userModel.findUserByEmail(email);
    if (existingEmail) {
      console.log('[SIGNUP FAILED] Email already exists');
      return res.status(409).json({ error: 'Email already exists' });
    }
    const hash = await bcrypt.hash(password, 10);
    await userModel.createUser(name, email, hash);
    console.log('[SIGNUP SUCCESS] User created:', email);
    res.json({ message: 'Signup successful' });
  } catch (err) {
    console.log('[SIGNUP ERROR]', err);
    res.status(500).json({ error: 'Signup failed' });
  }
}

// Login controller
async function login(req, res) {
  const { login, password } = req.body; // login is now email only
  console.log(`[LOGIN ATTEMPT] Email: ${login}`);
  if (!login || !password) {
    console.log('[LOGIN FAILED] Missing email or password');
    return res.status(400).json({ error: 'Email and password required' });
  }
  try {
    await userModel.ensureUserTable();
    const user = await userModel.findUserByEmail(login);
    if (!user) {
      console.log('[LOGIN FAILED] Invalid credentials (user not found)');
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log('[LOGIN FAILED] Invalid credentials (wrong password)');
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Generate JWT token
    const token = jwt.sign({ email: user.email, id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    // Store token in DB
    await userModel.updateUserToken(user.email, token);
    console.log('[LOGIN SUCCESS] User logged in:', login, 'Token:', token);
    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.log('[LOGIN ERROR]', err);
    res.status(500).json({ error: 'Login failed' });
  }
}

// Get current user profile from token
async function me(req, res) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await userModel.findUserByEmail(decoded.email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Never return password or token
    const { password, token: userToken, ...userData } = user;
    res.json(userData);
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// Get all testimonials
async function getTestimonials(req, res) {
  try {
    const testimonials = await userModel.getTestimonials();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
}

// Add a testimonial (login required)
async function addTestimonial(req, res) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await userModel.findUserByEmail(decoded.email);
    if (!user) return res.status(401).json({ error: 'User not found' });
    const { rating, review } = req.body;
    if (!rating || !review) return res.status(400).json({ error: 'Rating and review required' });
    await userModel.addTestimonial(user.name, user.email, rating, review);
    res.json({ message: 'Testimonial added' });
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = { signup, login, me, getTestimonials, addTestimonial }; 
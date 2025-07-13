const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminModel = require('../models/adminModel');

const JWT_SECRET = 'your_jwt_secret_key'; // Change to a strong secret in production

// Admin Signup
async function signup(req, res) {
  const { name, email, password } = req.body;
  console.log(`[ADMIN SIGNUP ATTEMPT] Email: ${email}`);
  if (!name || !email || !password) {
    console.log('[ADMIN SIGNUP FAILED] Missing name, email or password');
    return res.status(400).json({ error: 'Name, email and password required' });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    console.log('[ADMIN SIGNUP FAILED] Invalid email format');
    return res.status(400).json({ error: 'Invalid email address' });
  }
  try {
    await adminModel.ensureAdminTable();
    const existingEmail = await adminModel.findAdminByEmail(email);
    if (existingEmail) {
      console.log('[ADMIN SIGNUP FAILED] Email already exists');
      return res.status(409).json({ error: 'Email already exists' });
    }
    const hash = await bcrypt.hash(password, 10);
    await adminModel.createAdmin(name, email, hash);
    console.log('[ADMIN SIGNUP SUCCESS] Admin created:', email);
    res.json({ message: 'Admin signup successful' });
  } catch (err) {
    console.log('[ADMIN SIGNUP ERROR]', err);
    res.status(500).json({ error: 'Admin signup failed' });
  }
}

// Admin Login
async function login(req, res) {
  const { login, password } = req.body; // login is email
  console.log(`[ADMIN LOGIN ATTEMPT] Email: ${login}`);
  if (!login || !password) {
    console.log('[ADMIN LOGIN FAILED] Missing email or password');
    return res.status(400).json({ error: 'Email and password required' });
  }
  try {
    await adminModel.ensureAdminTable();
    const admin = await adminModel.findAdminByEmail(login);
    if (!admin) {
      console.log('[ADMIN LOGIN FAILED] Invalid credentials (admin not found)');
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      console.log('[ADMIN LOGIN FAILED] Invalid credentials (wrong password)');
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Generate JWT token
    const token = jwt.sign({ email: admin.email, id: admin.id, isAdmin: true }, JWT_SECRET, { expiresIn: '1h' });
    // Store token in DB
    await adminModel.updateAdminToken(admin.email, token);
    console.log('[ADMIN LOGIN SUCCESS] Admin logged in:', login, 'Token:', token);
    res.json({ message: 'Admin login successful', token });
  } catch (err) {
    console.log('[ADMIN LOGIN ERROR]', err);
    res.status(500).json({ error: 'Admin login failed' });
  }
}

// Get current admin profile from token
async function me(req, res) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const admin = await adminModel.findAdminByEmail(decoded.email);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    // Never return password or token
    const { password, token: adminToken, ...adminData } = admin;
    res.json(adminData);
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = { signup, login, me }; 
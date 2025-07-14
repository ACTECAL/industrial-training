const adminRoutes = require('./routes/admin');
const adminAuthRoutes = require('./routes/adminAuth');
// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());



const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menu');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');

async function startServer() {
  const getUserModel = require('./models/userModel');
  const getMenuModel = require('./models/menuModel');
  const getCartModel = require('./models/cartModel');
  const getOrderModel = require('./models/orderModel');
  const getSequelize = require('./db');

  const sequelize = await getSequelize();
  const User = await getUserModel();
  const Menu = await getMenuModel();
  const Cart = await getCartModel();
  const Order = await getOrderModel();

  // Define associations
  Cart.belongsTo(User, { foreignKey: 'userId' });
  Cart.belongsTo(Menu, { foreignKey: 'menuId' });
  Order.belongsTo(User, { foreignKey: 'userId' });
  User.hasMany(Cart, { foreignKey: 'userId' });
  Menu.hasMany(Cart, { foreignKey: 'menuId' });

  // Sync and start server
  await sequelize.sync({ force: true });
  console.log('✅ All tables (users, menu, cart, orders) have been force-synced.');
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running at: http://localhost:${PORT}`);
  });
}

startServer();



// Root route
app.get('/', (req, res) => {
  res.send('✅ Backend is running...');
});

// Auth routes
app.use('/api', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/cart', cartRoutes);

app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/auth', adminAuthRoutes);

// Error handler middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);



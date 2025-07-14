
const getMenuModel = require('./models/menuModel');
const getSequelize = require('./db');

const menuItems = [
  { name: 'Margherita Pizza', description: 'Classic cheese and tomato pizza', price: 299, image: '🍕' },
  { name: 'Veg Burger', description: 'Crispy veggie patty with fresh veggies', price: 149, image: '🍔' },
  { name: 'French Fries', description: 'Golden fried potato fries', price: 99, image: '🍟' },
  { name: 'Pasta Alfredo', description: 'Creamy white sauce pasta', price: 249, image: '🍝' },
  { name: 'Paneer Tikka', description: 'Grilled paneer cubes with spices', price: 199, image: '🍢' },
  { name: 'Cold Coffee', description: 'Chilled coffee with ice cream', price: 129, image: '🥤' },
];



console.log('--- Starting seedMenu.js ---');
async function seedMenu() {
  try {
    console.log('Getting sequelize...');
    const sequelize = await getSequelize();
    console.log('Authenticating sequelize...');
    await sequelize.authenticate();
    console.log('✅ Database connection established.');
    console.log('Getting Menu model...');
    const Menu = await getMenuModel();
    console.log('Syncing Menu model...');
    await Menu.sync(); // Ensure table exists
    console.log('Bulk creating menu items...');
    await Menu.bulkCreate(menuItems, { ignoreDuplicates: true });
    console.log('✅ Menu items seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to seed menu items:', err);
    process.exit(1);
  }
}



seedMenu();



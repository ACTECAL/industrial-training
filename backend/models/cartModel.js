const { DataTypes } = require('sequelize');
const getSequelize = require('../db');

let Cart;
async function getCartModel() {
  if (!Cart) {
    const sequelize = await getSequelize();
    Cart = sequelize.define('Cart', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      menuId: { type: DataTypes.INTEGER, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    }, {
      tableName: 'cart',
      timestamps: false,
    });
  }
  return Cart;
}

module.exports = getCartModel;

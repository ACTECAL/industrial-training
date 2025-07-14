const { DataTypes } = require('sequelize');
const getSequelize = require('../db');

let Order;
async function getOrderModel() {
  if (!Order) {
    const sequelize = await getSequelize();
    Order = sequelize.define('Order', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      items: { type: DataTypes.JSON, allowNull: false },
      total: { type: DataTypes.FLOAT, allowNull: false },
      date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    }, {
      tableName: 'orders',
      timestamps: false,
    });
  }
  return Order;
}

module.exports = getOrderModel;

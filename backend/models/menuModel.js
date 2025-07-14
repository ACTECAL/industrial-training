const { DataTypes } = require('sequelize');
const getSequelize = require('../db');

let Menu;
async function getMenuModel() {
  if (!Menu) {
    const sequelize = await getSequelize();
    Menu = sequelize.define('Menu', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
      price: { type: DataTypes.FLOAT, allowNull: false },
      image: { type: DataTypes.STRING },
    }, {
      tableName: 'menu',
      timestamps: false,
    });
  }
  return Menu;
}

module.exports = getMenuModel;

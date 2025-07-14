const { DataTypes } = require('sequelize');
const getSequelize = require('../db');

let User;
async function getUserModel() {
  if (!User) {
    const sequelize = await getSequelize();
    User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, {
      tableName: 'users',
      timestamps: false,
    });
  }
  return User;
}

module.exports = getUserModel;

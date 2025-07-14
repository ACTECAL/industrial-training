// db.js
const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

const dbName = 'food_delivery_db';
const dbUser = 'root';
const dbPass = '@Aanchal03';
const dbHost = 'localhost';

async function ensureDatabase() {
  const connection = await mysql.createConnection({ host: dbHost, user: dbUser, password: dbPass });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await connection.end();
}

let sequelizeInstance = null;
async function getSequelize() {
  if (!sequelizeInstance) {
    await ensureDatabase();
    sequelizeInstance = new Sequelize(dbName, dbUser, dbPass, {
      host: dbHost,
      dialect: 'mysql',
      logging: false
    });
  }
  return sequelizeInstance;
}

module.exports = getSequelize;

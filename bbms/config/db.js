const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password@123',
    database:'bbms'
});

module.exports = db;

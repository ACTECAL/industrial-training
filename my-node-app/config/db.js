const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Kamlesh@123',
    database:'evm'
});

module.exports = db;
// Note: Ensure that the MySQL server is running and the credentials are correct.


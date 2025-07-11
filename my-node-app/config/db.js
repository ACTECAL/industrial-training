const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kamlesh@123',
  database: 'testdb'
});


connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL Database');
});

models.exports = connection;


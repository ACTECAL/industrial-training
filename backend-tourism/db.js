const mysql = require('mysql2');

const myDb = 'mydb'; // Change as needed

function connectToDatabase() {
  return new Promise((resolve, reject) => {
    // Temporary connection (no database)
    const tempConnection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Vikram@123', // Change as needed
    });

    tempConnection.query(`CREATE DATABASE IF NOT EXISTS \`${myDb}\``, (err) => {
      if (err) {
        console.error('Error creating database:', err);
        tempConnection.end();
        return reject(err);
      } else {
        console.log(`Database '${myDb}' is ready.`);
        tempConnection.end();

        // Now connect to the actual database
        const db = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'Vikram@123', // Change as needed
          database: myDb
        });

        db.connect((err) => {
          if (err) {
            console.error('MySQL connection error:', err);
            return reject(err);
          } else {
            console.log('Connected to MySQL database!');
            return resolve(db);
          }
        });
      }
    });
  });
}

module.exports = connectToDatabase; 
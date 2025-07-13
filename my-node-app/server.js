const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require('cors');
const db = require("./config/db");
const app = express();
app.use(cors());
// Load environment variables
dotenv.config();
// Middleware
app.use(morgan("dev"));

app.use(express.json());

app.use('/api/v1/signup', require('./routes/userRoutes'));


// Test route
app.get('/test', (req, res) => {
  res.status(200).send('<h1>hello world !</h1>');
});

// Port
const PORT = process.env.PORT || 8080;

//conditionaly listen
db.query('SELECT 1').then(()=>{
  // mysql
    console.log('MYSQL db connected'.bgCyan.white);
//listen
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`.green);
});
}).catch((error) => {
    console.log(error);
});


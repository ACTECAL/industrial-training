const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Dummy login route
app.post('/api/login', (req, res) => {no
  const { email, password } = req.body;

  // Hardcoded dummy user
  if (email === 'test@example.com' && password === '123456') {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
//index.js

/*const neo4j = require('neo4j-driver');

// Neo4j credentials
const uri = "bolt://localhost:7687";
const user = "neo4j";
const password = "your_password"; // ← यहाँ अपना पासवर्ड डालें

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

async function runQuery() {
  try {
    const result = await session.run(`
      MATCH (p:Person)
      RETURN p.name AS name, p.age AS age
    `);

    const people = result.records.map(record => ({
      name: record.get('name'),
      age: record.get('age')
    }));

    // 1. map - convert names to uppercase
    const upperNames = people.map(p => p.name.toUpperCase());

    // 2. filter - get people older than 30
    const olderThan30 = people.filter(p => p.age > 30);

    // 3. includes - check if someone named "ALICE" is present
    const hasAlice = upperNames.includes("ALICE");

    // 4. forEach - print names
    console.log("All Names:");
    upperNames.forEach(n => console.log("👉", n));

    // 5. reduce - sum of all ages
    const totalAge = people.reduce((sum, p) => sum + p.age, 0);

    console.log("\nPeople older than 30:", olderThan30);
    console.log("Is Alice present:", hasAlice);
    console.log("Total age of all people:", totalAge);

  } catch (error) {
    console.error("❌ Error running query:", error);
  } finally {
    await session.close();
    await driver.close();
  }
}

runQuery();*/

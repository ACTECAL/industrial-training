import React, { useState } from 'react';
import CheatSheetLayout from '../components/CheatSheetLayout';

function CheatSheetRDBMS() {
  const [rdbmsCheats, setRdbmsCheats] = useState([
    {
      title: "1. Create Table",
      code: `CREATE TABLE Students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  grade CHAR(2)
);`
    },
    {
      title: "2. Insert Data",
      code: `INSERT INTO Students (id, name, age, grade)
VALUES (1, 'John', 20, 'A');`
    },
    {
      title: "3. Select All Rows",
      code: `SELECT * FROM Students;`
    },
    {
      title: "4. Select With Condition",
      code: `SELECT name, age FROM Students
WHERE grade = 'A';`
    },
    {
      title: "5. Update Data",
      code: `UPDATE Students
SET grade = 'B'
WHERE id = 1;`
    },
    {
      title: "6. Delete Data",
      code: `DELETE FROM Students
WHERE age < 18;`
    },
    {
      title: "7. Add Column",
      code: `ALTER TABLE Students
ADD email VARCHAR(100);`
    },
    {
      title: "8. Drop Column",
      code: `ALTER TABLE Students
DROP COLUMN email;`
    },
    {
      title: "9. Create Index",
      code: `CREATE INDEX idx_name
ON Students (name);`
    },
    {
      title: "10. Drop Table",
      code: `DROP TABLE Students;`
    },
    {
      title: "11. Inner Join",
      code: `SELECT s.name, c.course_name
FROM Students s
INNER JOIN Courses c ON s.id = c.student_id;`
    },
    {
      title: "12. Left Join",
      code: `SELECT s.name, c.course_name
FROM Students s
LEFT JOIN Courses c ON s.id = c.student_id;`
    },
    {
      title: "13. Group By & Aggregate",
      code: `SELECT grade, COUNT(*) AS total
FROM Students
GROUP BY grade;`
    },
    {
      title: "14. Order By",
      code: `SELECT * FROM Students
ORDER BY age DESC;`
    },
    {
      title: "15. Limit & Offset",
      code: `SELECT * FROM Students
LIMIT 5 OFFSET 10;`
    },
    {
      title: "16. Unique Constraint",
      code: `CREATE TABLE Users (
  id INT PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  password VARCHAR(100)
);`
    },
    {
      title: "17. Foreign Key",
      code: `CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  student_id INT,
  FOREIGN KEY (student_id) REFERENCES Students(id)
);`
    },
    {
      title: "18. Check Constraint",
      code: `CREATE TABLE Products (
  id INT PRIMARY KEY,
  price DECIMAL(10,2) CHECK (price > 0)
);`
    },
    {
      title: "19. Default Value",
      code: `CREATE TABLE Employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  status VARCHAR(10) DEFAULT 'active'
);`
    },
    {
      title: "20. Subquery",
      code: `SELECT name FROM Students
WHERE age > (SELECT AVG(age) FROM Students);`
    }
  ]);
  return <CheatSheetLayout title="RDBMS Cheat Sheets" cheats={rdbmsCheats} />;
}

export default CheatSheetRDBMS; 
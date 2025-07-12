import React, { useState } from 'react';
import './FreeCourses.css';
import Button from '../components/Button';
import CheatSheetLayout from '../components/CheatSheetLayout';
import CheatSheetVideos from '../components/CheatSheetVideos';


function CheatSheetJS() {
    const [jsCheats,setJsCheats] = useState([
        {
          title: "1. Variables and Data Types",
          code: `// Variable declarations
      let name = "John";
      const age = 25;
      var oldWay = "not recommended";
      
      // Data types
      let string = "Hello World";
      let number = 42;
      let boolean = true;
      let array = [1, 2, 3, 4, 5];
      let object = { name: "John", age: 25 };
      let nullValue = null;
      let undefinedValue = undefined;
      
      console.log(typeof string); // "string"
      console.log(typeof number); // "number"
      console.log(typeof boolean); // "boolean"`
        },
        {
          title: "2. Template Literals",
          code: `const name = "John";
      const age = 25;
      const city = "New York";
      
      // Old way
      console.log("My name is " + name + " and I am " + age + " years old.");
      
      // Template literals
      console.log(\`My name is \${name} and I am \${age} years old.\`);
      console.log(\`I live in \${city}.\`);
      
      // Multi-line strings
      const message = \`
          Hello \${name}!
          Welcome to \${city}.
          You are \${age} years old.
      \`;
      console.log(message);`
        },
        {
          title: "3. Arrays - Basic Operations",
          code: `// Creating arrays
      let fruits = ["apple", "banana", "orange"];
      let numbers = [1, 2, 3, 4, 5];
      
      // Adding elements
      fruits.push("grape"); // Add to end
      fruits.unshift("mango"); // Add to beginning
      fruits.splice(2, 0, "kiwi"); // Insert at index 2
      
      // Removing elements
      fruits.pop(); // Remove from end
      fruits.shift(); // Remove from beginning
      fruits.splice(1, 1); // Remove 1 element at index 1
      
      // Accessing elements
      console.log(fruits[0]); // First element
      console.log(fruits[fruits.length - 1]); // Last element
      
      // Array length
      console.log(fruits.length);`
        },
        {
          title: "4. Array Methods",
          code: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      
      // forEach - iterate over array
      numbers.forEach(num => console.log(num));
      
      // map - transform array
      const doubled = numbers.map(num => num * 2);
      console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
      
      // filter - filter array
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      console.log(evenNumbers); // [2, 4, 6, 8, 10]
      
      // reduce - reduce array to single value
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      console.log(sum); // 55
      
      // find - find first element
      const firstEven = numbers.find(num => num % 2 === 0);
      console.log(firstEven); // 2
      
      // includes - check if element exists
      console.log(numbers.includes(5)); // true`
        },
        {
          title: "5. Objects - Basic",
          code: `// Creating objects
      const person = {
          name: "John",
          age: 25,
          city: "New York",
          isStudent: true
      };
      
      // Accessing properties
      console.log(person.name); // Dot notation
      console.log(person["age"]); // Bracket notation
      
      // Adding properties
      person.job = "Developer";
      person["hobby"] = "Reading";
      
      // Deleting properties
      delete person.isStudent;
      
      // Object methods
      const calculator = {
          add: function(a, b) {
              return a + b;
          },
          subtract(a, b) { // Shorthand syntax
              return a - b;
          }
      };
      
      console.log(calculator.add(5, 3)); // 8
      console.log(calculator.subtract(10, 4)); // 6`
        },
        {
          title: "6. Destructuring",
          code: `// Array destructuring
      const colors = ["red", "green", "blue"];
      const [first, second, third] = colors;
      console.log(first, second, third); // red green blue
      
      // Object destructuring
      const user = {
          name: "John",
          age: 25,
          email: "john@example.com"
      };
      
      const { name, age, email } = user;
      console.log(name, age, email); // John 25 john@example.com
      
      // Destructuring with default values
      const { name: userName, country = "USA" } = user;
      console.log(userName, country); // John USA
      
      // Nested destructuring
      const data = {
          user: {
              name: "John",
              profile: {
                  avatar: "avatar.jpg"
              }
          }
      };
      
      const { user: { profile: { avatar } } } = data;
      console.log(avatar); // avatar.jpg`
        },
        {
          title: "7. Functions - Basic",
          code: `// Function declaration
      function greet(name) {
          return \`Hello, \${name}!\`;
      }
      
      // Function expression
      const greet2 = function(name) {
          return \`Hi, \${name}!\`;
      };
      
      // Arrow function
      const greet3 = (name) => \`Hey, \${name}!\`;
      
      // Arrow function with multiple parameters
      const add = (a, b) => a + b;
      
      // Arrow function with multiple lines
      const multiply = (a, b) => {
          const result = a * b;
          return result;
      };
      
      // Default parameters
      const greetWithDefault = (name = "Guest") => \`Hello, \${name}!\`;
      
      console.log(greet("John")); // Hello, John!
      console.log(greetWithDefault()); // Hello, Guest!`
        },
        {
          title: "8. Higher Order Functions",
          code: `// Function that returns a function
      function multiplyBy(factor) {
          return function(number) {
              return number * factor;
          };
      }
      
      const multiplyByTwo = multiplyBy(2);
      const multiplyByTen = multiplyBy(10);
      
      console.log(multiplyByTwo(5)); // 10
      console.log(multiplyByTen(5)); // 50
      
      // Function that takes a function as parameter
      function processArray(arr, callback) {
          return arr.map(callback);
      }
      
      const numbers = [1, 2, 3, 4, 5];
      const doubled = processArray(numbers, x => x * 2);
      const squared = processArray(numbers, x => x * x);
      
      console.log(doubled); // [2, 4, 6, 8, 10]
      console.log(squared); // [1, 4, 9, 16, 25]
      
      // Callback function
      function fetchData(callback) {
          setTimeout(() => {
              const data = { name: "John", age: 25 };
              callback(data);
          }, 1000);
      }
      
      fetchData((data) => {
          console.log("Received:", data);
      });`
        },
        {
          title: "9. Promises",
          code: `// Creating a promise
      const myPromise = new Promise((resolve, reject) => {
          const random = Math.random();
          
          if (random > 0.5) {
              resolve("Success! Random number was: " + random);
          } else {
              reject("Failed! Random number was: " + random);
          }
      });
      
      // Using promises
      myPromise
          .then(result => {
              console.log("Success:", result);
          })
          .catch(error => {
              console.log("Error:", error);
          });
      
      // Promise.all - wait for all promises
      const promise1 = Promise.resolve(3);
      const promise2 = new Promise(resolve => setTimeout(() => resolve("foo"), 2000));
      const promise3 = Promise.resolve(42);
      
      Promise.all([promise1, promise2, promise3])
          .then(values => {
              console.log("All resolved:", values);
          });
      
      // Async/await
      async function fetchUserData() {
          try {
              const response = await fetch('https://api.example.com/user');
              const data = await response.json();
              return data;
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      }`
        },
        {
          title: "10. Classes",
          code: `// Class declaration
      class Person {
          constructor(name, age) {
              this.name = name;
              this.age = age;
          }
          
          greet() {
              return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
          }
          
          static create(name, age) {
              return new Person(name, age);
          }
      }
      
      // Creating instances
      const person1 = new Person("John", 25);
      const person2 = Person.create("Jane", 30);
      
      console.log(person1.greet());
      console.log(person2.greet());
      
      // Inheritance
      class Student extends Person {
          constructor(name, age, grade) {
              super(name, age);
              this.grade = grade;
          }
          
          study() {
              return \`\${this.name} is studying hard!\`;
          }
      }
      
      const student = new Student("Alice", 20, "A");
      console.log(student.greet());
      console.log(student.study());`
        },
        {
          title: "11. Modules",
          code: `// math.js (exporting)
      export const add = (a, b) => a + b;
      export const subtract = (a, b) => a - b;
      export const multiply = (a, b) => a * b;
      
      export default function divide(a, b) {
          return a / b;
      }
      
      // main.js (importing)
      import divide, { add, subtract, multiply } from './math.js';
      
      console.log(add(5, 3)); // 8
      console.log(subtract(10, 4)); // 6
      console.log(multiply(2, 6)); // 12
      console.log(divide(15, 3)); // 5
      
      // Import all as namespace
      import * as MathUtils from './math.js';
      console.log(MathUtils.add(2, 3)); // 5
      
      // Dynamic imports
      async function loadModule() {
          const module = await import('./math.js');
          console.log(module.add(1, 2)); // 3
      }`
        },
        {
          title: "12. Error Handling",
          code: `// Try-catch block
      try {
          const result = 10 / 0;
          console.log(result);
      } catch (error) {
          console.error("An error occurred:", error.message);
      } finally {
          console.log("This always executes");
      }
      
      // Custom error
      class CustomError extends Error {
          constructor(message, code) {
              super(message);
              this.name = "CustomError";
              this.code = code;
          }
      }
      
      // Throwing custom error
      function validateAge(age) {
          if (age < 0) {
              throw new CustomError("Age cannot be negative", "INVALID_AGE");
          }
          if (age > 150) {
              throw new CustomError("Age seems unrealistic", "UNREALISTIC_AGE");
          }
          return true;
      }
      
      try {
          validateAge(-5);
      } catch (error) {
          if (error instanceof CustomError) {
              console.error(\`\${error.name}: \${error.message} (Code: \${error.code})\`);
          }
      }`
        },
        {
          title: "13. Date and Time",
          code: `// Creating dates
      const now = new Date();
      const specificDate = new Date(2024, 0, 15); // January 15, 2024
      const dateString = new Date("2024-01-15");
      
      // Getting date components
      console.log(now.getFullYear()); // Current year
      console.log(now.getMonth()); // 0-11 (January = 0)
      console.log(now.getDate()); // Day of month
      console.log(now.getDay()); // Day of week (0-6, Sunday = 0)
      console.log(now.getHours()); // Hours (0-23)
      console.log(now.getMinutes()); // Minutes
      console.log(now.getSeconds()); // Seconds
      
      // Formatting dates
      const options = { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
      };
      console.log(now.toLocaleDateString('en-US', options));
      
      // Date arithmetic
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);
      
      const nextWeek = new Date(now);
      nextWeek.setDate(now.getDate() + 7);
      
      // Time difference
      const diff = nextWeek - now;
      const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
      console.log(\`Days until next week: \${daysDiff}\`);`
        },
        {
          title: "14. Local Storage",
          code: `// Storing data
      localStorage.setItem('username', 'john_doe');
      localStorage.setItem('userData', JSON.stringify({
          name: 'John',
          age: 25,
          email: 'john@example.com'
      }));
      
      // Retrieving data
      const username = localStorage.getItem('username');
      const userData = JSON.parse(localStorage.getItem('userData'));
      
      console.log(username); // john_doe
      console.log(userData); // {name: "John", age: 25, email: "john@example.com"}
      
      // Removing data
      localStorage.removeItem('username');
      
      // Clearing all data
      localStorage.clear();
      
      // Session storage (data persists only for session)
      sessionStorage.setItem('sessionData', 'temporary data');
      
      // Checking if storage is available
      function isStorageAvailable() {
          try {
              const test = 'test';
              localStorage.setItem(test, test);
              localStorage.removeItem(test);
              return true;
          } catch (e) {
              return false;
          }
      }
      
      console.log('Storage available:', isStorageAvailable());`
        },
        {
          title: "15. Regular Expressions",
          code: `// Creating regex
      const regex1 = /pattern/;
      const regex2 = new RegExp('pattern');
      
      // Common patterns
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      const phoneRegex = /^\\+?[1-9]\\d{1,14}$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/;
      
      // Testing strings
      const email = "user@example.com";
      console.log(emailRegex.test(email)); // true
      
      // Extracting matches
      const text = "My phone number is 123-456-7890";
      const phoneMatch = text.match(/\\d{3}-\\d{3}-\\d{4}/);
      console.log(phoneMatch[0]); // 123-456-7890
      
      // Replacing text
      const newText = text.replace(/\\d{3}-\\d{3}-\\d{4}/, '***-***-****');
      console.log(newText); // My phone number is ***-***-****
      
      // Splitting with regex
      const words = "Hello,World;JavaScript:Programming".split(/[,;:]/);
      console.log(words); // ["Hello", "World", "JavaScript", "Programming"]
      
      // Flags
      const globalRegex = /pattern/g; // Global search
      const caseInsensitiveRegex = /pattern/i; // Case insensitive
      const multilineRegex = /pattern/m; // Multiline`
        },
        {
          title: "16. Fetch API",
          code: `// Basic GET request
      fetch('https://api.example.com/data')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              console.log('Data:', data);
          })
          .catch(error => {
              console.error('Error:', error);
          });
      
      // POST request
      fetch('https://api.example.com/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: 'John Doe',
              email: 'john@example.com'
          })
      })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
      
      // Async/await version
      async function fetchData() {
          try {
              const response = await fetch('https://api.example.com/data');
              const data = await response.json();
              return data;
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      }
      
      // Upload file
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
      
      fetch('/upload', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => console.log('Upload successful:', data));`
        },
        {
          title: "17. Event Handling",
          code: `// Adding event listeners
      const button = document.getElementById('myButton');
      const input = document.getElementById('myInput');
      
      // Click event
      button.addEventListener('click', function(event) {
          console.log('Button clicked!');
          console.log('Event:', event);
      });
      
      // Input event
      input.addEventListener('input', function(event) {
          console.log('Input value:', event.target.value);
      });
      
      // Form submission
      const form = document.getElementById('myForm');
      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent default form submission
          
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);
          console.log('Form data:', data);
      });
      
      // Keyboard events
      document.addEventListener('keydown', function(event) {
          console.log('Key pressed:', event.key);
          
          if (event.key === 'Escape') {
              console.log('Escape key pressed!');
          }
      });
      
      // Mouse events
      const element = document.getElementById('myElement');
      element.addEventListener('mouseenter', () => console.log('Mouse entered'));
      element.addEventListener('mouseleave', () => console.log('Mouse left'));
      element.addEventListener('mousemove', (event) => {
          console.log('Mouse position:', event.clientX, event.clientY);
      });
      
      // Removing event listeners
      function handleClick() {
          console.log('Button clicked!');
      }
      
      button.addEventListener('click', handleClick);
      button.removeEventListener('click', handleClick);`
        },
        {
          title: "18. DOM Manipulation",
          code: `// Creating elements
      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');
      const newText = document.createTextNode('Hello World!');
      
      // Setting attributes
      newDiv.setAttribute('class', 'container');
      newDiv.id = 'myDiv';
      newDiv.className = 'box highlight';
      
      // Adding content
      newParagraph.textContent = 'This is a paragraph';
      newParagraph.innerHTML = '<strong>Bold text</strong> and <em>italic text</em>';
      
      // Appending elements
      newDiv.appendChild(newParagraph);
      document.body.appendChild(newDiv);
      
      // Selecting elements
      const elementById = document.getElementById('myDiv');
      const elementsByClass = document.getElementsByClassName('box');
      const elementsByTag = document.getElementsByTagName('div');
      const elementBySelector = document.querySelector('.container');
      const elementsBySelector = document.querySelectorAll('.box');
      
      // Modifying elements
      elementById.style.backgroundColor = 'red';
      elementById.style.fontSize = '16px';
      elementById.classList.add('active');
      elementById.classList.remove('highlight');
      elementById.classList.toggle('visible');
      
      // Removing elements
      const parent = elementById.parentNode;
      parent.removeChild(elementById);
      
      // Cloning elements
      const clone = elementById.cloneNode(true); // true for deep clone
      document.body.appendChild(clone);`
        },
        {
          title: "19. Web APIs",
          code: `// Geolocation API
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              function(position) {
                  console.log('Latitude:', position.coords.latitude);
                  console.log('Longitude:', position.coords.longitude);
              },
              function(error) {
                  console.error('Error getting location:', error);
              }
          );
      }
      
      // Notification API
      if ('Notification' in window) {
          Notification.requestPermission().then(permission => {
              if (permission === 'granted') {
                  new Notification('Hello!', {
                      body: 'This is a notification',
                      icon: '/icon.png'
                  });
              }
          });
      }
      
      // Web Storage API
      localStorage.setItem('key', 'value');
      sessionStorage.setItem('sessionKey', 'sessionValue');
      
      // History API
      window.history.pushState({page: 1}, 'Page 1', '/page1');
      window.history.back();
      window.history.forward();
      
      // Intersection Observer API
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  console.log('Element is visible');
                  entry.target.classList.add('visible');
              }
          });
      });
      
      const target = document.querySelector('.target');
      observer.observe(target);
      
      // Clipboard API
      navigator.clipboard.writeText('Text to copy').then(() => {
          console.log('Text copied to clipboard');
      });
      
      navigator.clipboard.readText().then(text => {
          console.log('Text from clipboard:', text);
      });`
        },
        {
          title: "20. Modern JavaScript Features",
          code: `// Optional chaining
      const user = {
          name: 'John',
          address: {
              street: '123 Main St',
              city: 'New York'
          }
      };
      
      console.log(user?.address?.street); // 123 Main St
      console.log(user?.phone?.number); // undefined (no error)
      
      // Nullish coalescing
      const value = null;
      const defaultValue = value ?? 'default'; // 'default'
      const zeroValue = 0 ?? 'default'; // 0 (not 'default')
      
      // Template literals with expressions
      const name = 'John';
      const age = 25;
      const message = \`
          Name: \${name}
          Age: \${age}
          Status: \${age >= 18 ? 'Adult' : 'Minor'}
      \`;
      
      // Spread operator
      const arr1 = [1, 2, 3];
      const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
      
      const obj1 = { name: 'John' };
      const obj2 = { ...obj1, age: 25 }; // { name: 'John', age: 25 }
      
      // Rest parameters
      function sum(...numbers) {
          return numbers.reduce((acc, num) => acc + num, 0);
      }
      
      console.log(sum(1, 2, 3, 4, 5)); // 15
      
      // Array/Object destructuring with rest
      const [first, second, ...rest] = [1, 2, 3, 4, 5];
      console.log(first, second, rest); // 1 2 [3, 4, 5]
      
      const { name: userName, ...otherProps } = { name: 'John', age: 25, city: 'NY' };
      console.log(userName, otherProps); // John { age: 25, city: 'NY' }`
        }
      ])
      
      const [jsVideos,setJsVideos] = useState([
        {
          title: 'JavaScript Basics in 1 Hour',
          url: 'https://www.youtube.com/embed/W6NZfCO5SIk',
          description: 'A complete beginner-friendly introduction to JavaScript.'
        },
        {
          title: 'JavaScript Array Methods Explained',
          url: 'https://www.youtube.com/embed/R8rmfD9Y5-c',
          description: 'Learn all important array methods in JavaScript.'
        },
        {
          title: 'ES6 Features Crash Course',
          url: 'https://www.youtube.com/embed/NCwa_xi0Uuc',
          description: 'A quick guide to modern JavaScript (ES6+).' 
        }
      ]);
      
  const [selectedCheat, setSelectedCheat] = useState(null);

  const handleSelectCheat = (index) => {
    setSelectedCheat(index);
  };

  return (
    <>
      <CheatSheetLayout title="JavaScript Cheat Sheets" cheats={jsCheats} />
      <CheatSheetVideos videos={jsVideos} />
      {selectedCheat !== null && (
        <div>
          <h3>Selected Cheat:</h3>
          <pre>{jsCheats[selectedCheat].code}</pre>
        </div>
      )}
      {jsCheats.map((cheat, idx) => (
        <button key={idx} onClick={() => handleSelectCheat(idx)}>
          Show {cheat.title}
        </button>
      ))}
    </>
  );
}

export default CheatSheetJS; 
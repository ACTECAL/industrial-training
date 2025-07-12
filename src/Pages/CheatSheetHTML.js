import React, { useState } from 'react';
import CheatSheetLayout from '../components/CheatSheetLayout';


function CheatSheetHTML() {
  const [htmlCheats,setHtmlCheats]  = useState([
    {
      title: "1. Basic HTML Structure",
      code: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My First Page</title>
  </head>
  <body>
      <h1>Hello World!</h1>
      <p>This is my first HTML page.</p>
  </body>
  </html>`
    },
    {
      title: "2. Headings",
      code: `<h1>Main Heading</h1>
  <h2>Sub Heading</h2>
  <h3>Section Heading</h3>
  <h4>Sub Section</h4>
  <h5>Minor Heading</h5>
  <h6>Smallest Heading</h6>`
    },
    {
      title: "3. Paragraphs and Text",
      code: `<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
  <p>You can also use <mark>highlighted text</mark> and <del>deleted text</del>.</p>
  <p>This is <sub>subscript</sub> and this is <sup>superscript</sup>.</p>`
    },
    {
      title: "4. Links",
      code: `<a href="https://www.google.com">Visit Google</a>
  <a href="https://www.github.com" target="_blank">Open GitHub in new tab</a>
  <a href="#section1">Jump to Section 1</a>
  <a href="mailto:email@example.com">Send Email</a>
  <a href="tel:+1234567890">Call Us</a>`
    },
    {
      title: "5. Images",
      code: `<img src="image.jpg" alt="Description of image">
  <img src="photo.png" alt="Photo" width="300" height="200">
  <img src="logo.gif" alt="Logo" style="border: 1px solid black;">`
    },
    {
      title: "6. Lists - Unordered",
      code: `<ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item
          <ul>
              <li>Nested item 1</li>
              <li>Nested item 2</li>
          </ul>
      </li>
  </ul>`
    },
    {
      title: "7. Lists - Ordered",
      code: `<ol>
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
  </ol>
  
  <ol type="A">
      <li>Step A</li>
      <li>Step B</li>
      <li>Step C</li>
  </ol>`
    },
    {
      title: "8. Tables",
      code: `<table border="1">
      <thead>
          <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>John</td>
              <td>25</td>
              <td>New York</td>
          </tr>
          <tr>
              <td>Jane</td>
              <td>30</td>
              <td>London</td>
          </tr>
      </tbody>
  </table>`
    },
    {
      title: "9. Forms - Basic",
      code: `<form action="/submit" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      
      <Button type="submit">Submit</Button>
  </form>`
    },
    {
      title: "10. Form Input Types",
      code: `<input type="text" placeholder="Text input">
  <input type="email" placeholder="Email">
  <input type="password" placeholder="Password">
  <input type="number" min="1" max="100" placeholder="Number">
  <input type="date" placeholder="Date">
  <input type="time" placeholder="Time">
  <input type="file" accept="image/*">
  <input type="checkbox" id="agree">
  <input type="radio" name="gender" value="male">
  <input type="color" value="#ff0000">
  <input type="range" min="0" max="100">`
    },
    {
      title: "11. Textarea and Select",
      code: `<textarea name="message" rows="4" cols="50" placeholder="Enter your message"></textarea>
  
  <select name="country">
      <option value="">Select a country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
      <option value="au">Australia</option>
  </select>
  
  <select name="colors" multiple>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
  </select>`
    },
    {
      title: "12. Div and Span",
      code: `<div style="background-color: lightblue; padding: 20px;">
      <h2>This is a div container</h2>
      <p>Div is a block-level element that creates a new line.</p>
  </div>
  
  <p>This is a paragraph with <span style="color: red;">red text</span> and <span style="font-weight: bold;">bold text</span>.</p>`
    },
    {
      title: "13. Semantic Elements",
      code: `<header>
      <h1>Website Title</h1>
      <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
      </nav>
  </header>
  
  <main>
      <article>
          <h2>Article Title</h2>
          <p>Article content goes here...</p>
      </article>
      
      <aside>
          <h3>Related Links</h3>
          <ul>
              <li><a href="#link1">Link 1</a></li>
              <li><a href="#link2">Link 2</a></li>
          </ul>
      </aside>
  </main>
  
  <footer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>`
    },
    {
      title: "14. Audio and Video",
      code: `<audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      <source src="audio.ogg" type="audio/ogg">
      Your browser does not support the audio element.
  </audio>
  
  <video width="320" height="240" controls>
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
      Your browser does not support the video element.
  </video>
  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>`
    },
    {
      title: "15. Comments and Meta Tags",
      code: `<!-- This is an HTML comment -->
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Page description">
      <meta name="keywords" content="HTML, CSS, JavaScript">
      <meta name="author" content="Your Name">
      <meta http-equiv="refresh" content="30">
      <title>Page Title</title>
  </head>`
    },
    {
      title: "16. Special Characters",
      code: `<p>&lt; Less than</p>
  <p>&gt; Greater than</p>
  <p>&amp; Ampersand</p>
  <p>&quot; Quotation mark</p>
  <p>&apos; Apostrophe</p>
  <p>&copy; Copyright symbol</p>
  <p>&reg; Registered trademark</p>
  <p>&trade; Trademark</p>
  <p>&euro; Euro symbol</p>
  <p>&pound; Pound symbol</p>`
    },
    {
      title: "17. Blockquote and Pre",
      code: `<blockquote cite="https://example.com">
      <p>This is a blockquote. It is used for quoting text from another source.</p>
      <footer>— Author Name</footer>
  </blockquote>
  
  <pre>
  function hello() {
      console.log("Hello, World!");
  }
  </pre>
  
  <code>console.log("Inline code");</code>`
    },
    {
      title: "18. Details and Summary",
      code: `<details>
      <summary>Click to expand</summary>
      <p>This content is hidden by default and can be expanded by clicking the summary.</p>
      <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
      </ul>
  </details>
  
  <details open>
      <summary>This section is open by default</summary>
      <p>This content is visible by default.</p>
  </details>`
    },
    {
      title: "19. Progress and Meter",
      code: `<label for="download">Download progress:</label>
  <progress id="download" value="70" max="100">70%</progress>
  
  <label for="disk">Disk usage:</label>
  <meter id="disk" value="0.6" min="0" max="1" low="0.3" high="0.8" optimum="0.5">60%</meter>
  
  <label for="score">Score:</label>
  <meter id="score" value="85" min="0" max="100" low="40" high="90" optimum="80">85/100</meter>`
    },
    {
      title: "20. Data Attributes",
      code: `<div data-user-id="12345" data-role="admin" data-status="active">
      <h3>User Profile</h3>
      <p>This div has custom data attributes that can be accessed via JavaScript.</p>
  </div>
  
  <button data-action="save" data-id="form1" onclick="handleClick(this)">
      Save Form
  </button>
  
  <script>
  function handleClick(button) {
      const action = button.dataset.action;
      const id = button.dataset.id;
      console.log('Action:', action, 'ID:', id);
  }
  </script>`
    }
  ]);
  return <CheatSheetLayout title="HTML Cheat Sheets" cheats={htmlCheats} />;
}

export default CheatSheetHTML; 
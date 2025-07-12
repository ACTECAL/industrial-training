import React, { useState } from 'react';
import CheatSheetLayout from '../components/CheatSheetLayout';



function CheatSheetCSS() {
    const [cssCheats,setCssCheats] = useState([
        {
          title: "1. Basic Selectors",
          code: `/* Element selector */
      p {
          color: blue;
          font-size: 16px;
      }
      
      /* Class selector */
      .highlight {
          background-color: yellow;
          font-weight: bold;
      }
      
      /* ID selector */
      #header {
          background-color: #333;
          color: white;
          padding: 20px;
      }
      
      /* Universal selector */
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }`
        },
        {
          title: "2. Combinators",
          code: `/* Descendant selector */
      div p {
          color: red;
      }
      
      /* Child selector */
      div > p {
          border: 1px solid black;
      }
      
      /* Adjacent sibling selector */
      h1 + p {
          font-size: 18px;
          margin-top: 10px;
      }
      
      /* General sibling selector */
      h1 ~ p {
          color: green;
      }
      
      /* Multiple selectors */
      h1, h2, h3 {
          font-family: Arial, sans-serif;
          color: #333;
      }`
        },
        {
          title: "3. Pseudo-classes",
          code: `/* Link states */
      a:link {
          color: blue;
          text-decoration: none;
      }
      
      a:visited {
          color: purple;
      }
      
      a:hover {
          color: red;
          text-decoration: underline;
      }
      
      a:active {
          color: orange;
      }
      
      /* Form states */
      input:focus {
          border: 2px solid blue;
          outline: none;
      }
      
      input:disabled {
          background-color: #f0f0f0;
          cursor: not-allowed;
      }
      
      /* Position-based */
      li:first-child {
          font-weight: bold;
      }
      
      li:last-child {
          border-bottom: none;
      }
      
      li:nth-child(odd) {
          background-color: #f9f9f9;
      }
      
      li:nth-child(even) {
          background-color: #fff;
      }`
        },
        {
          title: "4. Pseudo-elements",
          code: `/* Before and After */
      .quote::before {
          content: '"';
          font-size: 24px;
          color: #999;
      }
      
      .quote::after {
          content: '"';
          font-size: 24px;
          color: #999;
      }
      
      /* First letter and line */
      p::first-letter {
          font-size: 32px;
          font-weight: bold;
          color: red;
      }
      
      p::first-line {
          font-weight: bold;
          color: blue;
      }
      
      /* Selection */
      ::selection {
          background-color: yellow;
          color: black;
      }
      
      /* Placeholder */
      input::placeholder {
          color: #999;
          font-style: italic;
      }`
        },
        {
          title: "5. Box Model",
          code: `/* Content box */
      .content-box {
          width: 200px;
          height: 100px;
          padding: 20px;
          border: 5px solid black;
          margin: 10px;
          box-sizing: content-box;
      }
      
      /* Border box */
      .border-box {
          width: 200px;
          height: 100px;
          padding: 20px;
          border: 5px solid black;
          margin: 10px;
          box-sizing: border-box;
      }
      
      /* Margin collapse */
      .margin-collapse {
          margin: 20px;
      }
      
      /* Padding */
      .padding-example {
          padding: 10px; /* All sides */
          padding: 10px 20px; /* Top/bottom, left/right */
          padding: 10px 20px 15px 25px; /* Top, right, bottom, left */
      }`
        },
        {
          title: "6. Display Properties",
          code: `/* Block elements */
      .block {
          display: block;
          width: 100%;
          margin: 10px 0;
      }
      
      /* Inline elements */
      .inline {
          display: inline;
          margin: 0 5px;
      }
      
      /* Inline-block */
      .inline-block {
          display: inline-block;
          width: 200px;
          margin: 10px;
      }
      
      /* Flexbox */
      .flex-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
      }
      
      .flex-item {
          flex: 1;
          margin: 5px;
      }
      
      /* Grid */
      .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;
      }
      
      /* None */
      .hidden {
          display: none;
      }`
        },
        {
          title: "7. Flexbox Layout",
          code: `/* Flex container */
      .flex-container {
          display: flex;
          flex-direction: row; /* row, row-reverse, column, column-reverse */
          justify-content: center; /* flex-start, flex-end, center, space-between, space-around */
          align-items: center; /* flex-start, flex-end, center, baseline, stretch */
          flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
          align-content: space-between; /* flex-start, flex-end, center, space-between, space-around, stretch */
      }
      
      /* Flex items */
      .flex-item {
          flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
          flex-grow: 2; /* How much the item can grow */
          flex-shrink: 1; /* How much the item can shrink */
          flex-basis: 200px; /* Initial size */
          align-self: center; /* Override container's align-items */
          order: 1; /* Change order of items */
      }
      
      /* Shorthand */
      .flex-shorthand {
          flex: 2 1 200px; /* grow shrink basis */
      }`
        },
        {
          title: "8. CSS Grid",
          code: `/* Grid container */
      .grid-container {
          display: grid;
          grid-template-columns: 200px 1fr 2fr; /* Fixed, flexible, flexible */
          grid-template-rows: 100px 200px auto; /* Fixed, fixed, auto */
          grid-gap: 20px; /* row-gap column-gap */
          grid-template-areas: 
              "header header header"
              "sidebar main main"
              "footer footer footer";
      }
      
      /* Grid items */
      .grid-item {
          grid-column: 1 / 3; /* Start at line 1, end at line 3 */
          grid-row: 1 / 2; /* Start at line 1, end at line 2 */
          grid-area: header; /* Named area */
          justify-self: center; /* Horizontal alignment within cell */
          align-self: center; /* Vertical alignment within cell */
      }
      
      /* Responsive grid */
      .responsive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
      }
      
      /* Grid lines */
      .grid-lines {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 100px);
      }
      
      .grid-lines > *:nth-child(1) {
          grid-column: 1 / 4;
          grid-row: 1 / 3;
      }`
        },
        {
          title: "9. Positioning",
          code: `/* Static (default) */
      .static {
          position: static;
      }
      
      /* Relative */
      .relative {
          position: relative;
          top: 10px;
          left: 20px;
      }
      
      /* Absolute */
      .absolute {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 10;
      }
      
      /* Fixed */
      .fixed {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
      }
      
      /* Sticky */
      .sticky {
          position: sticky;
          top: 0;
          z-index: 100;
      }
      
      /* Z-index */
      .z-layers {
          position: relative;
      }
      
      .z-layers .back {
          z-index: 1;
      }
      
      .z-layers .front {
          z-index: 10;
      }`
        },
        {
          title: "10. Colors and Backgrounds",
          code: `/* Color values */
      .color-examples {
          color: red; /* Named color */
          color: #ff0000; /* Hex */
          color: rgb(255, 0, 0); /* RGB */
          color: rgba(255, 0, 0, 0.5); /* RGBA with opacity */
          color: hsl(0, 100%, 50%); /* HSL */
          color: hsla(0, 100%, 50%, 0.5); /* HSLA with opacity */
      }
      
      /* Background properties */
      .background {
          background-color: #f0f0f0;
          background-image: url('image.jpg');
          background-repeat: no-repeat; /* repeat, repeat-x, repeat-y, no-repeat */
          background-position: center center; /* x y */
          background-size: cover; /* cover, contain, auto, 100% 100% */
          background-attachment: fixed; /* scroll, fixed, local */
      }
      
      /* Background shorthand */
      .background-shorthand {
          background: #f0f0f0 url('image.jpg') no-repeat center center / cover;
      }
      
      /* Linear gradient */
      .gradient {
          background: linear-gradient(to right, #ff6b6b, #4ecdc4);
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5));
      }`
        },
        {
          title: "11. Typography",
          code: `/* Font properties */
      .typography {
          font-family: 'Arial', 'Helvetica', sans-serif;
          font-size: 16px;
          font-weight: bold; /* normal, bold, 100-900 */
          font-style: italic; /* normal, italic, oblique */
          font-variant: small-caps; /* normal, small-caps */
          line-height: 1.5; /* 1.5, 24px, 150% */
          text-align: center; /* left, right, center, justify */
          text-decoration: underline; /* none, underline, overline, line-through */
          text-transform: uppercase; /* none, uppercase, lowercase, capitalize */
          letter-spacing: 2px;
          word-spacing: 5px;
          text-indent: 20px;
      }
      
      /* Font shorthand */
      .font-shorthand {
          font: bold 16px/1.5 'Arial', sans-serif; /* style weight size/line-height family */
      }
      
      /* Text shadow */
      .text-shadow {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          text-shadow: 0 0 10px #ff0000;
      }
      
      /* Web fonts */
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
      
      .web-font {
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
      }`
        },
        {
          title: "12. Borders and Shadows",
          code: `/* Border properties */
      .border {
          border-width: 2px;
          border-style: solid; /* solid, dashed, dotted, double, groove, ridge, inset, outset */
          border-color: #333;
          border-radius: 10px; /* Rounded corners */
      }
      
      /* Border shorthand */
      .border-shorthand {
          border: 2px solid #333;
          border-top: 1px solid red;
          border-right: 3px dashed blue;
          border-bottom: 2px dotted green;
          border-left: 4px double orange;
      }
      
      /* Box shadow */
      .box-shadow {
          box-shadow: 2px 2px 4px rgba(0,0,0,0.3); /* x y blur color */
          box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Glow effect */
          box-shadow: inset 2px 2px 4px rgba(0,0,0,0.3); /* Inner shadow */
          box-shadow: 2px 2px 4px rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.2); /* Multiple shadows */
      }
      
      /* Border radius */
      .border-radius {
          border-radius: 10px; /* All corners */
          border-radius: 10px 20px; /* Top-left/bottom-right, top-right/bottom-left */
          border-radius: 10px 20px 30px 40px; /* Top-left, top-right, bottom-right, bottom-left */
          border-radius: 50%; /* Circle */
      }`
        },
        {
          title: "13. Transforms",
          code: `/* Transform properties */
      .transform {
          transform: translateX(50px); /* Move horizontally */
          transform: translateY(-20px); /* Move vertically */
          transform: translate(50px, -20px); /* Move both */
          transform: scale(1.5); /* Scale up */
          transform: scale(0.5, 2); /* Scale X and Y differently */
          transform: rotate(45deg); /* Rotate */
          transform: skew(10deg, 5deg); /* Skew */
          transform: matrix(1, 0, 0, 1, 50, 50); /* Matrix transform */
      }
      
      /* Multiple transforms */
      .multiple-transforms {
          transform: translate(50px, 50px) rotate(45deg) scale(1.2);
      }
      
      /* Transform origin */
      .transform-origin {
          transform-origin: center center; /* Default */
          transform-origin: top left;
          transform-origin: 50% 50%;
          transform: rotate(45deg);
      }
      
      /* 3D transforms */
      .transform-3d {
          transform: rotateX(45deg);
          transform: rotateY(45deg);
          transform: rotateZ(45deg);
          transform: perspective(1000px) rotateY(45deg);
      }`
        },
        {
          title: "14. Transitions",
          code: `/* Transition properties */
      .transition {
          transition-property: all; /* Specific properties: color, background-color, etc. */
          transition-duration: 0.3s; /* Time in seconds */
          transition-timing-function: ease; /* ease, linear, ease-in, ease-out, ease-in-out */
          transition-delay: 0.1s; /* Delay before transition starts */
      }
      
      /* Transition shorthand */
      .transition-shorthand {
          transition: all 0.3s ease 0.1s; /* property duration timing-function delay */
          transition: color 0.3s ease, background-color 0.5s linear;
      }
      
      /* Hover effects */
      .hover-effect {
          background-color: blue;
          color: white;
          padding: 10px;
          transition: all 0.3s ease;
      }
      
      .hover-effect:hover {
          background-color: red;
          transform: scale(1.1);
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      }
      
      /* Multiple transitions */
      .multiple-transitions {
          transition: 
              background-color 0.3s ease,
              transform 0.2s ease-out,
              box-shadow 0.4s ease-in;
      }`
        },
        {
          title: "15. Animations",
          code: `/* Keyframes */
      @keyframes slideIn {
          from {
              transform: translateX(-100%);
              opacity: 0;
          }
          to {
              transform: translateX(0);
              opacity: 1;
          }
      }
      
      @keyframes pulse {
          0% {
              transform: scale(1);
          }
          50% {
              transform: scale(1.1);
          }
          100% {
              transform: scale(1);
          }
      }
      
      /* Animation properties */
      .animation {
          animation-name: slideIn;
          animation-duration: 1s;
          animation-timing-function: ease;
          animation-delay: 0.5s;
          animation-iteration-count: 1; /* infinite, number */
          animation-direction: normal; /* normal, reverse, alternate, alternate-reverse */
          animation-fill-mode: forwards; /* none, forwards, backwards, both */
          animation-play-state: running; /* running, paused */
      }
      
      /* Animation shorthand */
      .animation-shorthand {
          animation: slideIn 1s ease 0.5s 1 forwards;
          animation: pulse 2s ease-in-out infinite;
      }
      
      /* Multiple animations */
      .multiple-animations {
          animation: 
              slideIn 1s ease,
              pulse 2s ease-in-out infinite 1s;
      }`
        },
        {
          title: "16. Media Queries",
          code: `/* Responsive design */
      /* Mobile first approach */
      .container {
          width: 100%;
          padding: 10px;
      }
      
      /* Tablet */
      @media screen and (min-width: 768px) {
          .container {
              width: 750px;
              margin: 0 auto;
              padding: 20px;
          }
      }
      
      /* Desktop */
      @media screen and (min-width: 1024px) {
          .container {
              width: 1000px;
              padding: 30px;
          }
      }
      
      /* Large screens */
      @media screen and (min-width: 1200px) {
          .container {
              width: 1200px;
          }
      }
      
      /* Orientation */
      @media screen and (orientation: landscape) {
          .landscape {
              display: block;
          }
      }
      
      @media screen and (orientation: portrait) {
          .portrait {
              display: block;
          }
      }
      
      /* Print styles */
      @media print {
          .no-print {
              display: none;
          }
          
          body {
              font-size: 12pt;
              line-height: 1.4;
          }
      }`
        },
        {
          title: "17. CSS Variables",
          code: `/* CSS Custom Properties (Variables) */
      :root {
          --primary-color: #007bff;
          --secondary-color: #6c757d;
          --success-color: #28a745;
          --danger-color: #dc3545;
          --warning-color: #ffc107;
          --info-color: #17a2b8;
          --light-color: #f8f9fa;
          --dark-color: #343a40;
          --font-family: 'Arial', sans-serif;
          --border-radius: 4px;
          --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      /* Using variables */
      .button {
          background-color: var(--primary-color);
          color: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          font-family: var(--font-family);
      }
      
      .button:hover {
          background-color: var(--secondary-color);
      }
      
      /* Fallback values */
      .fallback {
          background-color: var(--custom-color, #default-color);
      }
      
      /* Local variables */
      .component {
          --local-color: #ff0000;
          color: var(--local-color);
      }
      
      /* Dynamic variables with JavaScript */
      .dynamic {
          --dynamic-width: 100px;
          width: var(--dynamic-width);
      }`
        },
        {
          title: "18. CSS Grid Layout Advanced",
          code: `/* Advanced Grid */
      .advanced-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-auto-rows: minmax(100px, auto);
          grid-gap: 20px;
          grid-template-areas: 
              "header header header"
              "sidebar main main"
              "sidebar main main"
              "footer footer footer";
      }
      
      /* Named grid lines */
      .named-lines {
          display: grid;
          grid-template-columns: [sidebar-start] 200px [sidebar-end main-start] 1fr [main-end];
          grid-template-rows: [header-start] 100px [header-end content-start] auto [content-end footer-start] 100px [footer-end];
      }
      
      /* Grid item placement */
      .grid-item-advanced {
          grid-column: sidebar-start / main-end;
          grid-row: header-start / content-end;
          grid-area: main; /* Named area */
      }
      
      /* Auto-fit vs Auto-fill */
      .auto-fit {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
      
      .auto-fill {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
      
      /* Grid alignment */
      .grid-alignment {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-items: center; /* start, end, center, stretch */
          align-items: center;
          justify-content: center; /* start, end, center, stretch, space-around, space-between, space-evenly */
          align-content: center;
      }`
        },
        {
          title: "19. CSS Filters",
          code: `/* Filter properties */
      .filter {
          filter: blur(5px); /* Blur effect */
          filter: brightness(150%); /* Brightness */
          filter: contrast(200%); /* Contrast */
          filter: grayscale(100%); /* Grayscale */
          filter: hue-rotate(90deg); /* Hue rotation */
          filter: invert(100%); /* Invert colors */
          filter: opacity(50%); /* Opacity */
          filter: saturate(200%); /* Saturation */
          filter: sepia(100%); /* Sepia effect */
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5)); /* Drop shadow */
      }
      
      /* Multiple filters */
      .multiple-filters {
          filter: blur(2px) brightness(120%) contrast(150%) saturate(200%);
      }
      
      /* Hover effects with filters */
      .filter-hover {
          filter: grayscale(100%);
          transition: filter 0.3s ease;
      }
      
      .filter-hover:hover {
          filter: grayscale(0%);
      }
      
      /* Backdrop filter */
      .backdrop-filter {
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.1);
      }
      
      /* Image filters */
      .image-filters {
          filter: 
              brightness(110%)
              contrast(120%)
              saturate(150%)
              hue-rotate(10deg);
      }`
        },
        {
          title: "20. CSS Logical Properties",
          code: `/* Logical properties for RTL support */
      .logical {
          /* Instead of left/right, use start/end */
          margin-inline-start: 20px; /* margin-left in LTR, margin-right in RTL */
          margin-inline-end: 20px; /* margin-right in LTR, margin-left in RTL */
          padding-inline-start: 10px;
          padding-inline-end: 10px;
          
          /* Instead of top/bottom, use block */
          margin-block-start: 10px; /* margin-top */
          margin-block-end: 10px; /* margin-bottom */
          padding-block-start: 5px;
          padding-block-end: 5px;
          
          /* Border logical properties */
          border-inline-start: 2px solid black;
          border-inline-end: 2px solid black;
          border-block-start: 1px solid gray;
          border-block-end: 1px solid gray;
          
          /* Logical sizing */
          width: fit-content;
          height: fit-content;
          min-width: fit-content;
          max-width: fit-content;
      }
      
      /* Writing modes */
      .vertical-text {
          writing-mode: vertical-rl; /* vertical-right-to-left */
          text-orientation: mixed;
      }
      
      .horizontal-text {
          writing-mode: horizontal-tb; /* horizontal-top-to-bottom */
      }
      
      /* Logical positioning */
      .logical-position {
          position: absolute;
          inset-inline-start: 0; /* left in LTR, right in RTL */
          inset-block-start: 0; /* top */
          inset-inline-end: 0; /* right in LTR, left in RTL */
          inset-block-end: 0; /* bottom */
      }`
        }
      ]);
  return <CheatSheetLayout title="CSS Cheat Sheets" cheats={cssCheats} />;
}

export default CheatSheetCSS; 
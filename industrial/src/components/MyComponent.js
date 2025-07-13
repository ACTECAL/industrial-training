import React from 'react';

function MyComponent() {
  const headingStyle = {
    color: 'blue',
    fontSize: '28px',
    textAlign: 'center'
  };

  const paragraphStyle = {
    color: 'gray',
    fontStyle: 'italic',
    textAlign: 'center'
  };

  return (
    <div>
      <h1 style={headingStyle}>Hello from MyComponent!</h1>
      <p style={paragraphStyle}>This is a simple React component.</p>
    </div>
  );
}

export default MyComponent;
// src/pages/ResultPage.js
import React from 'react';

function Final() {
  const result = [
    { id: 1, name: 'Candidate A', votes: 120 },
    { id: 2, name: 'Candidate B', votes: 80 },
    { id: 3, name: 'Candidate C', votes: 30 }
  ];

  const winner = result.reduce((prev, current) => prev.votes > current.votes ? prev : current);

  return (
    <div className="container">
      <h2>🏆 Final Result</h2>
      {result.map(c => (
        <div key={c.id} className={`card ${c.name === winner.name ? 'winner' : ''}`}>
          <h3>{c.name}</h3>
          <p>Total Votes: {c.votes}</p>
        </div>
      ))}
    </div>
  );
}

export default Final;

// src/pages/CandidateListPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const dummyCandidates = {
  1: ['Amit', 'Riya', 'Suresh'],
  2: ['Python', 'JavaScript', 'C++'],
  3: ['Rohan', 'Sneha', 'Ajay']
};

function CandidateList() {
  const { id } = useParams();
  const candidates = dummyCandidates[id] || [];

  return (
    <div className="container">
      <h2>👥 Candidates List</h2>
      <ul>
        {candidates.map((name, index) => (
          <li key={index}>🧑 {name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CandidateList;

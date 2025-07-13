// src/VoteContext.js

import React, { createContext, useState } from 'react';

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [votes, setVotes] = useState([
    { name: 'Candidate A', value: 0 },
    { name: 'Candidate B', value: 0 },
    { name: 'Candidate C', value: 0 },
  ]);

  const surveyQuestion = "Who should be the next student union president?";

  const voteFor = (candidateName) => {
    setVotes(prevVotes =>
      prevVotes.map(v =>
        v.name === candidateName ? { ...v, value: v.value + 1 } : v
      )
    );
  };

  return (
    <VoteContext.Provider value={{ votes, voteFor, surveyQuestion }}>
      {children}
    </VoteContext.Provider>
  );
};

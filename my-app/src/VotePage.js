import React, { useContext, useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { VoteContext } from './VoteContext';
import './VotePage.css';

const candidates = [
  { id: 1, name: 'Candidate A', party: 'Party X', icon: '👤' },
  { id: 2, name: 'Candidate B', party: 'Party Y', icon: '👥' },
  { id: 3, name: 'Candidate C', party: 'Party Z', icon: '🏢' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function VotePage() {
  const { votes, voteFor, surveyQuestion } = useContext(VoteContext);
  const [votedFor, setVotedFor] = useState(null);

  const handleVote = (candidateName) => {
    voteFor(candidateName);
    setVotedFor(candidateName);
    setTimeout(() => setVotedFor(null), 1000);
  };

  return (
    <div className="vote-page-container">
      <h1 className="vote-page-title">Cast Your Vote</h1>
      <h2 className="survey-question">{surveyQuestion}</h2>

      <div className="voting-area">
        <div className="candidates-list">
          {candidates.map((c) => (
            <div
              className={`candidate-card ${votedFor === c.name ? 'voted' : ''}`}
              key={c.id}
            >
              <span className="candidate-icon">{c.icon}</span>
              <h3 className="candidate-name">{c.name}</h3>
              <p className="candidate-party">{c.party}</p>
              <button
                onClick={() => handleVote(c.name)}
                className="vote-btn"
                disabled={votedFor}
              >
                {votedFor === c.name ? 'Voted!' : 'Vote'}
              </button>
            </div>
          ))}
        </div>

        <div className="live-chart-container">
          <h3 className="chart-title">Live Results</h3>
          <PieChart width={300} height={300}>
            <Pie data={votes} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
              {votes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

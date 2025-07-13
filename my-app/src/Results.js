import React, { useContext } from 'react';
import { VoteContext } from './VoteContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const ResultsDashboard = () => {
  const { votes } = useContext(VoteContext);

  // Calculate total votes and find the winner
  const totalVotes = votes.reduce((sum, current) => sum + current.value, 0);
  const winner = votes.length > 0 ? votes.reduce((prev, current) => (prev.value > current.value) ? prev : current) : null;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Live Voting Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>Total Votes Cast</h2>
          <p className="stat-number">{totalVotes}</p>
        </div>
        <div className="stat-card">
          <h2>Current Winner</h2>
          <p className="stat-winner">{winner ? winner.name : 'N/A'}</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Vote Distribution</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={votes} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" name="Votes" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultsDashboard;
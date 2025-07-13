// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const surveys = [
  { id: 1, title: 'Student Union Election' },
  { id: 2, title: 'Favorite Programming Language' },
  { id: 3, title: 'College President Vote' }
];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>📋 Active Surveys</h2>
      <div className="survey-list">
        {surveys.map(survey => (
          <div key={survey.id} className="survey-card">
            <h3>{survey.title}</h3>
            <Link to={`/candidates/${survey.id}`} className="btn-sm">Candidates</Link>
            <Link to={`/vote/${survey.id}`} className="btn-sm">Vote Now</Link>
            <Link to={`/result/${survey.id}`} className="btn-sm">View Result</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

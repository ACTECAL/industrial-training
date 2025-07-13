// src/pages/SurveyListPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const surveys = [
  { id: 1, title: "Student Union Election" },
  { id: 2, title: "Favourite Tech Stack" },
  { id: 3, title: "College President Poll" },
];

function SurveyListPage() {
  return (
    <div className="container">
      <h2>🗳️ Available Surveys</h2>
      {surveys.map(survey => (
        <div key={survey.id} className="card">
          <h3>{survey.title}</h3>
          <Link to={`/vote/${survey.id}`} className="btn">Vote Now</Link>
        </div>
      ))}
    </div>
  );
}

export default SurveyListPage;

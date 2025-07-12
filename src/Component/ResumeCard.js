// src/components/ResumeCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResumeCard({ resume, onDelete }) {
  const navigate = useNavigate();

  // Handle missing resume data
  if (!resume) {
    return <div className="resume-card">Invalid resume data</div>;
  }

  const handleEdit = () => {
    navigate(`/resume/${resume.id}`);
  };

  const handleDelete = () => {
    if (onDelete && resume.id) {
      onDelete(resume.id);
    }
  };

  return (
    <div className="resume-card">
      <h3>{resume.title || 'Untitled Resume'}</h3>
      <p><strong>Template:</strong> {resume.template || 'Default'}</p>
      <p><strong>Last Edited:</strong> {resume.lastEdited || 'Unknown'}</p>

      <div className="card-actions">
        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
        <button className="btn btn-secondary">Preview</button>
        <button className="btn btn-secondary">Download</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ResumeCard;

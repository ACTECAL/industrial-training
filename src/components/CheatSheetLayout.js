import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './CheatSheetLayout.css';

function CheatSheetLayout({ title, cheats, onBack }) {
  const navigate = useNavigate();
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="cheatsheet-layout-container">
      <div className="cheatsheet-header">
        <Button className="cheatsheet-back-btn" onClick={onBack || (() => navigate(-1))}>
          &larr; Back
        </Button>
        <h2 className="cheatsheet-title">{title}</h2>
      </div>
      <ul className="cheatsheet-list">
        {cheats.map((item, idx) => (
          <li className="cheatsheet-item" key={idx}>
            <div className="cheatsheet-item-header">
              <strong>{item.title}</strong>
              <Button className="cheatsheet-copy-btn" onClick={() => handleCopy(item.code)} title="Copy">
                📋
              </Button>
            </div>
            <pre className="cheatsheet-code-block"><code>{item.code}</code></pre>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheatSheetLayout; 
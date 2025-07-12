import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeCard from '../Component/ResumeCard';
import '../styles/Dashboard.css';

function DashboardPage() {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  // Get username from localStorage with error handling
  const getUser = () => {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null;
    }
  };

  const user = getUser();
  const userEmail = user?.email || '';

  // Load resumes from localStorage on mount with error handling
  useEffect(() => {
    try {
      const savedResumes = localStorage.getItem('resumes');
      const parsedResumes = savedResumes ? JSON.parse(savedResumes) : [];
      setResumes(Array.isArray(parsedResumes) ? parsedResumes : []);
    } catch (error) {
      console.error('Error loading resumes from localStorage:', error);
      setResumes([]);
    }
  }, []);

  // Save updated resumes to localStorage
  const updateStorage = (newList) => {
    try {
      localStorage.setItem('resumes', JSON.stringify(newList));
      setResumes(newList);
    } catch (error) {
      console.error('Error saving resumes to localStorage:', error);
    }
  };

  const handleDelete = (id) => {
    const updated = resumes.filter((resume) => resume.id !== id);
    updateStorage(updated);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        Welcome{userEmail ? `, ${userEmail.split('@')[0]}` : ''} 👋
      </h1>

      <div className="dashboard-section">
        <h2 className="dashboard-section-title">Your Resumes</h2>
        {resumes.length > 0 ? (
          <div className="resume-grid">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} onDelete={handleDelete} />
            ))}
          </div>
        ) : (
          <div className="dashboard-empty">
            <p>No resumes yet. Start by choosing a template below!</p>
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <h2 className="dashboard-section-title">Create New Resume</h2>
        <div className="template-options">
          {/* Free Resume Templates */}
          <div className="template-card free-template">
            <h3>Free Resume Templates</h3>
            <p>Create and download a basic resume for free.</p>
            <div className="template-images">
              <div>
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bb.png" alt="Modern" />
                <div className="template-label">Modern</div>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4c4.png" alt="Simple" />
                <div className="template-label">Simple</div>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4d1.png" alt="Classic" />
                <div className="template-label">Classic</div>
              </div>
            </div>
            <ul className="template-features">
              <li>✔ Basic templates</li>
              <li>✔ Simple formatting</li>
              <li>✔ Download as PDF</li>
              <li>✖ No premium designs</li>
              <li>✖ No advanced sections</li>
              <li>✖ No priority support</li>
            </ul>
            <button
              className="create-btn"
              onClick={() => {
                const newResume = {
                  id: Date.now(),
                  title: `Untitled Resume`,
                  template: 'Modern',
                  lastEdited: new Date().toLocaleDateString(),
                  type: 'free'
                };
                updateStorage([...resumes, newResume]);
                navigate(`/resume/${newResume.id}`);
              }}
            >
              + Create Free Resume
            </button>
          </div>
          {/* Paid Resume Templates */}
          <div className="template-card paid-template">
            <h3>Paid Resume Templates</h3>
            <p>Unlock premium templates and features.</p>
            <div className="template-images">
              <div>
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f393.png" alt="Elegant" />
                <div className="template-label">Elegant</div>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4bc.png" alt="Professional" />
                <div className="template-label">Professional</div>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3a8.png" alt="Creative" />
                <div className="template-label">Creative</div>
              </div>
            </div>
            <ul className="template-features">
              <li>✔ All free features</li>
              <li>✔ Premium & modern templates</li>
              <li>✔ Advanced formatting options</li>
              <li>✔ Add custom sections</li>
              <li>✔ Priority customer support</li>
              <li>✔ No watermark</li>
            </ul>
            <button
              className="create-btn"
              onClick={() => {
                const newResume = {
                  id: Date.now(),
                  title: `Untitled Resume`,
                  template: 'Premium',
                  lastEdited: new Date().toLocaleDateString(),
                  type: 'paid'
                };
                updateStorage([...resumes, newResume]);
                navigate(`/resume/${newResume.id}`);
              }}
            >
              + Create Paid Resume
            </button>
          </div>
        </div>
      </div>
       </div>
  );
}

export default DashboardPage;
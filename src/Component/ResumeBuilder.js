import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PersonalInfoSection,
  SummarySection,
  ExperienceSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  CertificationsSection,
  LanguagesSection,
  AchievementsSection,
  ResumePreview
} from './ResumeSections';
import './ResumeBuilder.css';

function ResumeBuilder() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [resume, setResume] = useState({
    id: id || Date.now(),
    title: 'Untitled Resume',
    template: 'Modern',
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      website: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    achievements: []
  });
  const [activeSection, setActiveSection] = useState('personal');
  const [previewMode, setPreviewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load resume data from localStorage
  useEffect(() => {
    if (id) {
      try {
        const savedResumes = localStorage.getItem('resumes');
        const parsedResumes = savedResumes ? JSON.parse(savedResumes) : [];
        const existingResume = parsedResumes.find(r => r.id === parseInt(id));
        
        if (existingResume) {
          // Ensure all required properties exist
          const mergedResume = {
            ...resume,
            ...existingResume,
            personalInfo: {
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              address: '',
              linkedin: '',
              website: '',
              ...(existingResume.personalInfo || {})
            }
          };
          setResume(mergedResume);
        }
      } catch (error) {
        console.error('Error loading resume from localStorage:', error);
      }
    }
    setIsLoading(false);
  }, [id]);

  // Save resume to localStorage
  const saveResume = (updatedResume) => {
    const savedResumes = JSON.parse(localStorage.getItem('resumes')) || [];
    const existingIndex = savedResumes.findIndex(r => r.id === updatedResume.id);
    
    if (existingIndex >= 0) {
      savedResumes[existingIndex] = { ...updatedResume, lastEdited: new Date().toLocaleDateString() };
    } else {
      savedResumes.push({ ...updatedResume, lastEdited: new Date().toLocaleDateString() });
    }
    
    localStorage.setItem('resumes', JSON.stringify(savedResumes));
    setResume(updatedResume);
  };

  const updatePersonalInfo = (field, value) => {
    const updatedResume = {
      ...resume,
      personalInfo: { ...resume.personalInfo, [field]: value }
    };
    saveResume(updatedResume);
  };

  const updateField = (field, value) => {
    const updatedResume = { ...resume, [field]: value };
    saveResume(updatedResume);
  };

  const addItem = (section, item) => {
    const updatedResume = {
      ...resume,
      [section]: [...resume[section], { id: Date.now(), ...item }]
    };
    saveResume(updatedResume);
  };

  const updateItem = (section, id, updatedItem) => {
    const updatedResume = {
      ...resume,
      [section]: resume[section].map(item => 
        item.id === id ? { ...item, ...updatedItem } : item
      )
    };
    saveResume(updatedResume);
  };

  const removeItem = (section, id) => {
    const updatedResume = {
      ...resume,
      [section]: resume[section].filter(item => item.id !== id)
    };
    saveResume(updatedResume);
  };

  const downloadPDF = () => {
    alert('PDF download feature will be implemented here');
  };

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'summary', label: 'Summary', icon: '📝' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'languages', label: 'Languages', icon: '🌍' },
    { id: 'achievements', label: 'Achievements', icon: '⭐' }
  ];

  return (
    <div className="resume-builder">
      <div className="builder-header">
        <div className="builder-title">
          <input
            type="text"
            value={resume.title}
            onChange={(e) => updateField('title', e.target.value)}
            className="title-input"
            placeholder="Resume Title"
          />
        </div>
        <div className="builder-actions">
          <button 
            className="btn btn-secondary"
            onClick={() => setPreviewMode(!previewMode)}
          >
            {previewMode ? 'Edit Mode' : 'Preview'}
          </button>
          <button className="btn btn-primary" onClick={downloadPDF}>
            Download PDF
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
            Save & Exit
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <p>Loading resume...</p>
        </div>
      ) : (
        <div className="builder-content">
          {!previewMode ? (
            <>
              <div className="builder-sidebar">
                <div className="section-nav">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      className={`section-nav-item ${activeSection === section.id ? 'active' : ''}`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <span className="section-icon">{section.icon}</span>
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="builder-main">
                {activeSection === 'personal' && (
                  <PersonalInfoSection 
                    data={resume.personalInfo} 
                    onUpdate={updatePersonalInfo} 
                  />
                )}
                {activeSection === 'summary' && (
                  <SummarySection 
                    data={resume.summary} 
                    onUpdate={(value) => updateField('summary', value)} 
                  />
                )}
                {activeSection === 'experience' && (
                  <ExperienceSection 
                    data={resume.experience} 
                    onAdd={(item) => addItem('experience', item)}
                    onUpdate={updateItem}
                    onRemove={removeItem}
                  />
                )}
                {activeSection === 'education' && (
                  <EducationSection 
                    data={resume.education} 
                    onAdd={(item) => addItem('education', item)}
                    onUpdate={updateItem}
                    onRemove={removeItem}
                  />
                )}
                {activeSection === 'skills' && (
                  <SkillsSection 
                    data={resume.skills} 
                    onAdd={(item) => addItem('skills', item)}
                    onUpdate={updateItem}
                    onRemove={removeItem}
                  />
                )}
                {activeSection === 'projects' && (
                  <ProjectsSection 
                    data={resume.projects} 
                    onAdd={(item) => addItem('projects', item)}
                    onUpdate={updateItem}
                    onRemove={removeItem}
                  />
                )}
                {activeSection === 'certifications' && (
                  <CertificationsSection 
                    data={resume.certifications} 
                    onAdd={(item) => addItem('certifications', item)}
                    onUpdate={updateItem}
                    onRemove={removeItem}
                  />
                )}
                {activeSection === 'languages' && (
                  <LanguagesSection 
                    data={resume.languages} 
                    onAdd={(item) => addItem('languages', item)}
                    onUpdate={updateItem}
                    onRemove={removeItem}
                  />
                )}
                {activeSection === 'achievements' && (
                  <AchievementsSection 
                    data={resume.achievements} 
                    onAdd={(item) => addItem('achievements', item)}
                    onUpdate={updateItem}
                    onRemove={removeItem}
                  />
                )}
              </div>
            </>
          ) : (
            <ResumePreview resume={resume} />
          )}
        </div>
      )}
    </div>
  );
}

export default ResumeBuilder; 
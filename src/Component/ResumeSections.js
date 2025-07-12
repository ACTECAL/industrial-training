import React, { useState } from 'react';
import DatePicker from './DatePicker';

// Personal Information Section
export function PersonalInfoSection({ data, onUpdate }) {
  // Safety check for undefined data
  if (!data) {
    return (
      <div className="section-container">
        <h2>Personal Information</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="section-container">
      <h2>Personal Information</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={data.firstName || ''}
            onChange={(e) => onUpdate('firstName', e.target.value)}
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={data.lastName || ''}
            onChange={(e) => onUpdate('lastName', e.target.value)}
            placeholder="Doe"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={data.email || ''}
            onChange={(e) => onUpdate('email', e.target.value)}
            placeholder="john.doe@email.com"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={data.phone || ''}
            onChange={(e) => onUpdate('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="form-group full-width">
          <label>Address</label>
          <input
            type="text"
            value={data.address || ''}
            onChange={(e) => onUpdate('address', e.target.value)}
            placeholder="City, State, Country"
          />
        </div>
        <div className="form-group">
          <label>LinkedIn</label>
          <input
            type="url"
            value={data.linkedin || ''}
            onChange={(e) => onUpdate('linkedin', e.target.value)}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input
            type="url"
            value={data.website || ''}
            onChange={(e) => onUpdate('website', e.target.value)}
            placeholder="johndoe.com"
          />
        </div>
      </div>
    </div>
  );
}

// Summary Section
export function SummarySection({ data, onUpdate }) {
  return (
    <div className="section-container">
      <h2>Professional Summary</h2>
      <div className="form-group">
        <label>Summary</label>
        <textarea
          value={data || ''}
          onChange={(e) => onUpdate(e.target.value)}
          placeholder="Write a compelling professional summary that highlights your key strengths, experience, and career objectives..."
          rows={6}
        />
      </div>
    </div>
  );
}

// Experience Section
export function ExperienceSection({ data, onAdd, onUpdate, onRemove }) {
  const [newExperience, setNewExperience] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });

  // Safety check for undefined data
  const safeData = data || [];

  const handleAdd = () => {
    if (newExperience.title && newExperience.company) {
      onAdd(newExperience);
      setNewExperience({
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      });
    }
  };

  return (
    <div className="section-container">
      <h2>Work Experience</h2>
      
      <div className="add-item-form">
        <h3>Add New Experience</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              value={newExperience.title}
              onChange={(e) => setNewExperience({...newExperience, title: e.target.value})}
              placeholder="Software Engineer"
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              value={newExperience.company}
              onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
              placeholder="Tech Corp"
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={newExperience.location}
              onChange={(e) => setNewExperience({...newExperience, location: e.target.value})}
              placeholder="San Francisco, CA"
            />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <DatePicker
              value={newExperience.startDate}
              onChange={(date) => setNewExperience({...newExperience, startDate: date})}
              placeholder="Select start date"
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <DatePicker
              value={newExperience.endDate}
              onChange={(date) => setNewExperience({...newExperience, endDate: date})}
              placeholder="Select end date"
              disabled={newExperience.current}
            />
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={newExperience.current}
                onChange={(e) => setNewExperience({...newExperience, current: e.target.checked})}
              />
              Current Position
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={newExperience.description}
            onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
            placeholder="Describe your responsibilities and achievements..."
            rows={4}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Experience
        </button>
      </div>

      <div className="items-list">
        {safeData.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-header">
              <h4>{item.title}</h4>
              <button className="remove-btn" onClick={() => onRemove('experience', item.id)}>×</button>
            </div>
            <p><strong>{item.company}</strong> - {item.location}</p>
            <p>{item.startDate} - {item.current ? 'Present' : item.endDate}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Education Section
export function EducationSection({ data, onAdd, onUpdate, onRemove }) {
  const [newEducation, setNewEducation] = useState({
    degree: '',
    institution: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    gpa: '',
    description: ''
  });

  const handleAdd = () => {
    if (newEducation.degree && newEducation.institution) {
      onAdd(newEducation);
      setNewEducation({
        degree: '',
        institution: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        gpa: '',
        description: ''
      });
    }
  };

  return (
    <div className="section-container">
      <h2>Education</h2>
      
      <div className="add-item-form">
        <h3>Add New Education</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Degree</label>
            <input
              type="text"
              value={newEducation.degree}
              onChange={(e) => setNewEducation({...newEducation, degree: e.target.value})}
              placeholder="Bachelor of Science in Computer Science"
            />
          </div>
          <div className="form-group">
            <label>Institution</label>
            <input
              type="text"
              value={newEducation.institution}
              onChange={(e) => setNewEducation({...newEducation, institution: e.target.value})}
              placeholder="University Name"
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={newEducation.location}
              onChange={(e) => setNewEducation({...newEducation, location: e.target.value})}
              placeholder="City, State"
            />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <DatePicker
              value={newEducation.startDate}
              onChange={(date) => setNewEducation({...newEducation, startDate: date})}
              placeholder="Select start date"
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <DatePicker
              value={newEducation.endDate}
              onChange={(date) => setNewEducation({...newEducation, endDate: date})}
              placeholder="Select end date"
              disabled={newEducation.current}
            />
          </div>
          <div className="form-group">
            <label>GPA</label>
            <input
              type="text"
              value={newEducation.gpa}
              onChange={(e) => setNewEducation({...newEducation, gpa: e.target.value})}
              placeholder="3.8/4.0"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={newEducation.description}
            onChange={(e) => setNewEducation({...newEducation, description: e.target.value})}
            placeholder="Relevant coursework, honors, activities..."
            rows={3}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Education
        </button>
      </div>

      <div className="items-list">
        {data.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-header">
              <h4>{item.degree}</h4>
              <button className="remove-btn" onClick={() => onRemove('education', item.id)}>×</button>
            </div>
            <p><strong>{item.institution}</strong> - {item.location}</p>
            <p>{item.startDate} - {item.current ? 'Present' : item.endDate}</p>
            {item.gpa && <p>GPA: {item.gpa}</p>}
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Skills Section
export function SkillsSection({ data, onAdd, onUpdate, onRemove }) {
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Intermediate' });

  const handleAdd = () => {
    if (newSkill.name) {
      onAdd(newSkill);
      setNewSkill({ name: '', level: 'Intermediate' });
    }
  };

  return (
    <div className="section-container">
      <h2>Skills</h2>
      
      <div className="add-item-form">
        <h3>Add New Skill</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Skill Name</label>
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
              placeholder="JavaScript"
            />
          </div>
          <div className="form-group">
            <label>Proficiency Level</label>
            <select
              value={newSkill.level}
              onChange={(e) => setNewSkill({...newSkill, level: e.target.value})}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Skill
        </button>
      </div>

      <div className="skills-grid">
        {data.map((skill) => (
          <div key={skill.id} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
            <button className="remove-btn small" onClick={() => onRemove('skills', skill.id)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Projects Section
export function ProjectsSection({ data, onAdd, onUpdate, onRemove }) {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    startDate: '',
    endDate: ''
  });

  const handleAdd = () => {
    if (newProject.title) {
      onAdd(newProject);
      setNewProject({
        title: '',
        description: '',
        technologies: '',
        link: '',
        startDate: '',
        endDate: ''
      });
    }
  };

  return (
    <div className="section-container">
      <h2>Projects</h2>
      
      <div className="add-item-form">
        <h3>Add New Project</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Project Title</label>
            <input
              type="text"
              value={newProject.title}
              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
              placeholder="E-commerce Website"
            />
          </div>
          <div className="form-group">
            <label>Technologies Used</label>
            <input
              type="text"
              value={newProject.technologies}
              onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
              placeholder="React, Node.js, MongoDB"
            />
          </div>
          <div className="form-group">
            <label>Project Link</label>
            <input
              type="url"
              value={newProject.link}
              onChange={(e) => setNewProject({...newProject, link: e.target.value})}
              placeholder="https://github.com/username/project"
            />
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <DatePicker
              value={newProject.startDate}
              onChange={(date) => setNewProject({...newProject, startDate: date})}
              placeholder="Select start date"
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <DatePicker
              value={newProject.endDate}
              onChange={(date) => setNewProject({...newProject, endDate: date})}
              placeholder="Select end date"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={newProject.description}
            onChange={(e) => setNewProject({...newProject, description: e.target.value})}
            placeholder="Describe the project, your role, and key achievements..."
            rows={4}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Project
        </button>
      </div>

      <div className="items-list">
        {data.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-header">
              <h4>{item.title}</h4>
              <button className="remove-btn" onClick={() => onRemove('projects', item.id)}>×</button>
            </div>
            <p><strong>Technologies:</strong> {item.technologies}</p>
            {item.link && <p><strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></p>}
            <p><strong>Duration:</strong> {item.startDate} - {item.endDate}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Certifications Section
export function CertificationsSection({ data, onAdd, onUpdate, onRemove }) {
  const [newCert, setNewCert] = useState({
    name: '',
    issuer: '',
    date: '',
    link: ''
  });

  const handleAdd = () => {
    if (newCert.name && newCert.issuer) {
      onAdd(newCert);
      setNewCert({ name: '', issuer: '', date: '', link: '' });
    }
  };

  return (
    <div className="section-container">
      <h2>Certifications</h2>
      
      <div className="add-item-form">
        <h3>Add New Certification</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Certification Name</label>
            <input
              type="text"
              value={newCert.name}
              onChange={(e) => setNewCert({...newCert, name: e.target.value})}
              placeholder="AWS Certified Solutions Architect"
            />
          </div>
          <div className="form-group">
            <label>Issuing Organization</label>
            <input
              type="text"
              value={newCert.issuer}
              onChange={(e) => setNewCert({...newCert, issuer: e.target.value})}
              placeholder="Amazon Web Services"
            />
          </div>
          <div className="form-group">
            <label>Date Earned</label>
            <DatePicker
              value={newCert.date}
              onChange={(date) => setNewCert({...newCert, date: date})}
              placeholder="Select date earned"
            />
          </div>
          <div className="form-group">
            <label>Verification Link</label>
            <input
              type="url"
              value={newCert.link}
              onChange={(e) => setNewCert({...newCert, link: e.target.value})}
              placeholder="https://verify.aws.com/certificate"
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Certification
        </button>
      </div>

      <div className="items-list">
        {data.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-header">
              <h4>{item.name}</h4>
              <button className="remove-btn" onClick={() => onRemove('certifications', item.id)}>×</button>
            </div>
            <p><strong>Issuer:</strong> {item.issuer}</p>
            <p><strong>Date:</strong> {item.date}</p>
            {item.link && <p><strong>Verify:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">View Certificate</a></p>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Languages Section
export function LanguagesSection({ data, onAdd, onUpdate, onRemove }) {
  const [newLanguage, setNewLanguage] = useState({ name: '', proficiency: 'Intermediate' });

  const handleAdd = () => {
    if (newLanguage.name) {
      onAdd(newLanguage);
      setNewLanguage({ name: '', proficiency: 'Intermediate' });
    }
  };

  return (
    <div className="section-container">
      <h2>Languages</h2>
      
      <div className="add-item-form">
        <h3>Add New Language</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Language</label>
            <input
              type="text"
              value={newLanguage.name}
              onChange={(e) => setNewLanguage({...newLanguage, name: e.target.value})}
              placeholder="Spanish"
            />
          </div>
          <div className="form-group">
            <label>Proficiency Level</label>
            <select
              value={newLanguage.proficiency}
              onChange={(e) => setNewLanguage({...newLanguage, proficiency: e.target.value})}
            >
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Native">Native</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Language
        </button>
      </div>

      <div className="skills-grid">
        {data.map((item) => (
          <div key={item.id} className="skill-item">
            <span className="skill-name">{item.name}</span>
            <span className="skill-level">{item.proficiency}</span>
            <button className="remove-btn small" onClick={() => onRemove('languages', item.id)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Achievements Section
export function AchievementsSection({ data, onAdd, onUpdate, onRemove }) {
  const [newAchievement, setNewAchievement] = useState({ title: '', description: '', date: '' });

  const handleAdd = () => {
    if (newAchievement.title) {
      onAdd(newAchievement);
      setNewAchievement({ title: '', description: '', date: '' });
    }
  };

  return (
    <div className="section-container">
      <h2>Achievements & Awards</h2>
      
      <div className="add-item-form">
        <h3>Add New Achievement</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Achievement Title</label>
            <input
              type="text"
              value={newAchievement.title}
              onChange={(e) => setNewAchievement({...newAchievement, title: e.target.value})}
              placeholder="Employee of the Year"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <DatePicker
              value={newAchievement.date}
              onChange={(date) => setNewAchievement({...newAchievement, date: date})}
              placeholder="Select achievement date"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={newAchievement.description}
            onChange={(e) => setNewAchievement({...newAchievement, description: e.target.value})}
            placeholder="Describe the achievement and its significance..."
            rows={3}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Achievement
        </button>
      </div>

      <div className="items-list">
        {data.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-header">
              <h4>{item.title}</h4>
              <button className="remove-btn" onClick={() => onRemove('achievements', item.id)}>×</button>
            </div>
            <p><strong>Date:</strong> {item.date}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Resume Preview Component
export function ResumePreview({ resume }) {
  return (
    <div className="resume-preview">
      <div className="preview-container">
        <div className="preview-header">
          <h1>{resume.personalInfo.firstName} {resume.personalInfo.lastName}</h1>
          <div className="contact-info">
            {resume.personalInfo.email && <p>{resume.personalInfo.email}</p>}
            {resume.personalInfo.phone && <p>{resume.personalInfo.phone}</p>}
            {resume.personalInfo.address && <p>{resume.personalInfo.address}</p>}
            {resume.personalInfo.linkedin && <p>LinkedIn: {resume.personalInfo.linkedin}</p>}
            {resume.personalInfo.website && <p>Website: {resume.personalInfo.website}</p>}
          </div>
        </div>

        {resume.summary && (
          <div className="preview-section">
            <h2>Professional Summary</h2>
            <p>{resume.summary}</p>
          </div>
        )}

        {resume.experience.length > 0 && (
          <div className="preview-section">
            <h2>Work Experience</h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="preview-item">
                <h3>{exp.title}</h3>
                <p><strong>{exp.company}</strong> - {exp.location}</p>
                <p>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {resume.education.length > 0 && (
          <div className="preview-section">
            <h2>Education</h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="preview-item">
                <h3>{edu.degree}</h3>
                <p><strong>{edu.institution}</strong> - {edu.location}</p>
                <p>{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</p>
                {edu.gpa && <p>GPA: {edu.gpa}</p>}
                {edu.description && <p>{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {resume.skills.length > 0 && (
          <div className="preview-section">
            <h2>Skills</h2>
            <div className="skills-preview">
              {resume.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill.name} ({skill.level})
                </span>
              ))}
            </div>
          </div>
        )}

        {resume.projects.length > 0 && (
          <div className="preview-section">
            <h2>Projects</h2>
            {resume.projects.map((project, index) => (
              <div key={index} className="preview-item">
                <h3>{project.title}</h3>
                <p><strong>Technologies:</strong> {project.technologies}</p>
                {project.link && <p><strong>Link:</strong> <a href={project.link}>{project.link}</a></p>}
                <p><strong>Duration:</strong> {project.startDate} - {project.endDate}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}

        {resume.certifications.length > 0 && (
          <div className="preview-section">
            <h2>Certifications</h2>
            {resume.certifications.map((cert, index) => (
              <div key={index} className="preview-item">
                <h3>{cert.name}</h3>
                <p><strong>Issuer:</strong> {cert.issuer}</p>
                <p><strong>Date:</strong> {cert.date}</p>
              </div>
            ))}
          </div>
        )}

        {resume.languages.length > 0 && (
          <div className="preview-section">
            <h2>Languages</h2>
            <div className="skills-preview">
              {resume.languages.map((lang, index) => (
                <span key={index} className="skill-tag">
                  {lang.name} ({lang.proficiency})
                </span>
              ))}
            </div>
          </div>
        )}

        {resume.achievements.length > 0 && (
          <div className="preview-section">
            <h2>Achievements & Awards</h2>
            {resume.achievements.map((achievement, index) => (
              <div key={index} className="preview-item">
                <h3>{achievement.title}</h3>
                <p><strong>Date:</strong> {achievement.date}</p>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
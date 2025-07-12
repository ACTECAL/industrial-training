import React, { useState } from 'react';
import './FreeCourses.css';
import { useNavigate } from 'react-router-dom';

const freeCourses = [
  {
    image: '/c.png',
    title: 'C Programming',
    desc: 'Learn the basics of C programming language, syntax, and problem-solving.',
    notes: '/sample-notes.pdf',
    video: 'https://www.youtube.com/embed/aZb0iu4uGwA',
    cheatPath: '/cheatsheet/c',
  },
  {
    image: '/js.png',
    title: 'JavaScript',
    desc: 'Start your programming journey with JavaScript fundamentals and simple projects.',
    notes: '/sample-notes.pdf',
    video: 'https://www.youtube.com/embed/hKB-YGF14SY',
    cheatPath: '/cheatsheet/javascript',
  },
  {
    image: '/html.png',
    title: 'HTML',
    desc: 'Build the structure of web pages with HTML, the foundation of the web.',
    notes: '/sample-notes.pdf',
    video: 'https://www.youtube.com/embed/BsDoLVMnmZs',
    cheatPath: '/cheatsheet/html',
  },
  {
    image: '/rdbms.png',
    title: 'RDBMS',
    desc: 'Learn the basics of Relational Database Management Systems and SQL.',
    notes: '/sample-notes.pdf',
    video: 'https://www.youtube.com/embed/hlGoQC332VM',
    cheatPath: '/cheatsheet/rdbms',
  },
  {
    image: '/github.png',
    title: 'Git & GitHub',
    desc: 'Master version control with Git and collaborate using GitHub.',
    notes: '/sample-notes.pdf',
    video: 'https://www.youtube.com/embed/Ez8F0nW6S-w',
    cheatPath: '/cheatsheet/git',
  }
];

function FreeCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('video'); // 'video', 'cheatsheet'
  const navigate = useNavigate();

  const handleGetCourse = (course) => {
    setSelectedCourse(course);
    setActiveTab('video');
  };

  const closeCourseView = () => {
    setSelectedCourse(null);
    setActiveTab('video');
  };

  return (
    <div className="free-courses-container">
      <div className="free-courses-header-row">
        <button className="free-courses-back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
        <h2 className="free-courses-title">Free Courses</h2>
      </div>
      
      <ul className="free-courses-list">
        {freeCourses.map((course, idx) => (
          <li className="free-course-item" key={idx}>
            <strong><img src={course.image} alt={course.title} style={{width: 32, height: 32, verticalAlign: 'middle', marginRight: 8}} /> {course.title}</strong>
            <div className="free-course-desc">{course.desc}</div>
            <button 
              className="get-course-btn"
              onClick={() => handleGetCourse(course)}
            >
              Get Course
            </button>
          </li>
        ))}
      </ul>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="course-detail-modal">
          <div className="course-detail-content">
            <div className="course-detail-header">
              <h3><img src={selectedCourse.image} alt={selectedCourse.title} style={{width: 32, height: 32, verticalAlign: 'middle', marginRight: 8}} /> {selectedCourse.title}</h3>
              <button className="close-btn" onClick={closeCourseView}>&times;</button>
            </div>
            
            <div className="course-detail-body">
              {/* Main Video Area */}
              <div className="video-section">
                <iframe
                  width="100%"
                  height="400"
                  src={selectedCourse.video}
                  title={selectedCourse.title + ' Video'}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Left Side Options */}
              <div className="course-options">
                <div className="option-tabs">
                  <button 
                    className={`option-tab ${activeTab === 'video' ? 'active' : ''}`}
                    onClick={() => setActiveTab('video')}
                  >
                    📹 Video
                  </button>
                  <button 
                    className={`option-tab ${activeTab === 'cheatsheet' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cheatsheet')}
                  >
                    📋 Cheat Sheet
                  </button>
                </div>
                
                <div className="option-content">
                  {activeTab === 'video' && (
                    <div className="video-info">
                      <h4>Course Video</h4>
                      <p>Watch the complete {selectedCourse.title} tutorial</p>
                    </div>
                  )}
                  
                  {activeTab === 'cheatsheet' && (
                    <div className="cheatsheet-info">
                      <h4>Cheat Sheet</h4>
                      <p>Quick reference guide for {selectedCourse.title}</p>
                      <button 
                        className="view-cheatsheet-btn"
                        onClick={() => navigate(selectedCourse.cheatPath)}
                      >
                        View Cheat Sheet
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Notes Section Below */}
            <div className="notes-section">
              <h4>📝 Course Notes</h4>
              <p>Download comprehensive notes for {selectedCourse.title}</p>
              <a 
                href={selectedCourse.notes} 
                className="download-notes-btn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download Notes
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FreeCourses;
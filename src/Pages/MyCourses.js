import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyCourses.css';
import Button from '../components/Button';

function MyCourses({ user, purchasedCourses }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  if (!user) {
    navigate('/login');
    return null;
  }

  const filteredCourses = filter === 'all' 
    ? purchasedCourses 
    : purchasedCourses.filter(course => course.level.toLowerCase() === filter);

  const getProgressPercentage = (courseId) => {
    // Simulate progress based on course ID
    const progressMap = {
      'c-programming': 75,
      'cpp-programming': 45,
      'javascript': 90,
      'css': 60,
      'html': 100,
      'data-structures': 30,
      'rdbms': 55
    };
    return progressMap[courseId] || Math.floor(Math.random() * 100);
  };

  const getLastAccessed = (courseId) => {
    // Simulate last accessed dates
    const dates = {
      'c-programming': '2 days ago',
      'cpp-programming': '1 week ago',
      'javascript': 'Today',
      'css': '3 days ago',
      'html': '1 month ago',
      'data-structures': '2 weeks ago',
      'rdbms': '5 days ago'
    };
    return dates[courseId] || 'Never';
  };

  if (purchasedCourses.length === 0) {
    return (
      <div className="my-courses-container">
        <div className="my-courses-header">
          <Button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</Button>
          <h1>My Learning</h1>
        </div>
        <div className="empty-courses">
          <div className="empty-icon">📚</div>
          <h2>No courses purchased yet</h2>
          <p>Start your learning journey by exploring our premium courses</p>
          <Button className="browse-btn" onClick={() => navigate('/paid-courses')}>
            Browse Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-courses-container">
      <div className="my-courses-header">
        <Button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</Button>
        <h1>My Learning</h1>
        <div className="learning-stats">
          <div className="stat">
            <span className="stat-number">{purchasedCourses.length}</span>
            <span className="stat-label">Courses</span>
          </div>
          <div className="stat">
            <span className="stat-number">{purchasedCourses.reduce((sum, course) => sum + course.lessons, 0)}</span>
            <span className="stat-label">Lessons</span>
          </div>
          <div className="stat">
            <span className="stat-number">{purchasedCourses.reduce((sum, course) => sum + parseInt(course.duration), 0)}h</span>
            <span className="stat-label">Content</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Courses
          </button>
          <button 
            className={`filter-btn ${filter === 'beginner' ? 'active' : ''}`}
            onClick={() => setFilter('beginner')}
          >
            Beginner
          </button>
          <button 
            className={`filter-btn ${filter === 'intermediate' ? 'active' : ''}`}
            onClick={() => setFilter('intermediate')}
          >
            Intermediate
          </button>
          <button 
            className={`filter-btn ${filter === 'advanced' ? 'active' : ''}`}
            onClick={() => setFilter('advanced')}
          >
            Advanced
          </button>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course, index) => {
          const progress = getProgressPercentage(course.id);
          const lastAccessed = getLastAccessed(course.id);
          
          return (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <div className="course-thumbnail">
                  {course.image ? (
                    <img src={course.image} alt={course.title} className="course-img-thumb" style={{width: 48, height: 48, borderRadius: 8}} />
                  ) : (
                    <span className="course-icon">📚</span>
                  )}
                </div>
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p className="instructor">by {course.instructor}</p>
                  <div className="course-meta">
                    <span>⏱️ {course.duration}</span>
                    <span>📚 {course.lessons} lectures</span>
                    <span className="level-badge">{course.level}</span>
                  </div>
                </div>
              </div>

              <div className="progress-section">
                <div className="progress-header">
                  <span className="progress-label">Progress</span>
                  <span className="progress-percentage">{progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="last-accessed">
                  Last accessed: {lastAccessed}
                </div>
              </div>

              <div className="course-actions">
                <Button 
                  className="continue-btn"
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  {progress === 100 ? 'Review Course' : 'Continue Learning'}
                </Button>
                <Button 
                  className="secondary-btn"
                  onClick={() => {
                    if (course.cheatPath) {
                      navigate(course.cheatPath);
                    } else {
                      // fallback: remove '-programming' from id if present
                      const cheatId = course.id.replace(/-programming$/, '');
                      navigate(`/cheatsheet/${cheatId}`);
                    }
                  }}
                >
                  Cheat Sheet
                </Button>
                <Button 
                  className="secondary-btn"
                  onClick={() => navigate(`/course/${course.id}/notes`)}
                >
                  Notes
                </Button>
                {progress === 100 && (
                  <div className="completion-badge">
                    🏆 Course Completed
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="learning-tips">
        <h3>💡 Learning Tips</h3>
        <div className="tips-grid">
          <div className="tip">
            <h4>Set Daily Goals</h4>
            <p>Commit to learning for at least 30 minutes every day to build momentum.</p>
          </div>
          <div className="tip">
            <h4>Practice Regularly</h4>
            <p>Apply what you learn through hands-on projects and exercises.</p>
          </div>
          <div className="tip">
            <h4>Take Notes</h4>
            <p>Write down key concepts and review them regularly to reinforce learning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCourses; 
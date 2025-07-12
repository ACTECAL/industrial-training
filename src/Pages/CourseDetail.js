import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CourseDetail.css';
import Button from '../components/Button';

function CourseDetail({ user, purchasedCourses, addToCart, cart }) {
  const [courseData, setCourseData] = useState({
    'c-programming': {
      id: 'c-programming',
      title: 'C Programming',
      image: '/c.png',
      icon: '🅲',
      description: 'Learn the fundamentals of C programming language with hands-on projects.',
      instructor: 'Dr. Sarah Johnson',
      duration: '8 hours',
      lessons: 45,
      price: 29.99,
      curriculum: [
        { id: 1, title: 'Introduction to C Programming', duration: '15 min', completed: false },
        { id: 2, title: 'Variables and Data Types', duration: '25 min', completed: false },
        { id: 3, title: 'Control Structures', duration: '30 min', completed: false },
        { id: 4, title: 'Functions and Arrays', duration: '35 min', completed: false },
        { id: 5, title: 'Pointers and Memory Management', duration: '40 min', completed: false },
        { id: 6, title: 'File Handling', duration: '25 min', completed: false },
        { id: 7, title: 'Final Project: Calculator', duration: '45 min', completed: false }
      ],
      certificate: {
        title: 'C Programming Certificate',
        criteria: 'Complete all 7 lessons and final project',
        progress: 0
      }
    },
    'cpp-programming': {
      id: 'cpp-programming',
      title: 'C++ Programming',
      image: '/c++.png',
      icon: '➕➕',
      description: 'Master object-oriented programming concepts in C++.',
      instructor: 'Prof. Michael Chen',
      duration: '12 hours',
      lessons: 68,
      price: 39.99,
      curriculum: [
        { id: 1, title: 'Introduction to C++', duration: '20 min', completed: false },
        { id: 2, title: 'Classes and Objects', duration: '35 min', completed: false },
        { id: 3, title: 'Inheritance and Polymorphism', duration: '40 min', completed: false },
        { id: 4, title: 'Templates and STL', duration: '45 min', completed: false },
        { id: 5, title: 'Exception Handling', duration: '30 min', completed: false },
        { id: 6, title: 'Advanced Concepts', duration: '35 min', completed: false },
        { id: 7, title: 'Final Project: Library Management System', duration: '60 min', completed: false }
      ],
      certificate: {
        title: 'C++ Programming Certificate',
        criteria: 'Complete all 7 lessons and final project',
        progress: 0
      }
    },
    'javascript': {
      id: 'javascript',
      title: 'JavaScript',
      image: '/js.png',
      icon: '🟨',
      description: 'Learn JavaScript fundamentals and build interactive web applications.',
      instructor: 'Alex Rodriguez',
      duration: '10 hours',
      lessons: 52,
      price: 24.99,
      curriculum: [
        { id: 1, title: 'JavaScript Basics', duration: '20 min', completed: false },
        { id: 2, title: 'Variables and Functions', duration: '25 min', completed: false },
        { id: 3, title: 'DOM Manipulation', duration: '30 min', completed: false },
        { id: 4, title: 'Events and Event Handling', duration: '25 min', completed: false },
        { id: 5, title: 'Async Programming', duration: '35 min', completed: false },
        { id: 6, title: 'ES6+ Features', duration: '30 min', completed: false },
        { id: 7, title: 'Final Project: Todo App', duration: '45 min', completed: false }
      ],
      certificate: {
        title: 'JavaScript Certificate',
        criteria: 'Complete all 7 lessons and final project',
        progress: 0
      }
    },
    'css': {
      id: 'css',
      title: 'CSS',
      image: '/css.png',
      icon: '🎨',
      description: 'Master modern CSS techniques for beautiful web design.',
      instructor: 'Emma Wilson',
      duration: '6 hours',
      lessons: 38,
      price: 19.99,
      curriculum: [
        { id: 1, title: 'CSS Fundamentals', duration: '20 min', completed: false },
        { id: 2, title: 'Selectors and Properties', duration: '25 min', completed: false },
        { id: 3, title: 'Layout and Positioning', duration: '30 min', completed: false },
        { id: 4, title: 'Flexbox and Grid', duration: '35 min', completed: false },
        { id: 5, title: 'Responsive Design', duration: '25 min', completed: false },
        { id: 6, title: 'CSS Animations', duration: '30 min', completed: false },
        { id: 7, title: 'Final Project: Portfolio Website', duration: '40 min', completed: false }
      ],
      certificate: {
        title: 'CSS Certificate',
        criteria: 'Complete all 7 lessons and final project',
        progress: 0
      }
    },
    'html': {
      id: 'html',
      title: 'HTML',
      image: '/html.png',
      icon: '🌐',
      description: 'Build the foundation of web development with HTML.',
      instructor: 'David Kim',
      duration: '4 hours',
      lessons: 25,
      price: 14.99,
      curriculum: [
        { id: 1, title: 'HTML Basics', duration: '15 min', completed: false },
        { id: 2, title: 'Text and Links', duration: '20 min', completed: false },
        { id: 3, title: 'Images and Media', duration: '25 min', completed: false },
        { id: 4, title: 'Forms and Inputs', duration: '30 min', completed: false },
        { id: 5, title: 'Semantic HTML', duration: '20 min', completed: false },
        { id: 6, title: 'Tables and Lists', duration: '25 min', completed: false },
        { id: 7, title: 'Final Project: Personal Blog', duration: '35 min', completed: false }
      ],
      certificate: {
        title: 'HTML Certificate',
        criteria: 'Complete all 7 lessons and final project',
        progress: 0
      }
    },
    'data-structures': {
      id: 'data-structures',
      title: 'Data Structures',
      image: '/ds.png',
      icon: '🗃️',
      description: 'Master fundamental data structures for efficient programming.',
      instructor: 'Dr. Robert Smith',
      duration: '15 hours',
      lessons: 75,
      price: 44.99,
      curriculum: [
        { id: 1, title: 'Introduction to Data Structures', duration: '25 min', completed: false },
        { id: 2, title: 'Arrays and Linked Lists', duration: '35 min', completed: false },
        { id: 3, title: 'Stacks and Queues', duration: '30 min', completed: false },
        { id: 4, title: 'Trees and Binary Trees', duration: '40 min', completed: false },
        { id: 5, title: 'Graphs and Graph Algorithms', duration: '45 min', completed: false },
        { id: 6, title: 'Hash Tables', duration: '35 min', completed: false },
        { id: 7, title: 'Final Project: Algorithm Implementation', duration: '60 min', completed: false }
      ],
      certificate: {
        title: 'Data Structures Certificate',
        criteria: 'Complete all 7 lessons and final project',
        progress: 0
      }
    },
    'rdbms': {
      id: 'rdbms',
      title: 'RDBMS',
      image: '/rdbms.png',
      icon: '🗄️',
      description: 'Learn database management and SQL programming.',
      instructor: 'Lisa Thompson',
      duration: '9 hours',
      lessons: 42,
      price: 34.99,
      curriculum: [
        { id: 1, title: 'Database Fundamentals', duration: '20 min', completed: false },
        { id: 2, title: 'SQL Basics', duration: '30 min', completed: false },
        { id: 3, title: 'Data Manipulation', duration: '35 min', completed: false },
        { id: 4, title: 'Joins and Relationships', duration: '40 min', completed: false },
        { id: 5, title: 'Indexing and Optimization', duration: '30 min', completed: false },
        { id: 6, title: 'Advanced SQL', duration: '35 min', completed: false },
        { id: 7, title: 'Final Project: E-commerce Database', duration: '50 min', completed: false }
      ],
      certificate: {
        title: 'RDBMS Certificate',
        criteria: 'Complete all 7 lessons and final project',
        progress: 0
      }
    }
  });
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const courseInfo = courseData[courseId];
    if (courseInfo) {
      setCourse(courseInfo);
      // Load user progress from localStorage
      const savedProgress = localStorage.getItem(`progress_${courseId}_${user?.email}`);
      if (savedProgress) {
        setUserProgress(JSON.parse(savedProgress));
      }
    }
  }, [courseId, user]);

  const isCoursePurchased = () => {
    return purchasedCourses.some(course => course.id === courseId);
  };

  const isInCart = () => {
    return cart.some(course => course.id === courseId);
  };

  const handleLessonComplete = (lessonId) => {
    if (!isCoursePurchased()) return;

    const newProgress = {
      ...userProgress,
      [lessonId]: true
    };
    setUserProgress(newProgress);
    localStorage.setItem(`progress_${courseId}_${user?.email}`, JSON.stringify(newProgress));
  };

  const getProgressPercentage = () => {
    if (!course) return 0;
    const completedLessons = Object.keys(userProgress).filter(lessonId => userProgress[lessonId]).length;
    return Math.round((completedLessons / course.curriculum.length) * 100);
  };

  const canGetCertificate = () => {
    return getProgressPercentage() === 100;
  };

  const generateCertificate = () => {
    if (!canGetCertificate()) return;
    
    // Generate certificate data
    const certificateData = {
      courseName: course.title,
      studentName: user.email ? user.email.split('@')[0] : 'User',
      completionDate: new Date().toLocaleDateString(),
      instructor: course.instructor,
      certificateId: `CERT-${courseId.toUpperCase()}-${Date.now()}`
    };
    
    // Save certificate to localStorage
    const userCertificates = JSON.parse(localStorage.getItem(`certificates_${user?.email}`) || '[]');
    userCertificates.push(certificateData);
    localStorage.setItem(`certificates_${user?.email}`, JSON.stringify(userCertificates));
    
    setShowCertificate(true);
  };

  if (!course) {
    return (
      <div className="course-detail-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading course...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="course-detail-container">
        <div className="access-denied">
          <h2>Access Denied</h2>
          <p>Please <Button onClick={() => navigate('/login')}>login</Button> to view this course.</p>
        </div>
      </div>
    );
  }

  if (!isCoursePurchased()) {
    return (
      <div className="course-detail-container">
        <div className="course-preview">
          <div className="course-header">
            <Button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</Button>
            <div className="course-info">
              <div className="course-image">
                {course.image ? (
                  <img src={course.image} alt={course.title} style={{width: 64, height: 64, borderRadius: 12, marginBottom: 12}} />
                ) : (
                  <span className="course-icon" style={{fontSize: '3rem'}}>{course.icon}</span>
                )}
              </div>
              <h1>{course.title}</h1>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>by {course.instructor}</span>
                <span>⏱️ {course.duration}</span>
                <span>📚 {course.lessons} lessons</span>
              </div>
            </div>
          </div>

          <div className="preview-content">
            <h2>Course Preview</h2>
            <p>This is a preview of the course content. Purchase the course to access all lessons and earn your certificate.</p>
            
            <div className="curriculum-preview">
              <h3>What you'll learn:</h3>
              <ul>
                {course.curriculum.slice(0, 3).map(lesson => (
                  <li key={lesson.id}>✓ {lesson.title}</li>
                ))}
                <li>... and {course.curriculum.length - 3} more lessons</li>
              </ul>
            </div>

            <div className="purchase-section">
              <div className="price-info">
                <span className="price">₹{course.price}</span>
                <span className="original-price">₹{course.price * 1.5}</span>
                <span className="discount">33% off</span>
              </div>
              
              {isInCart() ? (
                <Button className="btn btn-primary" onClick={() => navigate('/checkout')}>
                  Go to Cart
                </Button>
              ) : (
                <Button className="btn btn-primary" onClick={() => addToCart(course)}>
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-container">
      <div className="course-header">
        <Button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</Button>
        <div className="course-info">
          <div className="course-image">
            {course.image ? (
              <img src={course.image} alt={course.title} style={{width: 64, height: 64, borderRadius: 12, marginBottom: 12}} />
            ) : (
              <span className="course-icon" style={{fontSize: '3rem'}}>{course.icon}</span>
            )}
          </div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="course-meta">
            <span>by {course.instructor}</span>
            <span>⏱️ {course.duration}</span>
            <span>📚 {course.lessons} lessons</span>
          </div>
        </div>
      </div>

      <div className="course-content">
        <div className="progress-section">
          <h3>Your Progress</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${getProgressPercentage()}%` }}></div>
          </div>
          <span className="progress-text">{getProgressPercentage()}% Complete</span>
          
          {canGetCertificate() && (
            <div className="certificate-section">
              <h4>🎉 Congratulations!</h4>
              <p>You've completed the course! Generate your certificate below.</p>
              <Button className="btn btn-success" onClick={generateCertificate}>
                Generate Certificate
              </Button>
            </div>
          )}
        </div>

        <div className="curriculum-section">
          <h3>Course Curriculum</h3>
          <div className="lessons-list">
            {course.curriculum.map(lesson => (
              <div key={lesson.id} className={`lesson-item ${userProgress[lesson.id] ? 'completed' : ''}`}>
                <div className="lesson-info">
                  <span className="lesson-number">{lesson.id}</span>
                  <span className="lesson-title">{lesson.title}</span>
                  <span className="lesson-duration">{lesson.duration}</span>
                </div>
                <div className="lesson-actions">
                  {userProgress[lesson.id] ? (
                    <span className="completed-badge">✓ Completed</span>
                  ) : (
                    <Button 
                      className="btn btn-secondary"
                      onClick={() => handleLessonComplete(lesson.id)}
                    >
                      Mark Complete
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showCertificate && (
        <div className="certificate-modal">
          <div className="certificate-content">
            <div className="certificate-header">
              <h2>🎓 Certificate of Completion</h2>
              <div className="certificate-seal">★</div>
              <Button className="close-btn" onClick={() => setShowCertificate(false)}>×</Button>
            </div>
            <div className="certificate-body">
              <div className="certificate-info">
                <p><strong>This is to certify that</strong></p>
                <h3>{user.email ? user.email.split('@')[0] : 'User'}</h3>
                <p>has successfully completed the course</p>
                <h4>{course.title}</h4>
                <p>under the instruction of <strong>{course.instructor}</strong></p>
                <p>on <strong>{new Date().toLocaleDateString()}</strong></p>
                <div className="certificate-signature">
                  <span className="sig-line"></span>
                  <span className="sig-label">Instructor Signature</span>
                </div>
                <div className="certificate-id">
                  Certificate ID: CERT-{courseId.toUpperCase()}-{Date.now()}
                </div>
              </div>
              <div className="certificate-actions">
                <Button className="btn btn-primary" onClick={() => window.print()}>
                  Print Certificate
                </Button>
                <Button className="btn btn-secondary" onClick={() => setShowCertificate(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail; 
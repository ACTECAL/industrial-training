import Button from '../components/Button';
import './CoursesPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CoursesPage() {
  const navigate = useNavigate();
  const [freeCourses, setFreeCourses] = useState([
    {
      title: "C Programming",
      description: "Learn the basics of C programming language, syntax, and problem-solving.",
      image: "/c.png",
      duration: "8 hours",
      instructor: "Dr. Sarah Johnson",
      rating: 4.8,
      students: 12450,
      level: "Beginner",
      category: "Programming"
    },
    {
      title: "JavaScript",
      description: "Start your programming journey with JavaScript fundamentals and simple projects.",
      image: "/js.png",
      duration: "10 hours",
      instructor: "Alex Rodriguez",
      rating: 4.7,
      students: 25680,
      level: "Beginner",
      category: "Web Development"
    },
    {
      title: "HTML",
      description: "Build the structure of web pages with HTML, the foundation of the web.",
      image: "/html.png",
      duration: "4 hours",
      instructor: "David Kim",
      rating: 4.5,
      students: 32450,
      level: "Beginner",
      category: "Web Development"
    },
    {
      title: "RDBMS",
      description: "Learn the basics of Relational Database Management Systems and SQL.",
      image: "/rdbms.png",
      duration: "9 hours",
      instructor: "Lisa Thompson",
      rating: 4.7,
      students: 15680,
      level: "Intermediate",
      category: "Database"
    },
    {
      title: "Git & GitHub",
      description: "Master version control with Git and collaborate using GitHub.",
      image: "/github.png",
      duration: "5 hours",
      instructor: "Tom Anderson",
      rating: 4.6,
      students: 28700,
      level: "Beginner",
      category: "Development Tools"
    }
  ]);

  const [paidCourses, setPaidCourses] = useState([
    {
      title: "C++ Programming",
      description: "Master object-oriented programming and advanced concepts in C++.",
      image: "/c++.png",
      duration: "12 hours",
      instructor: "Prof. Michael Chen",
      rating: 4.9,
      students: 18920,
      level: "Intermediate",
      category: "Programming",
      price: "₹39.99",
      originalPrice: "₹69.99"
    },
    {
      title: "CSS",
      description: "Style your web pages beautifully using modern CSS techniques.",
      image: "/css.png",
      duration: "6 hours",
      instructor: "Emma Wilson",
      rating: 4.6,
      students: 18750,
      level: "Beginner",
      category: "Web Development",
      price: "₹19.99",
      originalPrice: "₹34.99"
    },
    {
      title: "Data Structures",
      description: "Understand core data structures for efficient coding and interviews.",
      image: "/ds.png",
      duration: "15 hours",
      instructor: "Dr. Robert Smith",
      rating: 4.9,
      students: 9870,
      level: "Advanced",
      category: "Computer Science",
      price: "₹44.99",
      originalPrice: "₹79.99"
    },
    {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts with real-world projects.",
      image: "/python.png",
      duration: "14 hours",
      instructor: "Dr. Emily Brown",
      rating: 4.8,
      students: 21500,
      level: "Beginner",
      category: "Programming",
      price: "₹34.99",
      originalPrice: "₹59.99"
    },
    {
      title: "React.js",
      description: "Build modern web applications with React.js and component-based architecture.",
      image: "/react.png",
      duration: "16 hours",
      instructor: "Mark Johnson",
      rating: 4.9,
      students: 18200,
      level: "Intermediate",
      category: "Web Development",
      price: "₹49.99",
      originalPrice: "₹89.99"
    },
    {
      title: "Node.js",
      description: "Learn server-side JavaScript development with Node.js and Express.",
      image: "/node-js.png",
      duration: "12 hours",
      instructor: "Sarah Wilson",
      rating: 4.7,
      students: 15600,
      level: "Intermediate",
      category: "Web Development",
      price: "₹39.99",
      originalPrice: "₹69.99"
    },
    {
      title: "Machine Learning",
      description: "Introduction to machine learning algorithms and data science concepts.",
      image: "/machine-learning.png",
      duration: "20 hours",
      instructor: "Dr. James Miller",
      rating: 4.8,
      students: 8900,
      level: "Advanced",
      category: "Data Science",
      price: "₹59.99",
      originalPrice: "₹99.99"
    }
  ]);



  const handleAllFreeCourses = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Free courses button clicked!');
    navigate('/free-courses');
  };

  const handleAllPaidCourses = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Paid courses button clicked!');
    navigate('/paid-courses');
  };

  return (
    <div className="courses-container">
      {/* Header Section - Matching AboutPage */}
      <div className="courses-header">
        <h1>Explore Our <span className="gradient-text">Course Library</span></h1>
        <p>
          Choose from our comprehensive collection of programming courses. 
          Start with free courses or dive into premium content to accelerate your career.
        </p>
      </div>

      {/* Content Container */}
      <div className="courses-content">
        {/* Free Courses Section */}
        <div className="course-section">
          <h2>🎓 Free Courses</h2>
          <p>Start your learning journey with these free courses</p>
          <div className="courses-grid">
            {freeCourses.map((course, idx) => (
              <div className="course-card free" key={idx}>
                <div className="course-icon"><img src={course.image} alt={course.title} style={{width: 32, height: 32}} /></div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <span>by {course.instructor}</span>
                  <span>{course.duration}</span>
                </div>
                <div className="course-meta">
                  <span className="course-type free">FREE</span>
                  <span>★ {course.rating} ({course.students.toLocaleString()})</span>
                </div>
              </div>
            ))}
          </div>
          <div className="section-action" style={{textAlign: 'center', marginTop: '30px'}}>
            <Button 
              className="course-btn success" 
              onClick={handleAllFreeCourses}
              style={{
                padding: '15px 40px', 
                fontSize: '18px',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 10,
                pointerEvents: 'auto'
              }}
            >
              Get All Free Courses
            </Button>
          </div>
        </div>

        {/* Premium Courses Section */}
        <div className="course-section">
          <h2>⭐ Premium Courses</h2>
          <p>Advanced courses with comprehensive content and expert guidance</p>
          <div className="courses-grid">
            {paidCourses.map((course, idx) => (
              <div className="course-card premium" key={idx}>
                <div className="course-icon"><img src={course.image} alt={course.title} style={{width: 32, height: 32}} /></div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <span>by {course.instructor}</span>
                  <span>{course.duration}</span>
                </div>
                <div className="course-meta">
                  <span className="course-type paid">PREMIUM</span>
                  <span>★ {course.rating} ({course.students.toLocaleString()})</span>
                </div>
                <div className="course-meta">
                  <span className="price">{course.price}</span>
                  <span className="original-price">{course.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="section-action" style={{textAlign: 'center', marginTop: '30px'}}>
            <Button 
              className="course-btn primary" 
              onClick={handleAllPaidCourses}
              style={{
                padding: '15px 40px', 
                fontSize: '18px',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 10,
                pointerEvents: 'auto'
              }}
            >
              Buy All Premium Courses
            </Button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default CoursesPage;
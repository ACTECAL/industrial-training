import React, { useState } from 'react';
import './PaidCourses.css';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function PaidCourses({ user, purchasedCourses, addToCart, cart }) {
  const navigate = useNavigate();
  const [paidCourses, setPaidCourses] = useState([
    {
      id: 'cpp-programming',
      image: '/c++.png',
      title: 'C++ Programming',
      desc: 'Master object-oriented programming and advanced concepts in C++.',
      price: 39.99,
      originalPrice: 69.99,
      duration: '12 hours',
      lessons: 68,
      certificate: '#',
      notes: '#',
      video: '#',
      cheatPath: '/cheatsheet/cpp',
      instructor: 'Prof. Michael Chen',
      rating: 4.9,
      students: 18920,
      level: 'Intermediate',
      category: 'Programming'
    },
    {
      id: 'css',
      image: '/css.png',
      title: 'CSS',
      desc: 'Style your web pages beautifully using modern CSS techniques.',
      price: 19.99,
      originalPrice: 34.99,
      duration: '6 hours',
      lessons: 38,
      certificate: '#',
      notes: '#',
      video: '#',
      cheatPath: '/cheatsheet/css',
      instructor: 'Emma Wilson',
      rating: 4.6,
      students: 18750,
      level: 'Beginner',
      category: 'Web Development'
    },
    {
      id: 'data-structures',
      image: '/ds.png',
      title: 'Data Structures',
      desc: 'Understand core data structures for efficient coding and interviews.',
      price: 44.99,
      originalPrice: 79.99,
      duration: '15 hours',
      lessons: 75,
      certificate: '#',
      notes: '#',
      video: '#',
      cheatPath: '/cheatsheet/ds',
      instructor: 'Dr. Robert Smith',
      rating: 4.9,
      students: 9870,
      level: 'Advanced',
      category: 'Computer Science'
    },
    {
      id: 'python-programming',
      image: '/python.png',
      title: 'Python Programming',
      desc: 'Learn Python from basics to advanced concepts with real-world projects.',
      price: 34.99,
      originalPrice: 59.99,
      duration: '14 hours',
      lessons: 72,
      certificate: '#',
      notes: '#',
      video: '#',
      cheatPath: '/cheatsheet/python',
      instructor: 'Dr. Emily Brown',
      rating: 4.8,
      students: 21500,
      level: 'Beginner',
      category: 'Programming'
    },
    {
      id: 'react-js',
      image: '/react.png',
      title: 'React.js',
      desc: 'Build modern web applications with React.js and component-based architecture.',
      price: 49.99,
      originalPrice: 89.99,
      duration: '16 hours',
      lessons: 85,
      certificate: '#',
      notes: '#',
      video: '#',
      cheatPath: '/cheatsheet/react',
      instructor: 'Mark Johnson',
      rating: 4.9,
      students: 18200,
      level: 'Intermediate',
      category: 'Web Development'
    },
    {
      id: 'node-js',
      image: '/node-js.png',
      title: 'Node.js',
      desc: 'Learn server-side JavaScript development with Node.js and Express.',
      price: 39.99,
      originalPrice: 69.99,
      duration: '12 hours',
      lessons: 65,
      certificate: '#',
      notes: '#',
      video: '#',
      cheatPath: '/cheatsheet/nodejs',
      instructor: 'Sarah Wilson',
      rating: 4.7,
      students: 15600,
      level: 'Intermediate',
      category: 'Web Development'
    },
    {
      id: 'machine-learning',
      image: '/machine-learning.png',
      title: 'Machine Learning',
      desc: 'Introduction to machine learning algorithms and data science concepts.',
      price: 59.99,
      originalPrice: 99.99,
      duration: '20 hours',
      lessons: 95,
      certificate: '#',
      notes: '#',
      video: '#',
      cheatPath: '/cheatsheet/ml',
      instructor: 'Dr. James Miller',
      rating: 4.8,
      students: 8900,
      level: 'Advanced',
      category: 'Data Science'
    }
  ]);

  const isCoursePurchased = (courseId) => {
    return purchasedCourses.some(course => course.id === courseId);
  };

  const isInCart = (courseId) => {
    return cart.some(course => course.id === courseId);
  };

  const handleCourseAction = (course) => {
    if (isCoursePurchased(course.id)) {
      // Navigate to course content
      navigate(`/course/${course.id}`);
    } else if (isInCart(course.id)) {
      // Navigate to checkout
      navigate('/checkout');
    } else {
      // Add to cart
      addToCart(course);
    }
  };

  return (
    <div className="paid-courses-container">
      <div className="paid-courses-header-row">
        <Button className="paid-courses-back-btn" onClick={() => navigate(-1)}>&larr; Back</Button>
        <h2 className="paid-courses-title">Premium Courses</h2>
        {user && (
          <div className="cart-info">
            <span className="cart-count">{cart.length}</span>
            <Button className="cart-btn" onClick={() => navigate('/checkout')}>Go to Checkout</Button>
          </div>
        )}
      </div>
      
      {!user && (
        <div className="login-prompt">
          <p>Please <Button onClick={() => navigate('/login')}>login</Button> to purchase courses</p>
        </div>
      )}

      <div className="paid-courses-list">
        {paidCourses.map((course, idx) => (
          <div key={idx} className="paid-course-card glass-card">
            <div className="course-header">
              <div className="course-thumbnail">
                <span className="course-icon"><img src={course.image} alt={course.title} className="course-img-thumb" /></span>
              </div>
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.desc}</p>
                <div className="course-meta">
                  <span className="instructor">by {course.instructor}</span>
                  <span className="rating">⭐ {course.rating}</span>
                  <span className="students">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="course-details">
                  <span className="level">{course.level}</span>
                  <span className="duration">⏱️ {course.duration}</span>
                  <span className="lessons">📚 {course.lessons} lessons</span>
                </div>
              </div>
            </div>
            
            <div className="course-pricing">
              <div className="price-info">
                <span className="current-price">₹{course.price}</span>
                <span className="original-price">₹{course.originalPrice}</span>
                <span className="discount">{Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off</span>
              </div>
              
              {isCoursePurchased(course.id) && (
                <div className="purchased-badge">✓ Purchased</div>
              )}
            </div>

            <div className="course-actions">
              {isCoursePurchased(course.id) ? (
                <Button className="course-btn purchased" onClick={() => navigate(`/course/${course.id}`)}>View Course</Button>
              ) : (
                <Button 
                  className="course-btn buy"
                  onClick={() => handleCourseAction(course)}
                >
                  Buy Now
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaidCourses;
import React, { useState, useEffect } from 'react';
import AdminTable from '../components/AdminTable';
import AdminSidebar from '../components/AdminSidebar';
import './AdminDashboard.css';
import { MdDashboard, MdAdd } from 'react-icons/md';
import axios from 'axios';
import { get } from 'react-hook-form';
// Columns configuration for feature courses
const columns = [
  { key: 'course_name', label: 'Course Name', type: 'text', required: true },
  { key: 'logo', label: 'Logo', type: 'text' },
  { key: 'description', label: 'Description', type: 'text' },
  { key: 'author', label: 'Author', type: 'text' },
  { key: 'rating', label: 'Rating', type: 'number', min: 0, max: 5, step: 0.1 },
  { key: 'badge', label: 'Badge', type: 'select' }
];

function AddFeatureCourse() {
  const [courses, setCourses] = useState([]);
  const [activeSection, setActiveSection] = useState('menu');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle adding new course
  const handleAddRow = async (newCourse) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/course/create',newCourse, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });
    } catch (error) {
      console.log('Error adding course:', error);
    }
  };

  // Handle updating existing course
  const handleUpdateRow = async (courseId, updatedCourse) => {
    try {
      // Prepare data exactly as backend expects
      const updateData = {
        id: courseId,
        course_name: updatedCourse.course_name || '',
        logo: updatedCourse.logo || '',
        description: updatedCourse.description || '',
        author: updatedCourse.author || '',
        rating: updatedCourse.rating || 0,
        badge: updatedCourse.badge || ''
      };
      
      console.log('Updating course ID:', courseId);
      console.log('Update data:', updateData);
      
      const response = await axios.put(`http://localhost:5000/api/v1/course/edit`, updateData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Backend response:', response.data);
      
      if (response.data.success) {
        console.log('Course updated successfully!');
        
        // Refresh courses list
        const fetchCourses = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/v1/course/all');
            setCourses(response.data.data);
          } catch (error) {
            console.error('Error fetching courses:', error);
          }
        };
        fetchCourses();
      } else {
        console.log('Update failed:', response.data.message);
      }
      
    } catch (error) {
      console.error('Error updating course:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/course/all');
        setCourses(response.data.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, [])

  // Handle editing cell
  const handleEditCell = (rowIdx, colKey, value) => {
    const updated = courses.map((course, idx) =>
      idx === rowIdx ? { ...course, [colKey]: value } : course
    );
    setCourses(updated);
  };

  // Handle editing row
  const handleEditRow = (rowIdx) => {
    console.log('Edit row:', rowIdx);
  };

  // Handle deleting row
  const handleDeleteRow = async (rowIdx) => {
    try {
      const courseToDelete = courses[rowIdx];
      const courseId = courseToDelete.id;
      
      console.log('Deleting course ID:', courseId);
      
      // Backend expects id in request body
      const response = await axios.delete(`http://localhost:5000/api/v1/course/delete`, {
        data: { id: courseId },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Delete response:', response.data);
      
      if (response.data.success) {
        console.log('Course deleted successfully!');
        
        // Remove from local state
        const updatedCourses = courses.filter((_, index) => index !== rowIdx);
        setCourses(updatedCourses);
      } else {
        console.log('Delete failed:', response.data.message);
      }
      
    } catch (error) {
      console.error('Error deleting course:', error.response?.data || error.message);
    }
  };

  // Custom actions renderer
  const renderCustomActions = (row, rowIdx, setActiveDropdown, activeDropdown, handleEditRow) => {
    return (
      <div className="action-dropdown">
        <button 
          className="action-toggle-btn"
          onClick={() => setActiveDropdown(activeDropdown === rowIdx ? null : rowIdx)}
        >
          ⚙️
        </button>
        {activeDropdown === rowIdx && (
          <div className="action-modal-overlay" onClick={() => setActiveDropdown(null)}>
            <div className="action-modal" onClick={(e) => e.stopPropagation()}>
              <div className="action-modal-header">
                <h4>Choose Action</h4>
                <button 
                  className="action-modal-close"
                  onClick={() => setActiveDropdown(null)}
                >
                  ✕
                </button>
              </div>
              <div className="action-modal-content">
                <button 
                  onClick={() => {
                    handleEditRow(row, rowIdx);
                    setActiveDropdown(null);
                  }}
                  className="action-modal-btn edit"
                >
                  ✏️ Edit Course
                </button>
                <button 
                  onClick={() => {
                    handleDeleteRow(rowIdx);
                    setActiveDropdown(null);
                  }}
                  className="action-modal-btn delete"
                >
                  🗑️ Delete Course
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Handle sidebar section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSidebarOpen(false); // close sidebar on mobile after selection
  };

  // Hamburger button for mobile/desktop
  const handleSidebarToggle = () => {
    setSidebarOpen((open) => !open);
  };

  return (
    <div className="admin-dashboard-root">
      {/* Hamburger/Menu Button */}
      <button className="sidebar-toggle-btn" onClick={handleSidebarToggle}>
        <span className="sidebar-toggle-icon">&#9776;</span>
      </button>
      {/* Sidebar (slide-in) */}
      <AdminSidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        sidebarOpen={sidebarOpen}
      >
        <span className="sidebar-icon"><MdDashboard /></span>
        <span className="sidebar-icon plus-icon"><MdAdd /></span>
      </AdminSidebar>
      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
      {/* Main Content */}
      <div className="admin-main-content">
        {activeSection === 'menu' ? (
          <div className="recent-courses empty-state">
            <div className="empty-icon">🛠️</div>
            <h4>Admin Menu</h4>
            <p>Welcome to the Admin Dashboard. Select an option from the sidebar.</p>
          </div>
        ) : (
          <AdminTable
            title="Add Feature Course"
            columns={columns}
            data={courses}
            onAddRow={handleAddRow}
            onEditCell={handleEditCell}
            onDeleteRow={handleDeleteRow}
            onUpdateRow={handleUpdateRow}
            customActions={renderCustomActions}
          />
        )}
      </div>
    </div>
  );
}

export default AddFeatureCourse; 
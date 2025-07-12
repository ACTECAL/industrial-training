import React, { useState } from 'react';
import './AdminSidebar.css';

function AdminSidebar({ activeSection, onSectionChange, sidebarOpen }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Open submenu on hover or if Dashboard is active
  const handleDashboardMouseEnter = () => setSubmenuOpen(true);
  const handleDashboardMouseLeave = () => setSubmenuOpen(false);
  const handleDashboardClick = () => setSubmenuOpen((open) => !open);

  const isDashboardActive = activeSection === 'menu' || submenuOpen;

  return (
    <aside className={`admin-sidebar${sidebarOpen ? ' open' : ''}`}>
      <div className="admin-sidebar-title">
        Admin Panel
      </div>
      
      <div className="admin-sidebar-menu">
        <div
          className={`admin-sidebar-item${activeSection === 'menu' ? ' active' : ''}`}
          onClick={() => { onSectionChange('menu'); handleDashboardClick(); }}
          onMouseEnter={handleDashboardMouseEnter}
          onMouseLeave={handleDashboardMouseLeave}
          tabIndex={0}
          role="button"
          aria-expanded={submenuOpen}
          aria-label="Dashboard menu"
        >
          <span className="sidebar-icon" role="img" aria-label="dashboard">🏠</span>
          <span className="sidebar-label">Dashboard</span>
          <span className={`chevron-icon${submenuOpen ? ' open' : ''}`}>▼</span>
        </div>
        
        {isDashboardActive && (
          <div className="admin-sidebar-submenu">
            <div
              className={`admin-sidebar-item${activeSection === 'feature-courses' ? ' active' : ''}`}
              onClick={() => onSectionChange('feature-courses')}
              tabIndex={0}
              role="button"
              aria-label="Add feature course"
            >
              <span className="sidebar-icon plus-icon">+</span>
              <span className="sidebar-label">Add Feature Course</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default AdminSidebar; 
import React, { useState, useEffect, useRef } from 'react';
import './DatePicker.css';

const DatePicker = ({ 
  value, 
  onChange, 
  placeholder = "Select date", 
  disabled = false,
  minDate = null,
  maxDate = null,
  showYearPicker = true 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar' or 'year'
  const datePickerRef = useRef(null);

  // Generate years for year picker (from 1950 to current year + 10)
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear + 10; year >= 1950; year--) {
      years.push(year);
    }
    return years;
  };

  // Generate months
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get days in month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Handle date selection
  const handleDateSelect = (day) => {
    if (day) {
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      
      // Check min/max date constraints
      if (minDate && newDate < new Date(minDate)) return;
      if (maxDate && newDate > new Date(maxDate)) return;

      setSelectedDate(newDate);
      onChange(newDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD
      setIsOpen(false);
    }
  };

  // Handle month change
  const changeMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  // Handle year change
  const changeYear = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear() + direction, currentDate.getMonth(), 1));
  };

  // Handle year selection from year picker
  const handleYearSelect = (year) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setViewMode('calendar');
  };

  // Check if date is today
  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  // Check if date is selected
  const isSelected = (day) => {
    if (!selectedDate || !day) return false;
    return day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear();
  };

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsOpen(false);
        setViewMode('calendar');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format display value
  const formatDisplayValue = () => {
    if (!selectedDate) return '';
    return selectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="date-picker-container" ref={datePickerRef}>
      <input
        type="text"
        value={formatDisplayValue()}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        placeholder={placeholder}
        readOnly
        disabled={disabled}
        className={`date-picker-input ${disabled ? 'disabled' : ''}`}
      />
      
      {isOpen && (
        <div className="date-picker-dropdown">
          {viewMode === 'calendar' ? (
            <>
              {/* Header */}
              <div className="date-picker-header">
                <button 
                  className="date-picker-nav-btn"
                  onClick={() => changeMonth(-1)}
                >
                  ‹
                </button>
                
                <div className="date-picker-current">
                  <span 
                    className="date-picker-month"
                    onClick={() => setViewMode('month')}
                  >
                    {months[currentDate.getMonth()]}
                  </span>
                  {showYearPicker && (
                    <span 
                      className="date-picker-year"
                      onClick={() => setViewMode('year')}
                    >
                      {currentDate.getFullYear()}
                    </span>
                  )}
                </div>
                
                <button 
                  className="date-picker-nav-btn"
                  onClick={() => changeMonth(1)}
                >
                  ›
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="date-picker-calendar">
                {/* Week days header */}
                <div className="date-picker-weekdays">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="date-picker-weekday">{day}</div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="date-picker-days">
                  {generateCalendarDays().map((day, index) => (
                    <button
                      key={index}
                      className={`date-picker-day ${
                        !day ? 'empty' : ''
                      } ${
                        isToday(day) ? 'today' : ''
                      } ${
                        isSelected(day) ? 'selected' : ''
                      }`}
                      onClick={() => handleDateSelect(day)}
                      disabled={!day}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : viewMode === 'year' ? (
            <>
              {/* Year Picker Header */}
              <div className="date-picker-header">
                <button 
                  className="date-picker-nav-btn"
                  onClick={() => changeYear(-10)}
                >
                  ‹‹
                </button>
                
                <div className="date-picker-current">
                  <span className="date-picker-year-range">
                    {Math.floor(currentDate.getFullYear() / 10) * 10} - {Math.floor(currentDate.getFullYear() / 10) * 10 + 9}
                  </span>
                </div>
                
                <button 
                  className="date-picker-nav-btn"
                  onClick={() => changeYear(10)}
                >
                  ››
                </button>
              </div>

              {/* Year Grid */}
              <div className="date-picker-years">
                {generateYears()
                  .filter(year => year >= Math.floor(currentDate.getFullYear() / 10) * 10 && 
                                 year <= Math.floor(currentDate.getFullYear() / 10) * 10 + 9)
                  .map(year => (
                    <button
                      key={year}
                      className={`date-picker-year-btn ${
                        year === currentDate.getFullYear() ? 'current' : ''
                      } ${
                        selectedDate && year === selectedDate.getFullYear() ? 'selected' : ''
                      }`}
                      onClick={() => handleYearSelect(year)}
                    >
                      {year}
                    </button>
                  ))}
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default DatePicker; 
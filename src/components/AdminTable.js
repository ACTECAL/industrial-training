import React, { useState } from 'react';
import './AdminTable.css';
import { useForm } from 'react-hook-form';

function AdminTable({ 
  title, 
  columns, 
  data, 
  onDataChange, 
  onAddRow, 
  onEditCell,
  onDeleteRow,
  onUpdateRow,
  customActions
}) {
  // useForm ka use
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingRowId, setEditingRowId] = useState(null);

  // Edit mode me form prefill karne ke liye
  const handleEditRow = (rowData, rowIdx) => {
    setIsEditMode(true);
    setEditingRowId(rowData.id || rowIdx);
    columns.forEach(col => {
      setValue(col.key, rowData[col.key] || '');
    });
    console.log(rowData);
  };

  // Edit cancel karne ke liye
  const handleCancelEdit = () => {
    setIsEditMode(false);
    setEditingRowId(null);
    reset();
  };

  // Row delete karne ke liye
  const handleDeleteRow = (rowIdx) => {
    if (onDeleteRow) {
      onDeleteRow(rowIdx);
    }
  };

  // Form submit (add/update)
  const onSubmit = (form) => {
    if (isEditMode && onUpdateRow) {
      onUpdateRow(editingRowId, form);
      setIsEditMode(false);
      setEditingRowId(null);
    } else if (onAddRow) {
      onAddRow(form);
    }
    reset();
  };

  return (
    <div className="admin-table-container">
      {title && <h2 className="admin-table-title">{title}</h2>}
      {/* useForm se form */}
      <form onSubmit={handleSubmit(onSubmit)} className="admin-table-form">
        {columns.map(col => (
          <div key={col.key} style={{ display: 'inline-block', marginRight: 8 }}>
            <input
              name={col.key}
              type={col.type || 'text'}
              placeholder={col.label}
              {...register(col.key, { required: col.required ? `${col.label} required` : false })}
              className="admin-table-input"
              min={col.min}
              max={col.max}
              step={col.step}
            />
            {/* Error message dikhane ke liye */}
            {errors[col.key] && <span style={{ color: 'red', fontSize: 12 }}>{errors[col.key].message}</span>}
          </div>
        ))}
        <button type="submit" className="admin-table-btn">
          {isEditMode ? 'Update' : 'Add'}
        </button>
        {isEditMode && (
          <button 
            type="button" 
            onClick={handleCancelEdit}
            className="admin-table-btn cancel"
          >
            Cancel
          </button>
        )}
      </form>
      {/* Table */}
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              {columns.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((row, rowIdx) => (
              <tr key={rowIdx}>
                <td>{ rowIdx + 1}</td>
                {columns.map(col => (
                  <td key={col.key}>
                    {col.key === 'logo' && row[col.key] ? (
                      <img src={row[col.key]} alt="logo" className="admin-table-logo" />
                    ) : col.key === 'badge' ? (
                      <span className={`badge ${row[col.key] || 'default'}`}> 
                        {row[col.key] || 'Default'}
                      </span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
                <td>
                  {customActions ? (
                    customActions(row, rowIdx, setActiveDropdown, activeDropdown, handleEditRow)
                  ) : (
                    <div className="action-buttons">
                      <button 
                        onClick={() => handleEditRow(row, rowIdx)}
                        className="admin-table-edit-btn"
                        title="Edit this row"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => handleDeleteRow(rowIdx)}
                        className="admin-table-delete-btn"
                        title="Delete this row"
                      >
                        🗑️
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTable; 
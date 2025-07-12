import React from 'react';
import './ResumeTemplates.css';

// Template data with free and paid options
export const resumeTemplates = [
  {
    id: 'modern',
    name: 'Modern',
    category: 'free',
    description: 'Clean and professional design with modern typography',
    preview: '🎨',
    features: ['Professional layout', 'Easy to read', 'Mobile friendly'],
    color: '#2563eb',
    bestFor: 'All industries'
  },
  {
    id: 'classic',
    name: 'Classic',
    category: 'free',
    description: 'Traditional resume format with timeless appeal',
    preview: '📄',
    features: ['Traditional format', 'Widely accepted', 'Print friendly'],
    color: '#374151',
    bestFor: 'Conservative industries'
  },
  {
    id: 'creative',
    name: 'Creative',
    category: 'paid',
    description: 'Stand out with this unique and creative design',
    preview: '✨',
    features: ['Unique design', 'Color options', 'Custom styling'],
    color: '#7c3aed',
    bestFor: 'Creative fields'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    category: 'free',
    description: 'Simple and clean design focusing on content',
    preview: '⚪',
    features: ['Clean design', 'Focus on content', 'Easy scanning'],
    color: '#059669',
    bestFor: 'Tech & Design'
  },
  {
    id: 'executive',
    name: 'Executive',
    category: 'paid',
    description: 'Premium design for senior professionals',
    preview: '👔',
    features: ['Premium layout', 'Executive styling', 'Advanced formatting'],
    color: '#dc2626',
    bestFor: 'Senior positions'
  },
  {
    id: 'tech',
    name: 'Tech',
    category: 'paid',
    description: 'Perfect for software developers and tech professionals',
    preview: '💻',
    features: ['Tech-focused', 'Code highlighting', 'Project showcase'],
    color: '#ea580c',
    bestFor: 'Technology'
  },
  {
    id: 'academic',
    name: 'Academic',
    category: 'free',
    description: 'Ideal for research and academic positions',
    preview: '🎓',
    features: ['Academic format', 'Publication focus', 'Research emphasis'],
    color: '#0891b2',
    bestFor: 'Education & Research'
  },
  {
    id: 'corporate',
    name: 'Corporate',
    category: 'paid',
    description: 'Professional design for corporate environments',
    preview: '🏢',
    features: ['Corporate style', 'Business focus', 'Professional colors'],
    color: '#1f2937',
    bestFor: 'Business & Finance'
  },
  {
    id: 'startup',
    name: 'Startup',
    category: 'free',
    description: 'Dynamic and energetic design for startup culture',
    preview: '🚀',
    features: ['Dynamic layout', 'Modern feel', 'Startup friendly'],
    color: '#f59e0b',
    bestFor: 'Startups & Innovation'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    category: 'paid',
    description: 'Professional template designed for healthcare professionals',
    preview: '🏥',
    features: ['Healthcare focus', 'Certification display', 'Patient care emphasis'],
    color: '#10b981',
    bestFor: 'Healthcare'
  },
  {
    id: 'legal',
    name: 'Legal',
    category: 'paid',
    description: 'Sophisticated template for legal professionals',
    preview: '⚖️',
    features: ['Legal format', 'Case highlights', 'Professional appearance'],
    color: '#8b5cf6',
    bestFor: 'Legal'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    category: 'paid',
    description: 'Creative and results-driven design for marketers',
    preview: '📊',
    features: ['Results focus', 'Creative elements', 'Data visualization'],
    color: '#ef4444',
    bestFor: 'Marketing & Sales'
  },
  {
    id: 'gradient',
    name: 'Gradient',
    category: 'paid',
    description: 'Modern design with beautiful gradient accents',
    preview: '🌈',
    features: ['Gradient design', 'Modern aesthetics', 'Color customization'],
    color: '#ec4899',
    bestFor: 'Creative & Design'
  },
  {
    id: 'compact',
    name: 'Compact',
    category: 'free',
    description: 'Space-efficient design for experienced professionals',
    preview: '📋',
    features: ['Space efficient', 'Information dense', 'Experience focused'],
    color: '#6b7280',
    bestFor: 'Experienced professionals'
  },
  {
    id: 'elegant',
    name: 'Elegant',
    category: 'paid',
    description: 'Sophisticated and elegant design for luxury industries',
    preview: '💎',
    features: ['Elegant design', 'Luxury feel', 'Premium styling'],
    color: '#1e293b',
    bestFor: 'Luxury & Fashion'
  }
];

// Template Preview Component
export function TemplatePreview({ template, isSelected, onSelect, userSubscription = 'free' }) {
  const isPaidTemplate = template.category === 'paid';
  const canAccess = userSubscription === 'premium' || !isPaidTemplate;
  
  return (
    <div 
      className={`template-preview ${isSelected ? 'selected' : ''} ${!canAccess ? 'locked' : ''}`}
      onClick={() => canAccess && onSelect(template.id)}
    >
      <div className="template-header">
        <div className="template-icon" style={{ backgroundColor: template.color }}>
          {template.preview}
        </div>
        <div className="template-info">
          <h3>{template.name}</h3>
          <span className={`template-category ${template.category}`}>
            {template.category === 'paid' ? 'Premium' : 'Free'}
          </span>
        </div>
        {isPaidTemplate && userSubscription !== 'premium' && (
          <div className="lock-icon">🔒</div>
        )}
      </div>
      
      <p className="template-description">{template.description}</p>
      
      <div className="template-best-for">
        <span className="best-for-label">Best for:</span>
        <span className="best-for-value">{template.bestFor}</span>
      </div>
      
      <div className="template-features">
        {template.features.map((feature, index) => (
          <span key={index} className="feature-tag">{feature}</span>
        ))}
      </div>
      
      {isSelected && (
        <div className="selected-indicator">✓ Selected</div>
      )}
    </div>
  );
}

// Template Selection Modal
export function TemplateSelectionModal({ isOpen, onClose, onSelectTemplate, currentTemplate, userSubscription = 'free' }) {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [showPreview, setShowPreview] = React.useState(false);
  
  if (!isOpen) return null;

  const freeTemplates = resumeTemplates.filter(t => t.category === 'free');
  const paidTemplates = resumeTemplates.filter(t => t.category === 'paid');
  
  const filteredTemplates = selectedCategory === 'all' 
    ? resumeTemplates 
    : resumeTemplates.filter(t => t.category === selectedCategory);

  const stats = {
    total: resumeTemplates.length,
    free: freeTemplates.length,
    premium: paidTemplates.length
  };

  return (
    <div className="template-modal-overlay">
      <div className="template-modal">
        <div className="modal-header">
          <h2>Choose Your Resume Template</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="template-stats">
          <div className="stat-item">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Templates</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.free}</div>
            <div className="stat-label">Free Templates</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.premium}</div>
            <div className="stat-label">Premium Templates</div>
          </div>
        </div>
        
        <div className="subscription-banner">
          {userSubscription === 'free' && (
            <div className="upgrade-banner">
              <h3>🚀 Upgrade to Premium</h3>
              <p>Unlock premium templates and advanced features</p>
              <button className="btn btn-primary">Upgrade Now</button>
            </div>
          )}
        </div>

        <div className="templates-section">
          <div className="template-categories">
            <button 
              className={`category-filter ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Templates ({stats.total})
            </button>
            <button 
              className={`category-filter ${selectedCategory === 'free' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('free')}
            >
              Free ({stats.free})
            </button>
            <button 
              className={`category-filter ${selectedCategory === 'paid' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('paid')}
            >
              Premium ({stats.premium})
            </button>
          </div>

          <div className="templates-section">
            <div className="templates-section-header">
              <h3>
                {selectedCategory === 'all' ? 'All Templates' : 
                 selectedCategory === 'free' ? 'Free Templates' : 'Premium Templates'}
              </h3>
              <button 
                className="preview-toggle"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? 'Hide Previews' : 'Show Previews'}
              </button>
            </div>
            
            {showPreview ? (
              <div className="template-comparison-grid">
                {filteredTemplates.map(template => (
                  <TemplatePreviewWithResume
                    key={template.id}
                    template={template}
                    isSelected={currentTemplate === template.id}
                    onSelect={onSelectTemplate}
                    userSubscription={userSubscription}
                  />
                ))}
              </div>
            ) : (
              <div className="templates-grid">
                {filteredTemplates.map(template => (
                  <TemplatePreview
                    key={template.id}
                    template={template}
                    isSelected={currentTemplate === template.id}
                    onSelect={onSelectTemplate}
                    userSubscription={userSubscription}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onClose}>
            Apply Template
          </button>
        </div>
      </div>
    </div>
  );
}

// Template-specific styling functions
export const getTemplateStyles = (templateId) => {
  const styles = {
    modern: {
      container: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: 1.6
      },
      header: {
        borderBottom: '3px solid #2563eb',
        paddingBottom: '20px',
        marginBottom: '30px'
      },
      name: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#2563eb',
        margin: '0 0 10px 0'
      },
      contact: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        fontSize: '0.95rem',
        color: '#6b7280'
      },
      section: {
        marginBottom: '30px'
      },
      sectionTitle: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#1f2937',
        borderBottom: '2px solid #e5e7eb',
        paddingBottom: '8px',
        marginBottom: '20px'
      },
      item: {
        marginBottom: '25px'
      },
      itemTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 5px 0'
      },
      itemSubtitle: {
        fontSize: '1rem',
        color: '#6b7280',
        margin: '0 0 8px 0'
      },
      itemDate: {
        fontSize: '0.9rem',
        color: '#9ca3af',
        fontStyle: 'italic'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      },
      skillTag: {
        backgroundColor: '#dbeafe',
        color: '#1e40af',
        padding: '6px 12px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: '500'
      }
    },
    classic: {
      container: {
        fontFamily: "'Times New Roman', serif",
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#000000',
        lineHeight: 1.5
      },
      header: {
        textAlign: 'center',
        borderBottom: '2px solid #000000',
        paddingBottom: '20px',
        marginBottom: '30px'
      },
      name: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0 0 10px 0',
        textTransform: 'uppercase'
      },
      contact: {
        fontSize: '1rem',
        color: '#333333'
      },
      section: {
        marginBottom: '25px'
      },
      sectionTitle: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderBottom: '1px solid #000000',
        paddingBottom: '5px',
        marginBottom: '15px'
      },
      item: {
        marginBottom: '20px'
      },
      itemTitle: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        margin: '0 0 5px 0'
      },
      itemSubtitle: {
        fontSize: '1rem',
        fontStyle: 'italic',
        margin: '0 0 5px 0'
      },
      itemDate: {
        fontSize: '0.9rem',
        margin: '0 0 8px 0'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      },
      skillTag: {
        border: '1px solid #000000',
        padding: '4px 8px',
        fontSize: '0.9rem'
      }
    },
    minimal: {
      container: {
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        maxWidth: '700px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#ffffff',
        color: '#2d3748',
        lineHeight: 1.7
      },
      header: {
        marginBottom: '40px'
      },
      name: {
        fontSize: '2.2rem',
        fontWeight: '300',
        color: '#2d3748',
        margin: '0 0 15px 0'
      },
      contact: {
        fontSize: '0.95rem',
        color: '#718096',
        lineHeight: 1.8
      },
      section: {
        marginBottom: '35px'
      },
      sectionTitle: {
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#2d3748',
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      },
      item: {
        marginBottom: '25px',
        paddingLeft: '20px',
        borderLeft: '3px solid #e2e8f0'
      },
      itemTitle: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#2d3748',
        margin: '0 0 5px 0'
      },
      itemSubtitle: {
        fontSize: '0.95rem',
        color: '#718096',
        margin: '0 0 5px 0'
      },
      itemDate: {
        fontSize: '0.85rem',
        color: '#a0aec0',
        margin: '0 0 8px 0'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px'
      },
      skillTag: {
        backgroundColor: '#f7fafc',
        color: '#4a5568',
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '0.9rem',
        border: '1px solid #e2e8f0'
      }
    },
    startup: {
      container: {
        fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: 1.6
      },
      header: {
        background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '12px',
        marginBottom: '30px',
        textAlign: 'center'
      },
      name: {
        fontSize: '2.8rem',
        fontWeight: '700',
        margin: '0 0 10px 0',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
      },
      contact: {
        fontSize: '1rem',
        opacity: 0.9
      },
      section: {
        marginBottom: '30px'
      },
      sectionTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#f59e0b',
        borderBottom: '2px solid #fef3c7',
        paddingBottom: '8px',
        marginBottom: '20px'
      },
      item: {
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#fefbf3',
        borderRadius: '8px',
        borderLeft: '4px solid #f59e0b'
      },
      itemTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 5px 0'
      },
      itemSubtitle: {
        fontSize: '1rem',
        color: '#f59e0b',
        fontWeight: '500',
        margin: '0 0 8px 0'
      },
      itemDate: {
        fontSize: '0.9rem',
        color: '#6b7280',
        fontStyle: 'italic'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      },
      skillTag: {
        backgroundColor: '#fef3c7',
        color: '#92400e',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: '500'
      }
    },
    healthcare: {
      container: {
        fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: 1.6
      },
      header: {
        borderBottom: '3px solid #10b981',
        paddingBottom: '20px',
        marginBottom: '30px'
      },
      name: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#10b981',
        margin: '0 0 10px 0'
      },
      contact: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        fontSize: '0.95rem',
        color: '#6b7280'
      },
      section: {
        marginBottom: '30px'
      },
      sectionTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#10b981',
        borderBottom: '2px solid #d1fae5',
        paddingBottom: '8px',
        marginBottom: '20px'
      },
      item: {
        marginBottom: '25px',
        padding: '15px',
        backgroundColor: '#f0fdf4',
        borderRadius: '6px',
        borderLeft: '3px solid #10b981'
      },
      itemTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 5px 0'
      },
      itemSubtitle: {
        fontSize: '1rem',
        color: '#10b981',
        fontWeight: '500',
        margin: '0 0 8px 0'
      },
      itemDate: {
        fontSize: '0.9rem',
        color: '#6b7280',
        fontStyle: 'italic'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      },
      skillTag: {
        backgroundColor: '#d1fae5',
        color: '#065f46',
        padding: '6px 12px',
        borderRadius: '16px',
        fontSize: '0.9rem',
        fontWeight: '500'
      }
    },
    legal: {
      container: {
        fontFamily: "'Playfair Display', Georgia, serif",
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: 1.6
      },
      header: {
        textAlign: 'center',
        borderBottom: '2px solid #8b5cf6',
        paddingBottom: '20px',
        marginBottom: '30px'
      },
      name: {
        fontSize: '2.8rem',
        fontWeight: '700',
        color: '#8b5cf6',
        margin: '0 0 10px 0',
        fontFamily: "'Playfair Display', serif"
      },
      contact: {
        fontSize: '1rem',
        color: '#6b7280',
        fontStyle: 'italic'
      },
      section: {
        marginBottom: '30px'
      },
      sectionTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#8b5cf6',
        borderBottom: '1px solid #e9d5ff',
        paddingBottom: '8px',
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      },
      item: {
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#faf5ff',
        borderRadius: '8px',
        border: '1px solid #e9d5ff'
      },
      itemTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 5px 0'
      },
      itemSubtitle: {
        fontSize: '1rem',
        color: '#8b5cf6',
        fontStyle: 'italic',
        margin: '0 0 8px 0'
      },
      itemDate: {
        fontSize: '0.9rem',
        color: '#6b7280'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      },
      skillTag: {
        backgroundColor: '#e9d5ff',
        color: '#6b21a8',
        padding: '6px 12px',
        borderRadius: '4px',
        fontSize: '0.9rem',
        fontWeight: '500'
      }
    },
    marketing: {
      container: {
        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: 1.6
      },
      header: {
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '12px',
        marginBottom: '30px',
        textAlign: 'center'
      },
      name: {
        fontSize: '2.8rem',
        fontWeight: '700',
        margin: '0 0 10px 0',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
      },
      contact: {
        fontSize: '1rem',
        opacity: 0.9
      },
      section: {
        marginBottom: '30px'
      },
      sectionTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#ef4444',
        borderBottom: '2px solid #fecaca',
        paddingBottom: '8px',
        marginBottom: '20px'
      },
      item: {
        marginBottom: '25px',
        padding: '20px',
        backgroundColor: '#fef2f2',
        borderRadius: '8px',
        borderLeft: '4px solid #ef4444'
      },
      itemTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 5px 0'
      },
      itemSubtitle: {
        fontSize: '1rem',
        color: '#ef4444',
        fontWeight: '500',
        margin: '0 0 8px 0'
      },
      itemDate: {
        fontSize: '0.9rem',
        color: '#6b7280',
        fontStyle: 'italic'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      },
      skillTag: {
        backgroundColor: '#fecaca',
        color: '#991b1b',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: '500'
      }
    },
    gradient: {
      container: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: 1.6
      },
      header: {
        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '12px',
        marginBottom: '30px',
        textAlign: 'center'
      },
      name: {
        fontSize: '2.8rem',
        fontWeight: '700',
        margin: '0 0 10px 0',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
      },
      contact: {
        fontSize: '1rem',
        opacity: 0.9
      },
      section: {
        marginBottom: '30px'
      },
      sectionTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        borderBottom: '2px solid #fce7f3',
        paddingBottom: '8px',
        marginBottom: '20px'
      },
      item: {
        marginBottom: '25px',
        padding: '20px',
        background: 'linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 100%)',
        borderRadius: '8px',
        borderLeft: '4px solid #ec4899'
      },
      itemTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 5px 0'
      },
      itemSubtitle: {
        fontSize: '1rem',
        color: '#ec4899',
        fontWeight: '500',
        margin: '0 0 8px 0'
      },
      itemDate: {
        fontSize: '0.9rem',
        color: '#6b7280',
        fontStyle: 'italic'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      },
      skillTag: {
        background: 'linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%)',
        color: '#be185d',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: '500'
      }
    },
    compact: {
      container: {
        fontFamily: "'Roboto Condensed', -apple-system, BlinkMacSystemFont, sans-serif",
        maxWidth: '700px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: 1.4
      },
      header: {
        borderBottom: '2px solid #6b7280',
        paddingBottom: '15px',
        marginBottom: '25px'
      },
      name: {
        fontSize: '2.2rem',
        fontWeight: '700',
        color: '#6b7280',
        margin: '0 0 8px 0'
      },
      contact: {
        fontSize: '0.9rem',
        color: '#6b7280',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px'
      },
      section: {
        marginBottom: '20px'
      },
      sectionTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#6b7280',
        borderBottom: '1px solid #d1d5db',
        paddingBottom: '5px',
        marginBottom: '15px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      },
      item: {
        marginBottom: '15px',
        padding: '10px',
        backgroundColor: '#f9fafb',
        borderRadius: '4px'
      },
      itemTitle: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#1f2937',
        margin: '0 0 3px 0'
      },
      itemSubtitle: {
        fontSize: '0.9rem',
        color: '#6b7280',
        margin: '0 0 3px 0'
      },
      itemDate: {
        fontSize: '0.8rem',
        color: '#9ca3af',
        fontStyle: 'italic'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      },
      skillTag: {
        backgroundColor: '#e5e7eb',
        color: '#374151',
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '0.8rem',
        fontWeight: '500'
      }
    },
    elegant: {
      container: {
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#1f2937',
        lineHeight: 1.6
      },
      header: {
        textAlign: 'center',
        borderBottom: '1px solid #1e293b',
        paddingBottom: '25px',
        marginBottom: '35px'
      },
      name: {
        fontSize: '3rem',
        fontWeight: '300',
        color: '#1e293b',
        margin: '0 0 15px 0',
        fontFamily: "'Cormorant Garamond', serif",
        letterSpacing: '2px'
      },
      contact: {
        fontSize: '1rem',
        color: '#64748b',
        fontStyle: 'italic',
        letterSpacing: '0.5px'
      },
      section: {
        marginBottom: '35px'
      },
      sectionTitle: {
        fontSize: '1.5rem',
        fontWeight: '400',
        color: '#1e293b',
        borderBottom: '1px solid #cbd5e1',
        paddingBottom: '10px',
        marginBottom: '25px',
        textTransform: 'uppercase',
        letterSpacing: '3px'
      },
      item: {
        marginBottom: '30px',
        padding: '25px',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      },
      itemTitle: {
        fontSize: '1.3rem',
        fontWeight: '500',
        color: '#1e293b',
        margin: '0 0 8px 0',
        letterSpacing: '0.5px'
      },
      itemSubtitle: {
        fontSize: '1.1rem',
        color: '#64748b',
        fontStyle: 'italic',
        margin: '0 0 8px 0'
      },
      itemDate: {
        fontSize: '0.9rem',
        color: '#94a3b8',
        fontStyle: 'italic',
        letterSpacing: '0.5px'
      },
      skills: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px'
      },
      skillTag: {
        backgroundColor: '#f1f5f9',
        color: '#475569',
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '0.9rem',
        fontWeight: '400',
        border: '1px solid #cbd5e1',
        letterSpacing: '0.5px'
      }
    }
  };

  return styles[templateId] || styles.modern;
};

// Resume Preview Component
export function ResumePreview({ templateId, sampleData = null }) {
  const styles = getTemplateStyles(templateId);
  const data = sampleData || {
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    summary: 'Experienced software engineer with 5+ years in full-stack development, specializing in React, Node.js, and cloud technologies.',
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        date: '2021 - Present',
        description: 'Led development of scalable web applications using React and Node.js.'
      },
      {
        title: 'Software Engineer',
        company: 'Startup Inc',
        date: '2019 - 2021',
        description: 'Developed and maintained multiple client-facing applications.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        date: '2015 - 2019'
      }
    ],
    skills: ['React', 'Node.js', 'JavaScript', 'Python', 'AWS', 'Docker']
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.name}>{data.name}</h1>
        <div style={styles.contact}>
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.location}</span>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Professional Summary</h2>
        <p>{data.summary}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Work Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} style={styles.item}>
            <h3 style={styles.itemTitle}>{exp.title}</h3>
            <p style={styles.itemSubtitle}>{exp.company}</p>
            <p style={styles.itemDate}>{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} style={styles.item}>
            <h3 style={styles.itemTitle}>{edu.degree}</h3>
            <p style={styles.itemSubtitle}>{edu.school}</p>
            <p style={styles.itemDate}>{edu.date}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <div style={styles.skills}>
          {data.skills.map((skill, index) => (
            <span key={index} style={styles.skillTag}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Enhanced Template Preview with Resume Preview
export function TemplatePreviewWithResume({ template, isSelected, onSelect, userSubscription = 'free' }) {
  const isPaidTemplate = template.category === 'paid';
  const canAccess = userSubscription === 'premium' || !isPaidTemplate;
  
  return (
    <div className="template-preview-with-resume">
      <div 
        className={`template-preview ${isSelected ? 'selected' : ''} ${!canAccess ? 'locked' : ''}`}
        onClick={() => canAccess && onSelect(template.id)}
      >
        <div className="template-header">
          <div className="template-icon" style={{ backgroundColor: template.color }}>
            {template.preview}
          </div>
          <div className="template-info">
            <h3>{template.name}</h3>
            <span className={`template-category ${template.category}`}>
              {template.category === 'paid' ? 'Premium' : 'Free'}
            </span>
          </div>
          {isPaidTemplate && userSubscription !== 'premium' && (
            <div className="lock-icon">🔒</div>
          )}
        </div>
        
        <p className="template-description">{template.description}</p>
        
        <div className="template-best-for">
          <span className="best-for-label">Best for:</span>
          <span className="best-for-value">{template.bestFor}</span>
        </div>
        
        <div className="template-features">
          {template.features.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        
        {isSelected && (
          <div className="selected-indicator">✓ Selected</div>
        )}
      </div>
      
      <div className="resume-preview-container">
        <ResumePreview templateId={template.id} />
      </div>
    </div>
  );
}

export default resumeTemplates; 
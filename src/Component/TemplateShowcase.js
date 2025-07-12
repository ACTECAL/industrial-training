import React, { useState } from 'react';
import { 
  resumeTemplates, 
  TemplatePreview, 
  TemplatePreviewWithResume,
  ResumePreview 
} from './ResumeTemplates';
import './TemplateShowcase.css';

export default function TemplateShowcase({ userSubscription = 'free' }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showDetailedPreview, setShowDetailedPreview] = useState(false);

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

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    setShowDetailedPreview(true);
  };

  return (
    <div className="template-showcase">
      <div className="showcase-header">
        <h1>Resume Templates</h1>
        <p>Choose from our collection of professionally designed resume templates</p>
        
        <div className="showcase-stats">
          <div className="stat-card">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Templates</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.free}</div>
            <div className="stat-label">Free Templates</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.premium}</div>
            <div className="stat-label">Premium Templates</div>
          </div>
        </div>
      </div>

      <div className="showcase-filters">
        <div className="category-filters">
          <button 
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Templates ({stats.total})
          </button>
          <button 
            className={`category-btn ${selectedCategory === 'free' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('free')}
          >
            Free ({stats.free})
          </button>
          <button 
            className={`category-btn ${selectedCategory === 'paid' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('paid')}
          >
            Premium ({stats.premium})
          </button>
        </div>

        <div className="view-toggle">
          <button 
            className={`view-btn ${!showDetailedPreview ? 'active' : ''}`}
            onClick={() => setShowDetailedPreview(false)}
          >
            Grid View
          </button>
          <button 
            className={`view-btn ${showDetailedPreview ? 'active' : ''}`}
            onClick={() => setShowDetailedPreview(true)}
          >
            Detailed View
          </button>
        </div>
      </div>

      {userSubscription === 'free' && (
        <div className="upgrade-notice">
          <div className="upgrade-content">
            <h3>🚀 Unlock Premium Templates</h3>
            <p>Get access to all premium templates and advanced features</p>
            <ul>
              <li>✓ Professional designs for specific industries</li>
              <li>✓ Advanced customization options</li>
              <li>✓ Priority support</li>
              <li>✓ Export to multiple formats</li>
            </ul>
            <button className="upgrade-btn">Upgrade to Premium</button>
          </div>
        </div>
      )}

      <div className="templates-container">
        {showDetailedPreview ? (
          <div className="detailed-templates">
            {filteredTemplates.map(template => (
              <div key={template.id} className="detailed-template-card">
                <TemplatePreviewWithResume
                  template={template}
                  isSelected={selectedTemplate === template.id}
                  onSelect={handleTemplateSelect}
                  userSubscription={userSubscription}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="templates-grid">
            {filteredTemplates.map(template => (
              <TemplatePreview
                key={template.id}
                template={template}
                isSelected={selectedTemplate === template.id}
                onSelect={handleTemplateSelect}
                userSubscription={userSubscription}
              />
            ))}
          </div>
        )}
      </div>

      {selectedTemplate && (
        <div className="template-detail-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Template Details</h2>
              <button 
                className="close-btn" 
                onClick={() => setSelectedTemplate(null)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="template-info-detail">
                <div className="template-header-detail">
                  <div className="template-icon-large">
                    {resumeTemplates.find(t => t.id === selectedTemplate)?.preview}
                  </div>
                  <div className="template-meta">
                    <h3>{resumeTemplates.find(t => t.id === selectedTemplate)?.name}</h3>
                    <span className={`template-category ${resumeTemplates.find(t => t.id === selectedTemplate)?.category}`}>
                      {resumeTemplates.find(t => t.id === selectedTemplate)?.category === 'paid' ? 'Premium' : 'Free'}
                    </span>
                  </div>
                </div>
                
                <div className="template-description-detail">
                  <p>{resumeTemplates.find(t => t.id === selectedTemplate)?.description}</p>
                </div>
                
                <div className="template-features-detail">
                  <h4>Features:</h4>
                  <ul>
                    {resumeTemplates.find(t => t.id === selectedTemplate)?.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="template-best-for-detail">
                  <h4>Best for:</h4>
                  <p>{resumeTemplates.find(t => t.id === selectedTemplate)?.bestFor}</p>
                </div>
              </div>
              
              <div className="template-preview-detail">
                <h4>Preview:</h4>
                <div className="preview-container">
                  <ResumePreview templateId={selectedTemplate} />
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <button 
                className="btn btn-secondary" 
                onClick={() => setSelectedTemplate(null)}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Use This Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
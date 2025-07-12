import React from 'react';
import TemplateShowcase from '../Component/TemplateShowcase';
import Navbar from '../Component/Navbar';
import './TemplatesPage.css';

export default function TemplatesPage() {
  // Mock user subscription - you can replace this with actual user data
  const userSubscription = 'free'; // or 'premium'

  return (
    <div className="templates-page">
      <Navbar />
      <div className="templates-content">
        <TemplateShowcase userSubscription={userSubscription} />
      </div>
    </div>
  );
} 
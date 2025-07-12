import React from 'react';

export default function ContactPage() {
  return (
    <div className="contact-page" style={{ maxWidth: 600, margin: '40px auto', padding: 24, background: 'white', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or need support, please reach out to us!</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Email:</strong> support@resumebuilder.com</li>
        <li><strong>Live Chat:</strong> Available 24/7 for instant support</li>
        <li><strong>Help Center:</strong> Comprehensive guides and tutorials</li>
      </ul>
    </div>
  );
} 
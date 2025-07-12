import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Certificates.css';
import Button from '../components/Button';

function Certificates({ user }) {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (user) {
      let userCertificates = JSON.parse(localStorage.getItem(`certificates_${user.email}`) || '[]');
      // Only show unique certificates per courseName (most recent)
      userCertificates = userCertificates.reduceRight((acc, cert) => {
        if (!acc.find(c => c.courseName === cert.courseName)) acc.push(cert);
        return acc;
      }, []).reverse();
      setCertificates(userCertificates);
    }
  }, [user]);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const printCertificate = () => {
    window.print();
  };

  if (!user) {
    return (
      <div className="certificates-container">
        <div className="access-denied">
          <h2>Access Denied</h2>
          <p>Please <Button onClick={() => navigate('/login')}>login</Button> to view your certificates.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="certificates-container">
      <div className="certificates-header">
        <Button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</Button>
        <h1>My Certificates</h1>
        <p>Your earned certificates from completed courses</p>
      </div>

      {certificates.length === 0 ? (
        <div className="no-certificates">
          <div className="no-certificates-icon">🎓</div>
          <h3>No Certificates Yet</h3>
          <p>Complete courses to earn your certificates!</p>
          <Button className="btn btn-primary" onClick={() => navigate('/courses')}>Go to Courses</Button>
        </div>
      ) : (
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="certificate-card"
              onClick={() => handleCertificateClick(certificate)}
            >
              <div className="certificate-icon">🎓</div>
              <div className="certificate-info">
                <h3>{certificate.courseName}</h3>
                <p>Completed on {certificate.completionDate}</p>
                <p>Instructor: {certificate.instructor}</p>
                <span className="certificate-id">ID: {certificate.certificateId}</span>
              </div>
              <div className="certificate-actions">
                <Button className="btn btn-secondary">View</Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCertificate && (
        <div className="certificate-modal">
          <div className="certificate-content">
            <div className="certificate-header">
              <h2>🎓 Certificate of Completion</h2>
              <Button className="close-btn" onClick={closeCertificate}>×</Button>
            </div>
            <div className="certificate-body">
              <div className="certificate-info">
                <p><strong>This is to certify that</strong></p>
                <h3>{selectedCertificate.studentName}</h3>
                <p>has successfully completed the course</p>
                <h4>{selectedCertificate.courseName}</h4>
                <p>under the instruction of <strong>{selectedCertificate.instructor}</strong></p>
                <p>on <strong>{selectedCertificate.completionDate}</strong></p>
                <div className="certificate-id">
                  Certificate ID: {selectedCertificate.certificateId}
                </div>
              </div>
              <div className="certificate-actions">
                <Button className="btn btn-primary" onClick={printCertificate}>Print Certificate</Button>
                <Button className="btn btn-secondary" onClick={closeCertificate}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates; 
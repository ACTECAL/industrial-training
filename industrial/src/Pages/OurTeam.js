import React from 'react';
import './OurTeam.css';

export default function OurTeam() {
  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      <div className="team-list">
        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Amit Verma" />
          <h4>Dr. Amit Verma</h4>
          <p>Chief Medical Officer</p>
        </div>
        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Neha Sharma" />
          <h4>Neha Sharma</h4>
          <p>Blood Bank Coordinator</p>
        </div>
        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Sandeep Singh" />
          <h4>Sandeep Singh</h4>
          <p>IT & Database Manager</p>
        </div>
        <div className="team-member">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya Patel" />
          <h4>Priya Patel</h4>
          <p>Donor Relations Specialist</p>
        </div>
      </div>
      <p className="team-note">
        Our team is dedicated to saving lives by ensuring safe, efficient, and transparent blood donation and transfusion services. We work together to connect donors with those in need and maintain the highest standards of care and technology in our Blood Bank Management System.
      </p>
    </div>
  );
}
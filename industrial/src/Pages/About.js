import React from "react";
import './About.css';
const About = () => {
  return (
    <>
      <div className="about-container">
        <h2>About Blood Bank Management System</h2>
        <p>
          Our Blood Bank Management System is designed to efficiently manage the collection, storage, and distribution of blood and its components. The system helps hospitals, donors, and recipients by providing a transparent and reliable platform for blood donation and transfusion management.
        </p>
        <ul>
          <li><strong>Donor Registration:</strong> Easily register and manage donor information.</li>
          <li><strong>Blood Inventory:</strong> Track available blood groups and quantities in real-time.</li>
          <li><strong>Request Management:</strong> Hospitals and patients can request blood units as needed.</li>
          <li><strong>Notifications:</strong> Automated alerts for low inventory and upcoming donation camps.</li>
          <li><strong>Reporting:</strong> Generate reports for donations, usage, and inventory status.</li>
        </ul>
        <p>
          Our mission is to save lives by making blood donation and transfusion processes more accessible, safe, and efficient for everyone.
        </p>
      </div>
    </>
  );
};

export default About;
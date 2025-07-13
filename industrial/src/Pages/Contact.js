import React from "react";
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Have questions or need help? Reach out to our Blood Bank team!
      </p>
      <ul>
        <li><strong>Address:</strong> 123 Main Road, City Center, YourCity</li>
        <li><strong>Phone:</strong> +91-9876543210</li>
        <li><strong>Email:</strong> support@bloodbank.com</li>
        <li><strong>Emergency:</strong> 1800-111-222 (24x7)</li>
        <li><strong>Timings:</strong> Mon-Sat, 9:00 AM - 8:00 PM</li>
      </ul>
      <h3>Send us a message</h3>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
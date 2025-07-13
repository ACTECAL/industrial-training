import React, { useState } from "react";
import './contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [msg, setMsg] = useState('');
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setMsg(data.error || 'Failed to send message');
      }
    } catch (err) {
      setMsg('Failed to send message');
    }
  };
  return (
    <section className="contact-section">
      <div className="contact-hero">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We'd love to hear from you! Reach out for any queries, bookings, or feedback.</p>
      </div>
      <div className="contact-main-row">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
          </label>
          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} required />
          </label>
          <button type="submit" className="contact-btn">Send Message</button>
          {msg && <div className="form-success" style={{marginTop:'0.7rem'}}>{msg}</div>}
        </form>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@explorehimalayas.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Main Bazaar, Dharchula, Uttarakhand, India</p>
          <div className="contact-map-placeholder">Map Placeholder</div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
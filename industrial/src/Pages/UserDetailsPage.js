import React, { useState } from "react";
import './UserDetailsPage.css';
import { useNavigate } from 'react-router-dom';
function UserDetailsPage() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
     userType: '',
    bloodGroup: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
 const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
// Yahan API call karein to save details
     if (details.userType === "receiver") {
      navigate('/payment'); // Payment page par redirect
    } else if (details.userType === "donor") {
      setShowThankYou(true); // Thank you message show
    }
  };

  if (showThankYou) {
    return (
      <div className="details-container">
        <h2>Thank You for Donating!</h2>
        <p style={{fontSize: "1.2rem", color: "#388e3c", marginTop: "20px"}}>
          Your willingness to donate blood can save lives.<br />
          We appreciate your kindness and support for the community.<br /><br />
          <span style={{fontSize: "2rem"}}>❤️</span>
        </p>
      </div>
    );
  }
     return (
    <div className="details-container">
      <h2>Fill Your Blood Bank Details</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="userType"
          value={details.userType}
          onChange={handleChange}
          required
        >
          <option value="">Select Type</option>
          <option value="donor">Donor</option>
          <option value="receiver">Receiver</option>
        </select> 
        <select name="bloodGroup" value={details.bloodGroup} onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input type="number" name="age" placeholder="Age" value={details.age} onChange={handleChange} required />
        <select name="gender" value={details.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="address" placeholder="Address" value={details.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={details.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={details.state} onChange={handleChange} required />
        <input type="text" name="pincode" placeholder="Pincode" value={details.pincode} onChange={handleChange} required />
        <button type="submit">Submit Details</button>
      </form>
    </div>
  );
}

export default UserDetailsPage;
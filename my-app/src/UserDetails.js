// src/components/UserDetails.js
import React, { useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleViewDetails = async (userId) => {
    try {
      const response = await axios.get ("http://localhost:5000/api/user/${userId}");
      setUser(response.data);
      setError("");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong while fetching user data.");
    }
  };

// ...existing code...
  return (
    <div className="user-details-container">
      <h2>User Profile</h2>
      <button onClick={() => handleViewDetails(1)}>View Details</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <h3>👤 {user.name}</h3>
          <p>📧 {user.email}</p>
          <p>🆔 ID: {user.id}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
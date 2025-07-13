import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    alert("Registration successful");
    navigate("/login");
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto mt-10 border rounded">
      <h2 className="text-2xl mb-4">Register</h2>
      <input placeholder="Name" className="input" onChange={e => setForm({ ...form, name: e.target.value })} /><br />
      <input placeholder="Email" className="input" onChange={e => setForm({ ...form, email: e.target.value })} /><br />
      <input type="password" placeholder="Password" className="input" onChange={e => setForm({ ...form, password: e.target.value })} /><br />
      <button className="btn mt-2">Register</button>
    </form>
  );
}

export default Register;
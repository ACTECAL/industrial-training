import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import OurTeam from "./Pages/OurTeam";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import PaymentPage from "./Pages/PaymentPage";
// ...

// ...
 // <-- Add this line
import './App.css';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-details" element={<UserDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
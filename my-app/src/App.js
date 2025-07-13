import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import HomePage from './HomePage';
import Login from './Login';
import Results from './Results';
import { VoteProvider } from './VoteContext'; 
import VotePage from './VotePage';
import ProtectedRoute from './ProtectedRoute';
import './App.css';
function App() {        //evm pro project wala h ye  
  return ( 
    <VoteProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Topbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/vote"
                element={
                  <ProtectedRoute>
                    <VotePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </div>
      </Router>
    </VoteProvider>
  );
}
export default App;

//userdeatil ka hai ye 
/*import "./App.css";
import UserDetails from "./UserDetails";
function App() {
  return (
    <div className="App">
      <h1>Welcome to the User Portal</h1>
      <UserDetails />
    </div>
  );
}

export default App;*/
//emojiwala h ye 
/*
import React from 'react';
import EmojiMotion from './EmojiMotion';

function App() {
  return (
    <div>
      <EmojiMotion />
    </div>
  );
}

export default App;
*/
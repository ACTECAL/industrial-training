import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import CandidateCard from './CandidateCard'; // ✅ corrected path

function Vote() {
  const [candidates, setCandidates] = useState([]);

  // ✅ socket को useEffect के अंदर initialize करो:
  useEffect(() => {
    const socket = io("http://localhost:5000");

    // Candidates list लानाAPI.get("/vote/candidates").then(res => setCandidates(res.data));

    // Real-time vote update
    socket.on("voteUpdate", data => setCandidates(data));

    return () => socket.disconnect(); // ✅ cleanup
  }, []);

  const handleVote = async (id) => {
    const token = localStorage.getItem("token");
    try {
      alert("Vote submitted");
    } catch (error) {
      console.error("Vote failed", error);
      alert("Voting failed. Try again.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">🗳️ Vote Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {candidates.map(c => (
          <CandidateCard key={c._id} candidate={c} onVote={handleVote} />
        ))}
      </div>
    </div>
  );
}

export default Vote;

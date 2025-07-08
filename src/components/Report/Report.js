import React, { useState } from "react";
import "./Report.css";

  
const Report = ({ caseData, totalClues, onRestart, goToTips }) => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="report-container">
      <h2>🧾 Cyber Investigation Report</h2>

      {!submitted ? (
        <>
          <p>
            🎉 You successfully solved: <strong>{caseData.title}</strong>
          </p>
          <p>
            🔎 Total clues solved: <strong>{totalClues}</strong>
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => setSubmitted(true)}>📄 Generate Report</button>
        </>
      ) : (
        <div className="report-card">
          <h3>Investigator: {name}</h3>
          <p>
            You cracked the case: <strong>{caseData.title}</strong>
          </p>
          <p>Clues completed: {totalClues}</p>
          <p className="badge">🏅 Awareness Level: Cyber Smart</p>

          <button className="tips-btn" onClick={goToTips}>
           View More Safety Tips
          </button>

          <button onClick={onRestart}> Solve Another Case</button>
        </div>
      )}
    </div>
  );
};

export default Report;

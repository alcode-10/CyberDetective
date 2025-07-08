import React from "react";
import "./ClueSelector.css";

const ClueSelector = ({ caseData, clues, onSelectClue, userProgress = {} }) => {
  return (
    <div className="clue-selector">
      <div className="clue-selector-box">
        <h1> Investigate Clues for: {caseData.title}</h1>
        <div className="clue-grid">
          {clues.map((clue, index) => (
            <div
              key={clue.id}
              className={`clue-card ${userProgress[clue.id] ? "done" : ""}`}
              onClick={() => onSelectClue(index)}
            >
              <h2>{clue.title}</h2>
              {userProgress[clue.id] ? (
                <p className="complete">✅ Done</p>
              ) : (
                <button><h4> Click to Investigate</h4></button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClueSelector;

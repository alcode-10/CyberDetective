import React from "react";
import "./CaseSelector.css";

const CaseSelector = ({ cases, onSelect }) => {
  return (
    <div className="case-selector">
      <div className="case-selector-container">
        <h2>Choose a Case to Investigate</h2>
        <div className="case-grid">
          {cases.map((c) => (
            <div className="case-card" key={c.id}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <button onClick={() => onSelect(c)}>Explore Case</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseSelector;

import React, { useState, useEffect } from "react";
import "./CaseIntro.css";

const CaseIntro = ({ caseData, onStart }) => {
  const { title, problemStatement } = caseData;
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + problemStatement.charAt(index));
      index++;
      if (index >= problemStatement.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [problemStatement]);

  return (
    <div className="caseintro">
      <div className="caseintro-box">
        <h2>{title}</h2>
        <p className="typewriter-text">{text}</p>
        <button
          onClick={onStart}
          // disabled={text.length < problemStatement.length}
        >
           Start Investigation!
        </button>
      </div>
    </div>
  );
};

export default CaseIntro;

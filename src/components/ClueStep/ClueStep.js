import React, { useState, useEffect } from "react";
import "./ClueStep.css";

const ClueStep = ({ clue, onNext }) => {
  const [selected, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  
  useEffect(() => {
    resetClueState();
  }, [clue.id]);

  const resetClueState = () => {
    setSelected([]);
    setInputValue("");
    setSubmitted(false);
    setIsCorrect(false);
  };

  const toggleOption = (text) => {
    if (submitted) return;

    setSelected((prev) =>
      prev.includes(text) ? prev.filter((t) => t !== text) : [...prev, text]
    );
  };

  const handleSubmit = () => {
    if (clue.type === "type") {
      const valid = clue.validate(inputValue);
      setIsCorrect(valid);
      setSubmitted(true);
      return;
    }

    const correctAnswers = clue.options
      .filter((opt) => opt.correct)
      .map((opt) => opt.text);

    const valid =
      selected.length === correctAnswers.length &&
      selected.every((s) => correctAnswers.includes(s));

    setIsCorrect(valid);
    setSubmitted(true);
  };

  return (
    <div className="clue-step">
      <div className="clue-container">
        <h2>{clue.title}</h2>
        <p className="prompt-text">{clue.prompt}</p>
        {clue.fakechat && (
          <div className="fake-chat">
            {clue.fakechat.map((msg, index) => (
              <div
                key={index}
                className={`chat-bubble ${
                  msg.from === "scammer" ? "scammer" : "user"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        )}

        {(clue.type === "click" || clue.type === "select") && clue.options && (
          <div className="options">
            {clue.options.map((opt) => (
              <button
                key={opt.text}
                className={`option-btn
                  ${selected.includes(opt.text) ? "selected" : ""}
                  ${
                    submitted && opt.correct && selected.includes(opt.text)
                      ? "correct"
                      : ""
                  }
                  ${
                    submitted && !opt.correct && selected.includes(opt.text)
                      ? "wrong"
                      : ""
                  }
                `}
                onClick={() => toggleOption(opt.text)}
              >
                {opt.text}
              </button>
            ))}
          </div>
        )}

        {clue.type === "type" && !submitted && (
          <div className="type-input">
            <input
              type="text"
              placeholder="Enter your answer..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        )}

        {!submitted && (
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        )}

        {submitted && (
          <>
            <p className="result-msg">
              {isCorrect
                ? `✅ ${clue.success}`
                : "Not quite right. Try again?"}
            </p>

            {isCorrect ? (
              <button className="next-btn" onClick={onNext}>
                {clue.nextCta || "Next Clue"}
              </button>
            ) : (
              <button className="tryagain-btn" onClick={resetClueState}>
                Oops! Try Again.
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}  
export default ClueStep;
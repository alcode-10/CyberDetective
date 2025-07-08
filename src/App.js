import React, { useState } from "react";
import SafetyTips from "./components/Safetytips/Safetytips";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import CaseSelector from "./components/CaseSelector/CaseSelector";
import CaseIntro from "./components/CaseIntro/CaseIntro";
import ClueSelector from "./components/ClueSelector/ClueSelector";
import ClueStep from "./components/ClueStep/ClueStep";
import Report from "./components/Report/Report";
import MusicPlayer from "./components/Musicplayer";
import clues from "./data/clues";
import cases from "./data/cases";
import "./App.css";

function App() {
  const [stage, setStage] = useState("home");
  const [previousStage, setPreviousStage] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeClueIndex, setActiveClueIndex] = useState(null);

  const clueList = selectedCase?.id ? clues[selectedCase.id] : [];

  const handleCasePick = (c) => {
    setSelectedCase(c);
    setCurrentIndex(0);
    setActiveClueIndex(null);
    setStage("intro");
  };

  const handleStartInvestigation = () => {
    setStage("clues");
    setActiveClueIndex(null); 
  };

  const handleClueSelect = (index) => {
    setActiveClueIndex(index);
    setCurrentIndex(index); 
  };

  const handleNext = () => {
    if (currentIndex + 1 < clueList.length) {
      setCurrentIndex((prev) => prev + 1);
      setActiveClueIndex((prev) => prev + 1);
    } else {
      setStage("report");
    }
  };

  const handleRestart = () => {
    setSelectedCase(null);
    setCurrentIndex(0);
    setActiveClueIndex(null);
    setStage("cases");
  };

  return (
    <>
      <header className="main-header">
        Cyber Detective
        <nav>
          <button onClick={() => setStage("home")}>Home</button>
          <button onClick={() => setStage("cases")}>Cases</button>
          <button
            onClick={() => {
              setPreviousStage(stage);
              setStage("tips");
            }}
          >
            Safety Tips
          </button>
          {stage === "report" && (
            <button onClick={() => setStage("report")}>📜 Report</button>
          )}
        </nav>
      </header>
      <MusicPlayer />

    
      {stage === "tips" && (
        <SafetyTips goBack={() => setStage(previousStage || "home")} />
      )}

      {stage === "home" && (
        <HomeScreen
          onExplore={() => setStage("cases")}
          goToTips={() => {
            setPreviousStage("home");
            setStage("tips");
          }}
        />
      )}

      {stage === "cases" && (
        <CaseSelector cases={cases} onSelect={handleCasePick} />
      )}

      {stage === "intro" && selectedCase && (
        <CaseIntro caseData={selectedCase} onStart={handleStartInvestigation} />
      )}

      {stage === "clues" &&
        selectedCase &&
        Array.isArray(clueList) &&
        (activeClueIndex === null ? (
          <ClueSelector
            clues={clueList}
            caseData={selectedCase}
            onSelectClue={handleClueSelect}
          />
        ) : (
          <ClueStep clue={clueList[activeClueIndex]} onNext={handleNext} />
        ))}

      {stage === "report" && selectedCase && (
        <Report
          caseData={selectedCase}
          totalClues={clueList.length}
          onRestart={handleRestart}
          goToTips={() => {
            setPreviousStage("report");
            setStage("tips");
          }}
        />
      )}
    </>
  );
}

export default App;

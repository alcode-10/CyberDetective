import React from "react";
import "./HomeScreen.css"; 

const HomeScreen = ({ onExplore, goToTips }) => {
  return (
    <div className="home">
      <div className="home-container">
        <h1>Cyber Detective</h1>
        <p>Uncover real scams. Learn how to protect yourself. Otherwise....</p>
        <button onClick={onExplore}>Explore Cases</button>
      </div>
    </div>
  );
};

export default HomeScreen;

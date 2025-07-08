import React from "react";
import "./Safetytips.css";

const SafetyTips = ({ goBack }) => {
  return (
    <div className="tips-page">
      <h2>Cyber Safety Tips</h2>
      <ul className="tips-list">
        <li>Use strong passwords and never reuse them.</li>
        <li>Enable 2FA wherever possible.</li>
        <li>Don't share OTPs or passwords.</li>
        <li>Check links before clicking.</li>
        <li>Keep apps updated and avoid modded APKs.</li>
      </ul>

      <button onClick={goBack} className="back-btn">
        Back to Previous
      </button>
    </div>
  );
};

export default SafetyTips;

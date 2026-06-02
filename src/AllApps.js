// AllApps.js
import React from 'react';
import './AllApps.scss'; // Ensure you created this file from the previous step

export default function AllApps({ setPage }) {
  return (
    <div className="all-apps-container">
      {/* Back button */}
      <button className="back-btn" onClick={() => setPage("home")}>
        &larr; Back to Home
      </button>

      <header className="all-apps-header">
        <h1>ALL PROJECTS</h1>
      </header>

      <div className="apps-grid">
        {/* Example card - you can map your project list here */}
        <div className="app-card">
          <h3>PROJECT TITLE</h3>
          <p>Project description goes here.</p>
        </div>
      </div>
    </div>
  );
}

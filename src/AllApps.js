import React from 'react';
import './AllApps.scss';

export default function AllApps({ setPage }) {
  const projects = [
    { name: 'Bloom Sharing', tech: 'Swift', desc: 'Bike rental iOS app with Bluetooth, Apple Pay, and Stripe integration.' },
    { name: 'Beyond Class', tech: 'Swift', desc: 'Interactive music learning platform for student-teacher collaboration.' },
    { name: 'Smart Fin', tech: 'Swift', desc: 'Secure platform for international traders to request financial assistance.' },
    { name: 'Smart Flow', tech: 'Swift', desc: 'Blockchain-based ecosystem for real-time trade status tracking.' },
    { name: 'AG Connect', tech: 'Swift', desc: 'Blockchain trade ecosystem for farmers, traders, and mill owners.' },
    { name: 'Congo', tech: 'Swift', desc: 'Instant messaging app with phone-based authentication and media sharing.' },
    { name: 'Backup', tech: 'Swift', desc: 'Vehicle-focused reminder app with license plate-based notifications.' },
    { name: 'Ayurveda', tech: 'Swift', desc: 'Digital wellness app featuring home remedies and location-based deals.' },
    { name: 'Quizline', tech: 'Swift', desc: 'Competitive multiplayer trivia game with real-time matchmaking.' },
    { name: 'VIN Template', tech: 'Obj-C', desc: 'Vehicle dealership tool for VIN scanning and PDF generation.' },
    { name: 'Lottery AI', tech: 'Obj-C', desc: 'Inventory management and sales analysis for lottery retailers.' },
    { name: 'Math Planet', tech: 'Obj-C', desc: 'Interactive math learning app for children with custom animations.' },
    { name: 'Jobs 360', tech: 'Obj-C', desc: 'AR-based job discovery platform with LinkedIn integration.' },
    { name: 'Write Therapy', tech: 'Obj-C', desc: 'Educational tool for children to practice writing on digital worksheets.' }
  ];

  return (
    <div className="all-apps-container">
      <button className="back-btn" onClick={() => setPage("home")}>
        &larr; Back to Home
      </button>

      <header className="all-apps-header">
        <h1>PROJECT PORTFOLIO</h1>
        <p>A collection of developed iOS applications and architectures</p>
      </header>

      <div className="apps-grid">
        {projects.map((project, index) => (
          <div key={index} className="app-card">
            <span className="tech-tag">{project.tech}</span>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

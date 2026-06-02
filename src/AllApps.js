import React from 'react';
import './AllApps.scss'; // We will create this styling file next

const AllApps = () => {
  // Mock data for your apps matching your dark amber aesthetic
  const apps = [
    { id: 1, name: 'Bloom', desc: 'Modular MVVM Architecture IoT Engine', tech: 'Swift' },
    { id: 2, name: 'SmartFin', desc: 'Decoupled VIPER Enterprise Platform', tech: 'Swift' },
    { id: 3, name: 'SmartFlow', desc: 'Event-Driven VIPER Core System', tech: 'Swift' }
  ];

  return (
    <div className="all-apps-container">
      <header className="all-apps-header">
        <h1>ALL PROJECTS</h1>
        <p>A COMPREHENSIVE COLLECTION OF MY MOBILE APP ARCHITECTURES</p>
      </header>

      <div className="apps-grid">
        {apps.map(app => (
          <div key={app.id} className="app-card">
            <h3>{app.name}</h3>
            <p className="app-desc">{app.desc}</p>
            <span className="app-tag">{app.tech}</span>
            <button className="details-btn">View Project Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApps;

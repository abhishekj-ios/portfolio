import React from 'react';
import './AllApps.scss';

export default function AllApps() {
  const projects = [
    { name: 'Bloom Sharing', arch: 'MVVM, MVC', tech: 'Swift', features: 'Bluetooth, Apple Pay, Stripe, Firebase, QR Code Scan, Maps.' },
    { name: 'Beyond Class', arch: 'MVVM, MVC', tech: 'Swift', features: 'Audio/video capture, interactive UI, student-teacher collaboration, role-based access.' },
    { name: 'Smart Fin', arch: 'VIPER, MVC', tech: 'Swift', features: 'Interactive charts, concurrency handling, role-based access, backend API integration.' },
    { name: 'Smart Flow', arch: 'VIPER, MVC', tech: 'Swift', features: 'Blockchain integration, real-time trade status, transaction lifecycle visualization, secure auth.' },
    { name: 'AG Connect', arch: 'MVVM, MVC', tech: 'Swift', features: 'Blockchain trade ecosystem, negotiation workflow tracking, delivery & payment tracking.' },
    { name: 'Congo', arch: 'MVVM, MVC', tech: 'Swift', features: 'Twilio, Firebase, phone-based authentication, 1-on-1 and group messaging.' },
    { name: 'Backup', arch: 'MVC', tech: 'Swift', features: 'Push/in-app notifications, license plate-based lookup, vehicle maintenance reminders.' },
    { name: 'Ayurveda', arch: 'MVVM, MVC', tech: 'Swift', features: 'Home remedy repository, page flipping animation, location-based services/deals.' },
    { name: 'Quizline', arch: 'MVVM, MVC', tech: 'Swift', features: 'Multiplayer matchmaking, timed questions, round-based scoring, countdown timers.' },
    { name: 'VIN Template', arch: 'MVVM, MVC', tech: 'Objective-C', features: 'Bluetooth VIN scanner, real-time data parsing, dynamic PDF generation, wireless printing.' },
    { name: 'Lottery AI', arch: 'MVVM, MVC', tech: 'Objective-C', features: 'Bluetooth integration, interactive sales graphs, performance analysis, inventory management.' },
    { name: 'Math Planet', arch: 'MVC', tech: 'Objective-C', features: 'Interactive learning modules, animations, audio/music integration, progress tracking.' },
    { name: 'Jobs 360', arch: 'MVC', tech: 'Objective-C', features: 'AR-based job visualization, RSS feed parsing, LinkedIn integration, resume generation.' },
    { name: 'Write Therapy', arch: 'MVC', tech: 'Objective-C', features: 'Image processing, touch-based input, Core Data, interactive educational UI.' }
  ];

  return (
    <div className="all-apps-container">
      <header className="all-apps-header">
        <h1>PROJECT PORTFOLIO</h1>
        <p>Comprehensive iOS Architecture & Development Summary</p>
      </header>

      <div className="apps-grid">
        {projects.map((project, index) => (
          <div key={index} className="app-card">
            <div className="card-top">
              <span className="tech-tag">{project.tech}</span>
              <span className="arch-tag">{project.arch}</span>
            </div>
            <h3>{project.name}</h3>
            <p className="features"><strong>Features:</strong> {project.features}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

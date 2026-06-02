import React from 'react';
import './AllApps.scss';

export default function AllApps() {
  const projects = [
    { name: 'Bloom Sharing', arch: 'MVVM, MVC', tech: 'Swift', desc: 'A bike rental iOS application enabling registered users to unlock Bluetooth-enabled bike locks via QR code scanning.', features: 'Bluetooth, Apple Pay, Stripe, Firebase, QR Code Scan, Maps.' },
    { name: 'Beyond Class', arch: 'MVVM, MVC', tech: 'Swift', desc: 'An interactive online music learning platform enabling student-teacher collaboration beyond the classroom.', features: 'Audio/video capture, interactive UI, student-teacher collaboration, role-based access.' },
    { name: 'Smart Fin', arch: 'VIPER, MVC', tech: 'Swift', desc: 'The application enables registered international traders to request financial assistance from partner banks through a secure, role-based platform.', features: 'Interactive charts, concurrency handling, role-based access, backend API integration.' },
    { name: 'Smart Flow', arch: 'VIPER, MVC', tech: 'Swift', desc: 'The application enables authorized participants within a blockchain-based ecosystem to monitor and track the progress of trades in real time.', features: 'Blockchain integration, real-time trade status, transaction lifecycle visualization, secure auth.' },
    { name: 'AG Connect', arch: 'MVVM, MVC', tech: 'Swift', desc: 'A blockchain-based trade ecosystem that enables mill owners and traders to post requirements for goods through a secure platform.', features: 'Blockchain trade ecosystem, negotiation workflow tracking, delivery & payment tracking.' },
    { name: 'Congo', arch: 'MVVM, MVC', tech: 'Swift', desc: 'An instant messaging application that enables users to connect with friends using phone number-based authentication.', features: 'Twilio, Firebase, phone-based authentication, 1-on-1 and group messaging.' },
    { name: 'Backup', arch: 'MVC', tech: 'Swift', desc: 'A vehicle-focused reminder application that allows users to create an account and link multiple vehicles using their license plate numbers.', features: 'Push/in-app notifications, license plate-based lookup, vehicle maintenance reminders.' },
    { name: 'Ayurveda', arch: 'MVVM, MVC', tech: 'Swift', desc: 'A digital wellness application that delivers a structured repository of home remedies and Ayurvedic treatments for common ailments.', features: 'Home remedy repository, page flipping animation, location-based services/deals.' },
    { name: 'Quizline', arch: 'MVVM, MVC', tech: 'Swift', desc: 'A multiplayer mobile trivia game that allows users to compete head-to-head across seven rounds of timed, multiple-choice questions.', features: 'Multiplayer matchmaking, timed questions, round-based scoring, countdown timers.' },
    { name: 'VIN Template', arch: 'MVVM, MVC', tech: 'Objective-C', desc: 'Developed for a client operating a second-hand vehicle dealership to scan and decode VIN numbers.', features: 'Bluetooth VIN scanner, real-time data parsing, dynamic PDF generation, wireless printing.' },
    { name: 'Lottery AI', arch: 'MVVM, MVC', tech: 'Objective-C', desc: 'Enables lottery retailers and wholesalers to efficiently manage ticket inventory and analyze sales performance.', features: 'Bluetooth integration, interactive sales graphs, performance analysis, inventory management.' },
    { name: 'Math Planet', arch: 'MVC', tech: 'Objective-C', desc: 'An educational mobile application designed to help children learn basic mathematics through engaging, interactive experiences.', features: 'Interactive learning modules, animations, audio/music integration, progress tracking.' },
    { name: 'Jobs 360', arch: 'MVC', tech: 'Objective-C', desc: 'A virtual reality mobile application that aggregates job listings by parsing RSS feeds and identifying opportunities via AR.', features: 'AR-based job visualization, RSS feed parsing, LinkedIn integration, resume generation.' },
    { name: 'Write Therapy', arch: 'MVC', tech: 'Objective-C', desc: 'An educational application designed for children with writing difficulties to practice on digital worksheets.', features: 'Image processing, touch-based input, Core Data, interactive educational UI.' }
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
            <p className="description">{project.desc}</p>
            <p className="features"><strong>Features:</strong> {project.features}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

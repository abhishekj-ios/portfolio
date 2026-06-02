import React from 'react';
import './AllApps.scss';

export default function AllApps() {
  const projects = [
    { name: 'Bloom Sharing', arch: 'MVVM, MVC', tech: 'Swift', desc: 'IoT bike‑rental platform powering multiple white‑label deployments. Unlocks bikes via QR code with seamless Bluetooth integration.', features: ['Apple Pay', 'Stripe', 'Firebase', 'MapKit', 'Secure firmware isolation'] },
    { name: 'Beyond Class', arch: 'MVVM, MVC', tech: 'Swift', desc: 'Interactive e‑learning app enabling real‑time student–teacher collaboration. Built with MVVM for scalable role‑based access and multimedia capture.', features: ['Audio/video lessons', 'Interactive UI', 'Secure collaboration tools'] },
    { name: 'Smart Fin', arch: 'VIPER, MVC', tech: 'Swift', desc: 'Enterprise trade‑finance hub connecting international traders with partner banks. Decoupled VIPER architecture ensures secure, scalable negotiations.', features: ['Interactive charts', 'Concurrency handling', 'Secure API integration'] },
    { name: 'Smart Flow', arch: 'VIPER, MVC', tech: 'Swift', desc: 'Blockchain transaction tracker for real‑time trade lifecycle visualization. Event‑driven VIPER core ensures secure state monitoring across networks.', features: ['Blockchain APIs', 'Real-time logs', 'Secure authentication layers'] },
    { name: 'AG Connect', arch: 'MVVM, MVC', tech: 'Swift', desc: 'Blockchain‑based trade ecosystem for mill owners and traders. MVVM architecture supports negotiation workflows and delivery tracking.', features: ['Secure blockchain integration', 'Payment tracking', 'Workflow mapping'] },
    { name: 'Congo Messenger', arch: 'MVVM, MVC', tech: 'Swift', desc: 'Real‑time messaging app with phone‑based authentication. MVVM architecture ensures modular scalability and Firebase backend support.', features: ['Twilio integration', '1‑on‑1 and group messaging', 'Secure auth'] },
    { name: 'Backup', arch: 'MVC', tech: 'Swift', desc: 'A vehicle-focused reminder application that allows users to create an account and link multiple vehicles using their license plate numbers.', features: ['Push/in-app notifications', 'License plate-based lookup', 'Maintenance reminders'] },
    { name: 'Ayurveda', arch: 'MVVM, MVC', tech: 'Swift', desc: 'A digital wellness application that delivers a structured repository of home remedies and Ayurvedic treatments for common ailments.', features: ['Categorized/searchable content', 'Page flipping animation', 'Location-based deals'] },
    { name: 'Quizline', arch: 'MVVM, MVC', tech: 'Swift', desc: 'A multiplayer mobile trivia game that allows users to compete head-to-head across seven rounds of timed, multiple-choice questions.', features: ['Real-time matchmaking', 'Round-based scoring', 'Countdown timers'] },
    { name: 'VIN Template', arch: 'MVVM, MVC', tech: 'Objective-C', desc: 'Developed for a vehicle dealership to integrate with a Bluetooth scanner to decode VIN numbers and manage inventory.', features: ['Bluetooth VIN scanner', 'Dynamic PDF generation', 'Wireless printing workflow'] },
    { name: 'Lottery AI', arch: 'MVVM, MVC', tech: 'Objective-C', desc: 'Enables lottery retailers and wholesalers to efficiently manage ticket inventory and analyze sales performance via Bluetooth scanner.', features: ['Bluetooth integration', 'Interactive sales graphs', 'Performance pattern insights'] },
    { name: 'Math Planet', arch: 'MVC', tech: 'Objective-C', desc: 'An educational mobile application designed to help children learn basic mathematics through engaging, interactive experiences.', features: ['Interactive learning modules', 'Animations & audio cues', 'Progress tracking'] },
    { name: 'Jobs 360', arch: 'MVC', tech: 'Objective-C', desc: 'A virtual reality mobile application that aggregates job listings and identifies opportunities near the user using AR.', features: ['AR-based job visualization', 'RSS feed parsing', 'LinkedIn integration'] },
    { name: 'Write Therapy', arch: 'MVC', tech: 'Objective-C', desc: 'An educational application designed for children with writing difficulties to practice on captured worksheet images.', features: ['Image processing', 'Touch-based input', 'Core Data integration'] }
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
            <h3 className="app-title">{project.name}</h3>
            <div className="card-top">
              <span className="arch-tag">{project.arch}</span>
              <span className="tech-tag">{project.tech}</span>
            </div>
            <p className="description">{project.desc}</p>
            <div className="features-list">
              <strong>Features:</strong>
              <ul>
                {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

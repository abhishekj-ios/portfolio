import React from 'react';
import './AllApps.scss';

export default function AllApps() {
  const projects = [
    { 
      name: 'Bloom Sharing', 
      arch: 'MVVM, MVC', 
      tech: 'Swift', 
      desc: 'IoT bike‑rental platform powering multiple white‑label deployments. Unlocks bikes via QR code with seamless Bluetooth integration.', 
      features: ['Apple Pay', 'Stripe', 'Firebase', 'MapKit', 'Secure firmware isolation'] 
    },
    { 
      name: 'Beyond Class', 
      arch: 'MVVM, MVC', 
      tech: 'Swift', 
      desc: 'Interactive e‑learning app enabling real‑time student–teacher collaboration. Built with MVVM for scalable role‑based access and multimedia capture.', 
      features: ['Audio/video lessons', 'Interactive UI', 'Secure collaboration tools'] 
    },
    { 
      name: 'Smart Fin', 
      arch: 'VIPER, MVC', 
      tech: 'Swift', 
      desc: 'Enterprise trade‑finance hub connecting international traders with partner banks. Decoupled VIPER architecture ensures secure, scalable negotiations.', 
      features: ['Interactive charts', 'Concurrency handling', 'Secure API integration'] 
    },
    { 
      name: 'Smart Flow', 
      arch: 'VIPER, MVC', 
      tech: 'Swift', 
      desc: 'Blockchain transaction tracker for real‑time trade lifecycle visualization. Event‑driven VIPER core ensures secure state monitoring across networks.', 
      features: ['Blockchain APIs', 'Real-time logs', 'Secure authentication layers'] 
    },
    { 
      name: 'AG Connect', 
      arch: 'MVVM, MVC', 
      tech: 'Swift', 
      desc: 'Blockchain‑based trade ecosystem for mill owners and traders. MVVM architecture supports negotiation workflows and delivery tracking.', 
      features: ['Secure blockchain integration', 'Payment tracking', 'Workflow mapping'] 
    },
    { 
      name: 'Congo Messenger', 
      arch: 'MVVM, MVC', 
      tech: 'Swift', 
      desc: 'Real‑time messaging app with phone‑based authentication. MVVM architecture ensures modular scalability and Firebase backend support.', 
      features: ['Twilio integration', '1‑on‑1 and group messaging', 'Secure auth'] 
    }
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

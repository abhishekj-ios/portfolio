import React from "react";
import "./Greeting.scss";
import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="premium-hero-overlay" />
      
      <div className="greeting-content-wrapper">
        {/* Main Typography Header Section */}
        <h1 className="premium-greeting-title">
          Hello, I'm Abhishek
        </h1>
        
        <h2 className="premium-greeting-subtitle">
          Senior iOS Developer
        </h2>
        
        <p className="premium-greeting-desc">
          With 12+ years of expertise in Swift and SwiftUI, I design and deliver scalable, high-performance mobile applications. My focus is on clean architecture, maintainability, and user-centric design.
        </p>
        
        {/* Perfectly Aligned Dual Button Row */}
        <div className="premium-action-row">
          <a href="#opensource" className="cta-btn cta-primary">
            View My Work
          </a>
          {greeting.resumeLink && (
            <a 
              href={greeting.resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn cta-secondary"
            >
              Download Resume
            </a>
          )}
        </div>

        {/* Clean Subdued Social Networks Row */}
        <div className="premium-social-wrapper">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

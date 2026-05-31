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
      {/* Background Gradient Overlays */}
      <div className="premium-hero-overlay light-overlay" />
      <div className="premium-hero-overlay dark-overlay" />
      
      <div className="greeting-content-wrapper">
        <h1 className="premium-greeting-title">Hello, I'm Abhishek</h1>
        <h2 className="premium-greeting-subtitle">Senior iOS Developer</h2>
        <p className="premium-greeting-desc">
          With 12+ years of expertise in Swift and SwiftUI, I design and deliver scalable, high-performance mobile applications. My focus is on clean architecture, maintainability, and user-centric design.
        </p>
        
        {/* Perfectly Uniform Custom Buttons */}
        <div className="premium-action-row">
          <a href="#opensource" className="custom-premium-btn btn-primary">
            View My Work
          </a>
          {greeting.resumeLink && (
            <a 
              href={greeting.resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="custom-premium-btn btn-secondary"
            >
              Download Resume
            </a>
          )}
        </div>

        <div className="premium-social-wrapper">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

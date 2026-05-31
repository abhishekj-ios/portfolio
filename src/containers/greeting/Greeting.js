import React from "react";
import "./Greeting.scss";
import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main-split">
        
        {/* Left Column (Animated) */}
        <div className="greeting-text-column">
          <Fade bottom duration={1000} distance="30px">
            <h1 className="premium-greeting-title">
              Hello, I'm Abhishek
            </h1>
            <h2 className="premium-greeting-subtitle">
              Senior iOS Developer
            </h2>
            <p className="premium-greeting-desc">
              With 12+ years of expertise in Swift and SwiftUI, I design and deliver scalable, high-performance mobile applications. My focus is on clean architecture, maintainability, and user-centric design.
            </p>
            
            <div className="premium-action-row">
              <div className="cta-primary-wrapper">
                <Button
                  text="View My Work"
                  newTab={false}
                  href="#opensource"
                />
              </div>
              {greeting.resumeLink && (
                <a 
                  href={greeting.resumeLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-secondary-btn"
                >
                  Download Resume
                </a>
              )}
            </div>

            <div className="premium-social-wrapper">
              <SocialMedia />
            </div>
          </Fade>
        </div>

        {/* Right Column (Animated) */}
        <div className="greeting-image-column">
          <Fade right duration={1200}>
            <div className="premium-hero-graphic" />
          </Fade>
        </div>

      </div>
    </div>
  );
}

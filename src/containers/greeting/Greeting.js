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
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main-split">
          
          {/* Left Text Column */}
          <div className="greeting-text-column">
            <h1 className="premium-greeting-title">
              Hello, I'm Abhishek
            </h1>
            
            <h2 className="premium-greeting-subtitle">
              Senior iOS Developer
            </h2>
            
            <p className="premium-greeting-desc">
              With 12+ years of expertise in Swift and SwiftUI, I design and deliver scalable, high-performance mobile applications. My focus is on clean architecture, maintainability, and user-centric design.
            </p>
            
            {/* Action Buttons Block */}
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

            {/* Social Icons positioned cleanly underneath */}
            <div className="premium-social-wrapper">
              <SocialMedia />
            </div>
          </div>

          {/* Right Image Spacer Column */}
          <div className="greeting-image-column">
            {/* The background image container remains empty; layout properties render the graphics */}
          </div>

        </div>
      </div>
    </Fade>
  );
}

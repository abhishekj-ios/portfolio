import React from "react";
import "./Greeting.scss";
import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main-split">
        
        {/* Left Column (Content Box) */}
        <div className="greeting-text-column">
          <h1 className="premium-greeting-title">
            {greeting.title}
          </h1>
          <p className="premium-greeting-desc">
            {greeting.subTitle}
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
        </div>

        {/* Right Column (Image Box) */}
        <div className="greeting-image-column">
          <div className="premium-hero-graphic" />
        </div>

      </div>
    </div>
  );
}

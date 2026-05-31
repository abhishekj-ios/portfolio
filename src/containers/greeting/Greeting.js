import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        {/* Full-bleed background layers controlled by Greeting.scss */}
        <div className="premium-hero-overlay light-overlay" />
        <div className="premium-hero-overlay dark-overlay" />

        {/* Content layer positioned securely in front with z-index */}
        <div className="greeting-content-wrapper">
          <h1 className="premium-greeting-title">
            {greeting.title}
          </h1>
          <h2 className="premium-greeting-subtitle">
            {greeting.subTitle}
          </h2>
          <p className="premium-greeting-desc">
            {greeting.resumeSectionDescription}
          </p>

          {/* Action Button Deck */}
          <div className="premium-action-row">
            <Button 
              text="View My Work" 
              newTab={false} 
              href="#skills" 
              className="custom-premium-btn btn-primary"
            />
            <Button 
              text="Download Resume" 
              newTab={true} 
              href={greeting.resumeLink} 
              className="custom-premium-btn btn-secondary"
            />
          </div>

          {/* Social Profiles Grid */}
          <div className="premium-social-wrapper">
            <SocialMedia />
          </div>
        </div>
      </div>
    </Fade>
  );
}

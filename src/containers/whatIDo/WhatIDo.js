import React from "react";
import "./WhatIDo.scss";
import { whatIDo } from "../../portfolio";
import { Fade } from "react-reveal";

function renderIcon(iconName) {
  switch (iconName) {
    case "swift":
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.7 17.2c-2.8 3.3-7.5 4.8-11.2 3.4 3.7-.4 6.6-2.5 7.8-4.7-3.8 2.4-8.8 1.9-12-1-1 1.2-1 2.8-.2 4 1.3 2 4.4 3.1 7.6 2.7 5.2-.6 9.4-4 10.4-8.1-.8 1.5-1.7 2.7-2.4 3.7z" fill="#FA6400"/>
          <path d="M19.3 12.3c-2.4 3-6.5 4-9.8 2.8 3.1-.6 5.3-2.6 6-4.6-3.4 2.2-7.8 1.9-10.4-.9-.3.6-.4 1.4-.2 2.1.8 2.8 4 4.5 7.5 4 4.8-.7 8.1-4 8.8-7.3-.6 1.4-1.3 2.6-1.9 3.9z" fill="#FA6400"/>
          <path d="M22 6s-5 4.5-8.5 3.5C16.5 7 17 4 17 4s-4.5 3-7 4.5C8 6.5 6 3 6 3s1 4.5.5 6.5C4 9 1.5 8 1.5 8s3.5 3.5 5 5.5c-2 .5-4.5-1-4.5-1s2.5 2.5 5 2.5c-3.5 2.5-7.5 1-7.5 1s6 2 9.5-.5c3.5-2.5 6.5-6.5 8-9.5z" fill="#FA6400"/>
        </svg>
      );
    case "architecture":
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="2" width="6" height="5" rx="1" fill="#3B82F6"/>
          <rect x="2" y="15" width="6" height="5" rx="1" fill="#3B82F6"/>
          <rect x="16" y="15" width="6" height="5" rx="1" fill="#3B82F6"/>
          <path d="M12 7v4M5 11h14M5 11v4M19 11v4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "uiux":
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="#A855F7" strokeWidth="2"/>
          <line x1="11" y1="19" x2="13" y2="19" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 6h1c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-1" stroke="#A855F7" strokeWidth="2"/>
        </svg>
      );
    case "leadership":
      return (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function WhatIDo() {
  return (
    <div className="what-i-do-container" id="whatIDo">
      <Fade bottom duration={1000} distance="20px">
        {/* DESKTOP TITLE: Shows original configuration text from portfolio.js */}
        <h1 className="what-i-do-title desktop-header">{whatIDo.title}</h1>
        
        {/* MOBILE TITLE: Inline overridden to show a compact single word */}
        <h1 className="what-i-do-title mobile-header">EXPERTISE</h1>
        
        {/* Subtitle tag block has been completely deleted from here */}
      </Fade>

      <div className="skills-grid-wrapper">
        {whatIDo.skills.map((skill) => (
          <Fade bottom duration={1000} distance="30px" key={skill.id}>
            <div className="skill-card-item">
              <div className="skill-card-icon-zone">
                {renderIcon(skill.icon)}
              </div>
              <div className="skill-card-text-zone">
                <h3 className="skill-card-title">{skill.title}</h3>
                <p className="skill-card-description">{skill.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

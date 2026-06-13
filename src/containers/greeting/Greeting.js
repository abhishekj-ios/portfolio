// Greeting.js

import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting({ setPage }) {
  if (!greeting.displayGreeting) {
    return null;
  }

  const handleViewProjectsClick = () => {
    window.history.pushState({ page: "all-apps" }, "", "#projects-view");
    setPage("all-apps");
  };

  return (
    <Fade bottom duration={1000} distance="25px">
      <div className="greet-main" id="greeting">
        <div className="greeting-container">
          
          {/* TITLE HEADER BLOCK */}
          <h1 className="greeting-title">
            Senior iOS Developer
          </h1>
          
          {/* PROFILE ARCHITECTURE DESCRIPTION */}
          <p className="greeting-desc">
            I design, architect, and ship high-performance, native iOS applications. 
            Focused on clean code architecture, scalable performance, and user-centric design, 
            I build robust mobile ecosystems that balance technical excellence with exceptional user experiences.
          </p>
          
          {/* METRICS SHOWCASE GRID */}
          <div className="metrics-row-split">
            <div className="metric-column-item">
              <h3>13+ Years</h3>
              <p>Professional Experience</p>
            </div>

            <div className="metric-column-item">
              <h3>15 Apps</h3>
              <p>App Store Submissions</p>
            </div>

            <div className="metric-column-item">
              <h3>20+ Apps</h3>
              <p>Consulted/Developed</p>
            </div>
          </div>

          {/* ACTION BUTTON CONTROL (SINGLE MONOLITHIC CTA) */}
          <div className="button-greeting-div">
            <div className="primary-btn-wrapper">
              <button 
                className="main-button" 
                onClick={handleViewProjectsClick}
              >
                View All Projects
              </button>
            </div>
          </div>
          
          {/* DIVIDER & SOCIAL FOOTPRINT */}
          <hr className="footer-line" />
          
          <div className="social-media-wrapper">
            <SocialMedia />
          </div>

        </div>
      </div>
    </Fade>
  );
}

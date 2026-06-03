import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
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
    <Fade bottom duration={1000} distance="30px">
      <div className="greet-main" id="greeting">
        <div className="greeting-container">
          
          {/* MAIN HEADER AND BIO */}
          <h1 className="greeting-title">
            Senior iOS Developer
          </h1>
          
          <p className="greeting-desc">
            I design, architect, and ship high-performance, native iOS applications. 
            Focused on clean code architecture, scalable performance, and user-centric design, 
            I build robust mobile ecosystems that balance technical excellence with exceptional user experiences.
          </p>
          
          {/* --- REORDERED: Metrics Row now displays proudly above actions --- */}
          <div className="metrics-row-split">
            <div className="metric-column-item">
              <h3>13 Years</h3>
              <p>Professional Experience</p>
            </div>

            <div className="metric-column-item">
              <h3>25+ Apps</h3>
              <p>Consulted & Architected</p>
            </div>

            <div className="metric-column-item">
              <h3>15 Apps</h3>
              <p>Solo App Store Submissions</p>
            </div>
          </div>

          {/* CALL TO ACTION BUTTONS */}
          <div className="button-greeting-div">
            <div className="primary-btn-wrapper">
              <button 
                className="main-button" 
                onClick={handleViewProjectsClick}
              >
                VIEW MY PROJECTS
              </button>
            </div>
            <div className="secondary-btn-wrapper">
              <Button text="DOWNLOAD RESUME" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
          
          {/* SOCIAL ACCOUNTS CHANNEL */}
          <SocialMedia />

        </div>
      </div>
    </Fade>
  );
}

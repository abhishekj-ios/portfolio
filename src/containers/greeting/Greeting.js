import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

// Added { setPage } as a prop
export default function Greeting({ setPage }) {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-content-wrapper">
          <h1 className="greeting-title">{greeting.title}</h1>
          
          <h2 className="greeting-subtitle">{greeting.subTitle}</h2>
          
          <p className="greeting-desc">{greeting.resumeSectionDescription}</p>
          
          <div className="button-greeting-div">
            <div className="primary-btn-wrapper">
              {/* Replaced Button component with a standard button to handle the click event */}
              <button 
                className="main-button" 
                onClick={() => setPage("all-apps")}
              >
                VIEW MY PROJECTS
              </button>
            </div>
            <div className="secondary-btn-wrapper">
              <Button text="DOWNLOAD RESUME" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
          
          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}

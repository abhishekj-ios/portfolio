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
      <style dangerouslySetInnerHTML={{__html: `
        .greeting-title { color: #1d1d1f !important; font-size: 55px !important; letter-spacing: -0.5px !important; }
        .dark-mode .greeting-title { color: #ffffff !important; }
        
        .greeting-subtitle { color: #007AFF !important; font-size: 26px !important; font-weight: 700 !important; }
        
        .greeting-desc { color: #2c2c2e !important; font-size: 18px !important; line-height: 1.6 !important; }
        .dark-mode .greeting-desc { color: #c7c7cc !important; }
      `}} />

      <div className="greet-main" id="greeting">
        <div className="greeting-content-wrapper">
          <h1 className="greeting-title">{greeting.title}</h1>
          <h2 className="greeting-subtitle">{greeting.subTitle}</h2>
          <p className="greeting-desc">{greeting.resumeSectionDescription}</p>
          
          <div className="button-greeting-div">
            <div className="primary-btn-wrapper">
              <Button text="View My Work" href="#skills" />
            </div>
            <div className="secondary-btn-wrapper">
              <Button text="Download Resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
          
          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}

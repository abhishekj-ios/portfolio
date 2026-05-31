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

  // Detect theme dynamically based on the body class or fallback safely
  const isDarkMode = document.body.classList.contains("dark-mode") || true;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div" style={{ width: "100%", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div>
              <h1 
                className="greeting-text" 
                style={{ 
                  color: isDarkMode ? "#FFFFFF" : "#1D1D1F", 
                  fontSize: "3rem", 
                  fontWeight: "700", 
                  marginBottom: "20px", 
                  opacity: "1 !important" 
                }}
              >
                {greeting.title}
              </h1>
              <p 
                className="greeting-text-p" 
                style={{ 
                  color: isDarkMode ? "#F5F5F7" : "#3A3A3C", 
                  fontSize: "1.2rem", 
                  fontWeight: "400", 
                  lineHeight: "1.6", 
                  opacity: "1 !important" 
                }}
              >
                {greeting.subTitle}
              </p>
              <div className="portfolio-repo-btn-div" style={{ justifyContent: "center", display: "flex", gap: "15px", margin: "25px 0" }}>
                <SocialMedia />
              </div>
              {greeting.resumeLink && (
                <div className="portfolio-repo-btn-div" style={{ justifyContent: "center", display: "flex" }}>
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

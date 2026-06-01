import React, { useState } from "react";
import "./Experience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  if (workExperiences.viewExperiences) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperiences">
            <div>
              <h1 className="experience-heading">{workExperiences.title}</h1>
              
              {/* Dynamically append an 'expanded' class when the button is clicked */}
              <div className={`experience-cards-div ${isExpanded ? "expanded" : "collapsed"}`}>
                {workExperiences.experience.map((card, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        meta: card.meta,
                        role: card.role,
                        date: card.date,
                        descBullets: card.descBullets,
                        skills: card.skills
                      }}
                    />
                  );
                })}
              </div>

              {/* Robust, self-contained interactive toggle button */}
              {workExperiences.experience.length > 2 && (
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  width: "100%"
                }}>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                      backgroundColor: "transparent",
                      color: "#60a5fa",
                      border: "2px solid #60a5fa",
                      padding: "12px 28px",
                      fontSize: "15px",
                      fontWeight: "600",
                      borderRadius: "6px",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                      fontFamily: "inherit",
                      outline: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(96, 165, 250, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                    }}
                  >
                    {isExpanded ? "See Less" : "See More Work History"}
                  </button>
                </div>
              )}

            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}

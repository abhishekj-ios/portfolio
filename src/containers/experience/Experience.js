import React from "react";
import "./Experience.scss";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Experience() {
  if (!workExperiences.viewExperiences) return null;

  return (
    <div className="experience-section-container" id="experience">
      <Fade bottom duration={1000} distance="20px">
        <h1 className="experience-main-title">{workExperiences.title}</h1>
      </Fade>

      <div className="experience-cards-grid">
        {workExperiences.experience.map((exp, index) => {
          // The first card (Staff Engineer) gets the premium active styling highlight
          const isCurrentRole = index === 0; 
          
          return (
            <Fade bottom duration={1000} distance="30px" key={exp.id}>
              <div className={`experience-history-card ${isCurrentRole ? "active-current-role" : ""}`}>
                <div className="card-header-row">
                  <div className="role-company-meta">
                    <h3 className="experience-card-role">{exp.role}</h3>
                    <h4 className="experience-card-company">
                      {exp.company} <span className="meta-location">• {exp.location}</span>
                    </h4>
                  </div>
                  <div className="experience-card-duration">
                    <span className="duration-pill">{exp.date}</span>
                  </div>
                </div>

                {exp.subtitle && (
                  <p className="experience-card-context-subtitle">{exp.subtitle}</p>
                )}

                <ul className="experience-bullet-list">
                  {exp.descBullets.map((bullet, i) => (
                    <li key={i} className="experience-bullet-item">{bullet}</li>
                  ))}
                </ul>

                <div className="experience-card-tags-footer">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="tech-tag-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import "./Experience.scss";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Experience() {
  if (!workExperiences.viewExperiences) return null;

  return (
    <div className="experience-section-container dark-mode" id="experience" style={{ backgroundColor: "#17191e", padding: "70px 0" }}>
      <Fade bottom duration={1000} distance="20px">
        <h1 className="experience-main-title" style={{ color: "#ffffff", fontWeight: "700", letterSpacing: "-0.5px" }}>{workExperiences.title}</h1>
      </Fade>

      <div className="experience-cards-grid" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {workExperiences.experience.map((exp, index) => {
          // The first card (Staff Engineer) gets the premium active styling highlight
          const isCurrentRole = index === 0; 
          
          return (
            <Fade bottom duration={1000} distance="30px" key={exp.id}>
              <div 
                className={`experience-history-card dark-mode ${isCurrentRole ? "active-current-role" : ""}`}
                style={{ 
                  backgroundColor: "#1e222b", 
                  borderRadius: "24px",
                  padding: "32px",
                  border: isCurrentRole ? "1px solid rgba(96, 165, 250, 0.3)" : "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 14px 40px rgba(0, 0, 0, 0.2)"
                }}
              >
                <div className="card-header-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap", marginBottom: "16px" }}>
                  <div className="role-company-meta">
                    <h3 className="experience-card-role" style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 6px 0" }}>{exp.role}</h3>
                    <h4 className="experience-card-company" style={{ color: "#60a5fa", fontSize: "15px", fontWeight: "600", margin: 0 }}>
                      {exp.company} <span className="meta-location" style={{ color: "#86868b", fontWeight: "500" }}>• {exp.location}</span>
                    </h4>
                  </div>
                  <div className="experience-card-duration">
                    <span className="duration-pill" style={{ fontSize: "13px", color: "#cbd5e1", backgroundColor: "rgba(255,255,255,0.06)", padding: "6px 14px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.08)" }}>{exp.date}</span>
                  </div>
                </div>

                {exp.subtitle && (
                  <p className="experience-card-context-subtitle" style={{ color: "#a1a1a6", fontSize: "14px", margin: "0 0 16px 0" }}>{exp.subtitle}</p>
                )}

                <ul className="experience-bullet-list" style={{ paddingLeft: "18px", margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {exp.descBullets.map((bullet, i) => (
                    <li key={i} className="experience-bullet-item" style={{ color: "#e2e8f0", fontSize: "14.5px", lineHeight: "1.6" }}>{bullet}</li>
                  ))}
                </ul>

                <div className="experience-card-tags-footer" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="tech-tag-pill" style={{ fontSize: "11px", fontWeight: "500", padding: "5px 12px", borderRadius: "6px", backgroundColor: "rgba(255, 255, 255, 0.04)", color: "#cbd5e1", border: "1px solid rgba(255, 255, 255, 0.05)" }}>{skill}</span>
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

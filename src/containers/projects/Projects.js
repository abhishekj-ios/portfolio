import React, { useState, useContext } from "react";
import "./Project.scss"; // Keeps your original SCSS association
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const { isDark } = useContext(StyleContext);
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Safely guard against the section being disabled in portfolio.js
  if (!bigProjects || !bigProjects.display) {
    return null;
  }

  const openModal = (project) => {
    setActiveModalProject(project);
    document.body.style.overflow = "hidden"; // Locks main page scroll when modal is open
  };

  const closeModal = () => {
    setActiveModalProject(null);
    document.body.style.overflow = "unset"; // Restores scroll
  };

  return (
    <div className="main" id="opensource">
      <h1 className={isDark ? "dark-mode project-title" : "project-title"}>
        {bigProjects.title}
      </h1>
      <p className={isDark ? "dark-mode project-subtitle" : "project-subtitle"} style={{ textAlign: "center", opacity: 0.6, marginBottom: "30px" }}>
        {bigProjects.subtitle}
      </p>

      {/* Grid containing your 3 architecture cards */}
      <div className="repo-cards-div-main">
        {bigProjects.projects.map((proj) => (
          <div 
            key={proj.id}
            className={isDark ? "dark-mode repo-card-div" : "repo-card-div"}
            onClick={() => openModal(proj)}
            style={{ cursor: "pointer" }}
          >
            <div className="repo-name-div">
              <p className="repo-name">{proj.projectName}</p>
            </div>
            <p className="repo-description" style={{fontWeight: "600", color: isDark ? "#60a5fa" : "#2563eb"}}>{proj.architecture}</p>
            <p className="repo-text" style={{fontSize: "14px", opacity: 0.75, marginTop: "10px"}}>{proj.summary}</p>
            
            <div className="click-to-view" style={{marginTop: "20px", textAlign: "right", fontSize: "13px", fontWeight: "bold", color: isDark ? "#60a5fa" : "#2563eb"}}>
              <span>Architectural Blueprint ↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* Architectural Deep-Dive Modal Overlay */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div 
            className={isDark ? "dark-mode modal-container" : "modal-container"} 
            onClick={(e) => e.stopPropagation()} // Keeps clicks inside the modal from closing it
          >
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            
            <div className="modal-header">
              <h2 style={{margin: "0 0 5px 0"}}>{activeModalProject.projectName}</h2>
              <span className="modal-architecture-badge" style={{fontSize: "12px", fontWeight: "bold", color: isDark ? "#60a5fa" : "#2563eb"}}>{activeModalProject.architecture}</span>
            </div>

            <div className="modal-body" style={{marginTop: "20px text-align: left"}}>
              <div className="modal-section" style={{marginBottom: "20px"}}>
                <h3 style={{fontSize: "16px", color: isDark ? "#60a5fa" : "#1e40af", marginBottom: "5px"}}>The Engineering Challenge</h3>
                <p style={{fontSize: "14px", margin: "0", opacity: 0.9, lineHeight: "1.5"}}>{activeModalProject.challenge}</p>
              </div>

              <div className="modal-section" style={{marginBottom: "20px"}}>
                <h3 style={{fontSize: "16px", color: isDark ? "#60a5fa" : "#1e40af", marginBottom: "8px"}}>Core System Pillars</h3>
                <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span key={idx} style={{fontSize: "12px", background: isDark ? "#222936" : "#f3f4f6", padding: "5px 12px", borderRadius: "15px", fontWeight: "500"}}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 style={{fontSize: "16px", color: isDark ? "#60a5fa" : "#1e40af", marginBottom: "8px"}}>Architectural Milestones & Core Wins</h3>
                <ul style={{paddingLeft: "15px", margin: "0"}}>
                  {activeModalProject.wins.map((win, idx) => (
                    <li key={idx} style={{fontSize: "14px", marginBottom: "8px", lineHeight: "1.4"}}>{win}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useContext } from "react";
import "./Project.scss"; 
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const { isDark } = useContext(StyleContext);
  const [activeModalProject, setActiveModalProject] = useState(null);

  if (!bigProjects || !bigProjects.display) {
    return null;
  }

  const openModal = (project) => {
    setActiveModalProject(project);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    setActiveModalProject(null);
    document.body.style.overflow = "unset"; 
  };

  return (
    <div className="main" id="opensource">
      <div className="projects-container-wrapper">
        <h1 className={isDark ? "dark-mode project-title" : "project-title"}>
          {bigProjects.title}
        </h1>
        <p className={isDark ? "dark-mode project-subtitle" : "project-subtitle"}>
          {bigProjects.subtitle}
        </p>

        <div className="repo-cards-div-main">
          {bigProjects.projects.map((proj) => (
            <div 
              key={proj.id}
              className={isDark ? "dark-mode architectural-premium-card" : "architectural-premium-card"}
              onClick={() => openModal(proj)}
            >
              <div className="card-top-meta" style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                <img 
                  src={proj.icon.default || proj.icon} 
                  alt={proj.projectName} 
                  style={{ 
                    width: "64px", 
                    height: "64px", 
                    objectFit: "cover", 
                    borderRadius: "16px",
                    flexShrink: 0,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                  }} 
                />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <span className="architecture-tag" style={{ margin: 0, fontSize: "11px", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {proj.architecture}
                  </span>
                  <h2 className="project-display-name" style={{ margin: "4px 0 0 0", fontSize: "20px", lineHeight: "1.3" }}>
                    {proj.projectName}
                  </h2>
                </div>
              </div>
              
              <p className="project-display-summary">{proj.summary}</p>
              
              <div className="card-bottom-meta">
                <div className="mini-tech-preview">
                  {proj.techStack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="preview-pill">{tech}</span>
                  ))}
                  {proj.techStack.length > 3 && <span className="preview-pill-more">+{proj.techStack.length - 3}</span>}
                </div>
                <div className="blueprint-action-link">
                  Details <span className="arrow-motion">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div 
            className={isDark ? "dark-mode modal-container" : "modal-container"} 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            
            <div className="modal-header">
              <h2>{activeModalProject.projectName}</h2>
              <span className="modal-architecture-badge">{activeModalProject.architecture}</span>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>The Engineering Challenge</h3>
                <p>{activeModalProject.challenge}</p>
              </div>

              <div className="modal-section">
                <h3>Core System Pillars</h3>
                <div className="modal-tech-pills">
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Architectural Milestones & Core Wins</h3>
                <ul>
                  {activeModalProject.wins.map((win, idx) => (
                    <li key={idx}>{win}</li>
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

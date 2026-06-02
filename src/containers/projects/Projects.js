import React, { useState, useContext, useEffect } from "react";
import "./Project.scss"; 
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const { isDark } = useContext(StyleContext);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [preloadedIcons, setPreloadedIcons] = useState({});

  // BROWSER IMAGE CACHE PRELOADER
  useEffect(() => {
    if (bigProjects && bigProjects.projects) {
      bigProjects.projects.forEach((proj) => {
        const targetSrc = proj.icon?.default || proj.icon;
        if (targetSrc) {
          const img = new Image();
          img.src = targetSrc;
          img.onload = () => {
            setPreloadedIcons((prev) => ({
              ...prev,
              [proj.id]: targetSrc
            }));
          };
        }
      });
    }
  }, []);

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

  const handleViewAllApps = () => {
    window.location.href = window.location.origin + "/AllApps";
  };

  return (
    <div className="main" id="opensource" style={{ padding: "80px 0", width: "100%", backgroundColor: isDark ? "#0f0f11" : "#f5f5f7" }}>
      <div className="projects-container-wrapper" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 
            className={isDark ? "dark-mode project-title" : "project-title"} 
            style={{ 
              fontSize: "32px", 
              fontWeight: "700", 
              margin: "0 0 12px 0", 
              color: isDark ? "#ffffff" : "#1d1d1f",
              background: "transparent !important",
              backgroundColor: "transparent"
            }}
          >
            {bigProjects.title}
          </h1>
          <p 
            className={isDark ? "dark-mode project-subtitle" : "project-subtitle"} 
            style={{ 
              fontSize: "16px", 
              color: isDark ? "#a1a1a6" : "#86868b", 
              margin: 0,
              background: "transparent !important",
              backgroundColor: "transparent"
            }}
          >
            {bigProjects.subtitle}
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div 
          className="featured-apps-scroll-container"
          style={{ 
            display: "flex", 
            gap: "28px", 
            overflowX: "auto", 
            paddingBottom: "32px",
            paddingTop: "4px",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <style>{`
            .featured-apps-scroll-container::-webkit-scrollbar {
              display: none;
            }
            @media (min-width: 992px) {
              .featured-apps-scroll-container {
                display: grid !important;
                grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)) !important;
                overflow-x: visible !important;
                padding-bottom: 0 !important;
              }
              .showcase-card-node {
                scroll-snap-align: none !important;
                width: auto !important;
              }
            }
          `}</style>

          {bigProjects.projects.map((proj) => {
            const activeImageSrc = preloadedIcons[proj.id] || (proj.icon?.default || proj.icon);

            return (
              <div 
                key={proj.id}
                className="showcase-card-node"
                style={{ 
                  flex: "0 0 auto",
                  width: "85vw",
                  maxWidth: "360px",
                  scrollSnapAlign: "center",
                  backgroundColor: isDark ? "#1c1c1e" : "#ffffff",
                  border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.08)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: isDark ? "0 12px 40px rgba(0,0,0,0.5)" : "0 12px 30px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                {/* TOP HERO VISUAL IMAGE */}
                <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative", backgroundColor: isDark ? "#2c2c2e" : "#e5e5ea" }}>
                  {activeImageSrc && (
                    <img 
                      src={activeImageSrc} 
                      alt={proj.projectName} 
                      loading="eager"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover"
                      }} 
                    />
                  )}
                </div>

                {/* CARD DETAILS WRAPPER */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                  <div>
                    {/* APP TITLE */}
                    <h2 style={{ 
                      margin: "0 0 12px 0", 
                      fontSize: "22px", 
                      fontWeight: "600", 
                      letterSpacing: "-0.3px",
                      color: isDark ? "#ffffff" : "#1d1d1f" 
                    }}>
                      {proj.projectName.split(" — ")[0]}
                    </h2>

                    {/* ARCHITECTURE BADGE */}
                    <div style={{ 
                      fontSize: "11px", 
                      fontWeight: "600", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.5px", 
                      color: isDark ? "#0a84ff" : "#0071e3", 
                      marginBottom: "14px" 
                    }}>
                      {proj.architecture.split(" with ")[0]}
                    </div>

                    {/* SUMMARY TEXT */}
                    <p style={{ 
                      fontSize: "14.5px", 
                      lineHeight: "1.6", 
                      color: isDark ? "#e1e1e6" : "#48484a", 
                      margin: "0 0 18px 0" 
                    }}>
                      {proj.summary}
                    </p>

                    {/* PILL STACKS TRACK - Array sliced to 6 elements to guarantee exactly two rows with zero truncation */}
                    <div style={{ 
                      display: "flex", 
                      flexWrap: "wrap", 
                      gap: "8px 8px", 
                      marginBottom: "20px"
                    }}>
                      {proj.techStack.slice(0, 6).map((tech, idx) => (
                        <span key={idx} style={{
                          fontSize: "11px", 
                          padding: "5px 14px", 
                          borderRadius: "20px", 
                          backgroundColor: isDark ? "rgba(34, 54, 86, 0.3)" : "rgba(0, 113, 227, 0.05)",
                          color: isDark ? "#52a2ff" : "#0071e3",
                          border: isDark ? "1px solid rgba(82, 162, 255, 0.15)" : "1px solid rgba(0, 113, 227, 0.08)",
                          fontWeight: "500",
                          whiteSpace: "nowrap"
                        }}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* INTERACTIVE ACTION TRIGGER BUTTON */}
                  <button 
                    onClick={() => openModal(proj)}
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "12px",
                      border: "none",
                      backgroundImage: "linear-gradient(90deg, #2f54ff 0%, #a24eff 100%)", 
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: "600",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(47, 84, 255, 0.25)",
                      marginTop: "4px"
                    }}
                  >
                    See More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CENTER VIEW ALL APPS BUTTON GATE */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
          <button 
            onClick={handleViewAllApps}
            style={{
              padding: "14px 32px",
              backgroundColor: isDark ? "#2c2c2e" : "#ffffff",
              color: isDark ? "#ffffff" : "#1d1d1f",
              border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid #d2d2d7",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "background-color 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = isDark ? "#3a3a3c" : "#f5f5f7"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = isDark ? "#2c2c2e" : "#ffffff"}
          >
            See All Apps
          </button>
        </div>

      </div>

      {/* SYSTEM DETAIL EXPANSION DIALOG LAYER */}
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

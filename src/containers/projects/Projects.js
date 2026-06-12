import React, { useState, useContext, useEffect } from "react";
import "./Project.scss"; 
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects({ setPage }) {
  const { isDark } = useContext(StyleContext);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [preloadedIcons, setPreloadedIcons] = useState({});

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
    window.history.pushState({ page: "all-apps" }, "", "#projects-view");
    setPage("all-apps"); 
    window.scrollTo(0, 0);
  };

  return (
    <div className="main" id="opensource" style={{ padding: "90px 0", width: "100%", backgroundColor: isDark ? "#0f0f11" : "#f5f5f7", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <div className="projects-container-wrapper" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* HEADER SECTION (CLEANED & OPTIMIZED UP TOP) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.08)", paddingBottom: "24px", marginBottom: "48px" }}>
          <div style={{ textAlign: "left" }}>
            <h1 className={isDark ? "dark-mode project-title" : "project-title"} style={{ fontSize: "34px", fontWeight: "700", letterSpacing: "-0.5px", margin: "0 0 8px 0", color: isDark ? "#ffffff" : "#1d1d1f" }}>
              {bigProjects.title}
            </h1>
            <p className={isDark ? "dark-mode project-subtitle" : "project-subtitle"} style={{ fontSize: "15px", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px", color: isDark ? "#86868b" : "#6e6e73", margin: 0 }}>
              {bigProjects.subtitle}
            </p>
          </div>
          
          {/* REPOSITIONED SEE ALL APPS ACTION */}
          <button 
            onClick={handleViewAllApps}
            style={{
              padding: "10px 20px",
              backgroundColor: "transparent",
              border: "none",
              color: isDark ? "#ffffff" : "#000000",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "opacity 0.2s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
            onMouseOut={(e) => e.currentTarget.style.opacity = 1}
          >
            See All Apps <span style={{ fontSize: "16px" }}>→</span>
          </button>
        </div>

        {/* CARDS CONTAINER */}
        <div className="featured-apps-scroll-container" style={{ display: "flex", gap: "28px", overflowX: "auto", paddingBottom: "32px", paddingTop: "4px", scrollSnapType: "x mandatory" }}>
          <style>{`
            .featured-apps-scroll-container::-webkit-scrollbar { display: none; }
            @media (min-width: 992px) {
              .featured-apps-scroll-container { display: grid !important; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)) !important; overflow-x: visible !important; padding-bottom: 0 !important; }
              .showcase-card-node { scroll-snap-align: none !important; width: auto !important; }
            }
            .premium-btn {
              transition: background-color 0.2s ease, transform 0.1s ease !important;
            }
            .premium-btn:hover {
              background-color: ${isDark ? "#ffffff" : "#1d1d1f"} !important;
              color: ${isDark ? "#000000" : "#ffffff"} !important;
            }
            .premium-btn:active {
              transform: scale(0.98);
            }
          `}</style>
          {bigProjects.projects.map((proj) => {
            const activeImageSrc = preloadedIcons[proj.id] || (proj.icon?.default || proj.icon);
            return (
              <div key={proj.id} className="showcase-card-node" style={{ flex: "0 0 auto", width: "85vw", maxWidth: "360px", scrollSnapAlign: "center", backgroundColor: isDark ? "#161617" : "#ffffff", border: isDark ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: isDark ? "0 14px 40px rgba(0,0,0,0.3)" : "0 14px 35px rgba(0,0,0,0.05)" }}>
                <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative", backgroundColor: isDark ? "#222224" : "#e8e8ed" }}>
                  {activeImageSrc && <img src={activeImageSrc} alt={proj.projectName} loading="eager" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                </div>
                <div style={{ padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                  <div>
                    <h2 style={{ margin: "0 0 8px 0", fontSize: "24px", fontWeight: "700", letterSpacing: "-0.3px", color: isDark ? "#ffffff" : "#1d1d1f" }}>{proj.projectName.split(" — ")[0]}</h2>
                    <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", color: isDark ? "#86868b" : "#6e6e73", marginBottom: "16px" }}>{proj.architecture.split(" with ")[0]}</div>
                    <p style={{ fontSize: "14.5px", lineHeight: "1.6", color: isDark ? "#ceceeed" : "#424245", margin: "0 0 20px 0" }}>{proj.summary}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                      {proj.techStack.slice(0, 6).map((tech, idx) => (
                        <span key={idx} style={{ fontSize: "11px", padding: "6px 14px", borderRadius: "20px", backgroundColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.04)", color: isDark ? "#e1e1e6" : "#1d1d1f", border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)", fontWeight: "600" }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  {/* MODERN UPDATED SEE MORE BUTTON */}
                  <button 
                    onClick={() => openModal(proj)} 
                    className="premium-btn"
                    style={{ 
                      width: "100%", 
                      padding: "14px", 
                      borderRadius: "14px", 
                      border: "none", 
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)", 
                      color: isDark ? "#ffffff" : "#1d1d1f", 
                      fontSize: "15px", 
                      fontWeight: "600", 
                      cursor: "pointer"
                    }}
                  >
                    See More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL SECTION */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className={isDark ? "dark-mode modal-container" : "modal-container"} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>{activeModalProject.projectName}</h2>
              <span className="modal-architecture-badge">{activeModalProject.architecture}</span>
            </div>
            <div className="modal-body">
              <div className="modal-section"><h3>The Engineering Challenge</h3><p>{activeModalProject.challenge}</p></div>
              <div className="modal-section"><h3>Core System Pillars</h3><div className="modal-tech-pills">{activeModalProject.techStack.map((tech, idx) => <span key={idx} className="tech-pill">{tech}</span>)}</div></div>
              <div className="modal-section"><h3>Architectural Milestones & Core Wins</h3><ul>{activeModalProject.wins.map((win, idx) => <li key={idx}>{win}</li>)}</ul></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

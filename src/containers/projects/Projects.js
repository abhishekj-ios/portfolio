import React, { useState, useContext, useEffect, useRef } from "react";
import "./Project.scss"; 
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects({ setPage }) {
  const { isDark } = useContext(StyleContext);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [preloadedIcons, setPreloadedIcons] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (bigProjects && bigProjects.projects) {
      bigProjects.projects.forEach((proj) => {
        const targetSrc = proj.icon?.default || proj.icon;
        if (targetSrc) {
          const img = new Image();
          img.src = targetSrc;
          img.onload = () => {
            setPreloadedIcons((prev) => ({ ...prev, [proj.id]: targetSrc }));
          };
        }
      });
    }
  }, []);

  if (!bigProjects || !bigProjects.display) return null;

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
    <div 
      ref={sectionRef}
      className={`main scroll-reveal-section ${isVisible ? "reveal-visible" : ""}`}
      id="opensource" 
      style={{ 
        padding: "70px 0", 
        width: "100%", 
        backgroundColor: isDark ? "#222223" : "#f5f5f7", 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
      }}
    >
      <div className="projects-container-wrapper">
        
        {/* RESPONSIVE HEADER CONTAINER BLOCK */}
        <div className="projects-responsive-header">
          <div style={{ flex: "1" }}>
            <h1 className={isDark ? "dark-mode project-title" : "project-title"} style={{ fontWeight: "700", letterSpacing: "-0.5px", color: isDark ? "#ffffff" : "#1d1d1f", margin: 0 }}>
              {bigProjects.title}
            </h1>
          </div>
          
          <button 
            onClick={handleViewAllApps}
            className="see-all-apps-header-btn"
          >
            See All Apps <span>→</span>
          </button>
        </div>

        {/* CARDS CONTAINER CONTAINER */}
        <div className="featured-apps-scroll-container">
          {bigProjects.projects.map((proj) => {
            const activeImageSrc = preloadedIcons[proj.id] || (proj.icon?.default || proj.icon);
            return (
              <div key={proj.id} className="showcase-card-node" style={{ backgroundColor: isDark ? "#17191e" : "#ffffff", border: isDark ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: isDark ? "0 14px 40px rgba(0,0,0,0.2)" : "0 14px 35px rgba(0,0,0,0.04)" }}>
                <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative", backgroundColor: isDark ? "#22252c" : "#e8e8ed" }}>
                  {activeImageSrc && <img src={activeImageSrc} alt={proj.projectName} loading="eager" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                </div>
                <div style={{ padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                  <div>
                    <h2 style={{ margin: "0 0 6px 0", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.3px", color: isDark ? "#ffffff" : "#1d1d1f" }}>{proj.projectName.split(" — ")[0]}</h2>
                    <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", color: isDark ? "#86868b" : "#6e6e73", marginBottom: "16px" }}>{proj.architecture.split(" with ")[0]}</div>
                    <p style={{ fontSize: "14px", lineHeight: "1.6", color: isDark ? "#a1a1a6" : "#424245", margin: "0 0 20px 0" }}>{proj.summary}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                      {proj.techStack.slice(0, 6).map((tech, idx) => (
                        <span key={idx} style={{ fontSize: "11px", padding: "5px 12px", borderRadius: "6px", backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)", color: isDark ? "#cbd5e1" : "#1d1d1f", border: isDark ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(0, 0, 0, 0.04)", fontWeight: "500" }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openModal(proj)} 
                    className="premium-btn"
                  >
                    See More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PORTAL-GRADE FIXED MODAL HOOK */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div 
            className={isDark ? "dark-mode modal-container" : "modal-container"} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* STICKY DISMISSAL CONTROLS BAR */}
            <div className="modal-sticky-header">
              <div style={{ paddingRight: "20px" }}>
                <h2>{activeModalProject.projectName}</h2>
                <span className="modal-architecture-badge">
                  {activeModalProject.architecture}
                </span>
              </div>
              <button onClick={closeModal} className="modal-close-round-btn">✕</button>
            </div>
            
            {/* INNER SCROLL NODE CONTAINER */}
            <div className="modal-scrolling-body-content">
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
              <div className="modal-section" style={{ marginBottom: 0 }}>
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

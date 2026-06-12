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
    document.body.style.overflow = "hidden"; // Prevents page-scroll breakdown
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
      <div className="projects-container-wrapper" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
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

        {/* CARDS CONTAINER */}
        <div className="featured-apps-scroll-container" style={{ display: "flex", gap: "28px", overflowX: "auto", paddingBottom: "32px", paddingTop: "4px", scrollSnapType: "x mandatory" }}>
          <style>{`
            .featured-apps-scroll-container::-webkit-scrollbar { display: none; }
            
            /* RESPONSIVE MEDIA BLOCK BREAKDOWNS */
            .projects-responsive-header {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
              text-align: center;
              margin-bottom: 40px;
              border-bottom: ${isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.08)"};
              padding-bottom: 24px;
            }
            .project-title { font-size: 28px; }
            .see-all-apps-header-btn {
              background-color: transparent;
              border: none;
              color: ${isDark ? "#60a5fa" : "#2563eb"};
              font-size: 15px;
              font-weight: 600;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 6px;
              padding: 8px 16px;
              transition: opacity 0.2s ease;
            }

            @media (min-width: 768px) {
              .projects-responsive-header {
                flex-direction: row !important;
                justify-content: space-between !important;
                align-items: flex-end !important;
                text-align: left !important;
              }
              .project-title { font-size: 36px !important; }
              .see-all-apps-header-btn {
                color: ${isDark ? "#a1a1a6" : "#6e6e73"} !important;
                padding: 0 !important;
              }
              .see-all-apps-header-btn:hover {
                color: ${isDark ? "#ffffff" : "#000000"} !important;
              }
            }

            @media (min-width: 992px) {
              .featured-apps-scroll-container { display: grid !important; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)) !important; overflow-x: visible !important; padding-bottom: 0 !important; }
              .showcase-card-node { scroll-snap-align: none !important; width: auto !important; }
            }
            
            .premium-btn {
              transition: background-color 0.2s ease, border-color 0.2s ease !important;
            }
            .premium-btn:hover {
              background-color: ${isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"} !important;
              border-color: ${isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"} !important;
            }
          `}</style>
          {bigProjects.projects.map((proj) => {
            const activeImageSrc = preloadedIcons[proj.id] || (proj.icon?.default || proj.icon);
            return (
              <div key={proj.id} className="showcase-card-node" style={{ flex: "0 0 auto", width: "85vw", maxWidth: "360px", scrollSnapAlign: "center", backgroundColor: isDark ? "#17191e" : "#ffffff", border: isDark ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: isDark ? "0 14px 40px rgba(0,0,0,0.2)" : "0 14px 35px rgba(0,0,0,0.04)" }}>
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
                  
                  {/* COHESIVE SYSTEM BUTTON */}
                  <button 
                    onClick={() => openModal(proj)} 
                    className="premium-btn"
                    style={{ 
                      width: "100%", 
                      padding: "13px", 
                      borderRadius: "10px", 
                      border: isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.08)", 
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.02)", 
                      color: isDark ? "#f3f4f6" : "#1d1d1f", 
                      fontSize: "14px", 
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

      {/* FIXED MOBILE MODAL SYSTEM (Absolute Position Fixed Breakdown) */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={closeModal} style={{ padding: "16px" }}>
          <div 
            className={isDark ? "dark-mode modal-container" : "modal-container"} 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: "82vh", // Keeps content safely bounds-restricted on short screens
              overflowY: "auto", // Forces scroll activation inside card element container
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* STICKY ACCESSIBLE MOBILE CLOSE BUTTON HEADER RING */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", width: "100%" }}>
              <div style={{ paddingRight: "30px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 6px 0", color: isDark ? "#ffffff" : "#111827" }}>
                  {activeModalProject.projectName}
                </h2>
                <span className="modal-architecture-badge" style={{ fontSize: "11px" }}>
                  {activeModalProject.architecture}
                </span>
              </div>
              <button 
                onClick={closeModal}
                style={{ 
                  background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                  border: "none", 
                  borderRadius: "50%", 
                  width: "36px", 
                  height: "36px", 
                  fontSize: "20px", 
                  cursor: "pointer", 
                  color: isDark ? "#ffffff" : "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifycontent: "center",
                  flexShrink: 0
                }}
              >
                ✕
              </button>
            </div>
            
            <div className="modal-body" style={{ overflowY: "visible" }}>
              <div className="modal-section">
                <h3 style={{ fontSize: "13px" }}>The Engineering Challenge</h3>
                <p style={{ fontSize: "13.5px" }}>{activeModalProject.challenge}</p>
              </div>
              <div className="modal-section">
                <h3 style={{ fontSize: "13px" }}>Core System Pillars</h3>
                <div className="modal-tech-pills">{activeModalProject.techStack.map((tech, idx) => <span key={idx} className="tech-pill" style={{ fontSize: "11px", padding: "4px 10px" }}>{tech}</span>)}</div>
              </div>
              <div className="modal-section" style={{ marginBottom: 0 }}>
                <h3 style={{ fontSize: "13px" }}>Architectural Milestones & Core Wins</h3>
                <ul style={{ margin: 0 }}>{activeModalProject.wins.map((win, idx) => <li key={idx} style={{ fontSize: "13.5px" }}>{win}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
    <div className="main" id="opensource" style={{ padding: "80px 0", width: "100%", backgroundColor: isDark ? "#0f0f11" : "#f5f5f7" }}>
      <div className="projects-container-wrapper" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 className={isDark ? "dark-mode project-title" : "project-title"} style={{ fontSize: "32px", fontWeight: "700", margin: "0 0 12px 0", color: isDark ? "#ffffff" : "#1d1d1f" }}>
            {bigProjects.title}
          </h1>
          <p className={isDark ? "dark-mode project-subtitle" : "project-subtitle"} style={{ fontSize: "16px", color: isDark ? "#a1a1a6" : "#86868b", margin: 0 }}>
            {bigProjects.subtitle}
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="featured-apps-scroll-container" style={{ display: "flex", gap: "28px", overflowX: "auto", paddingBottom: "32px", paddingTop: "4px", scrollSnapType: "x mandatory" }}>
          <style>{`
            .featured-apps-scroll-container::-webkit-scrollbar { display: none; }
            @media (min-width: 992px) {
              .featured-apps-scroll-container { display: grid !important; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)) !important; overflow-x: visible !important; padding-bottom: 0 !important; }
              .showcase-card-node { scroll-snap-align: none !important; width: auto !important; }
            }
          `}</style>
          {bigProjects.projects.map((proj) => {
            const activeImageSrc = preloadedIcons[proj.id] || (proj.icon?.default || proj.icon);
            return (
              <div key={proj.id} className="showcase-card-node" style={{ flex: "0 0 auto", width: "85vw", maxWidth: "360px", scrollSnapAlign: "center", backgroundColor: isDark ? "#1c1c1e" : "#ffffff", border: isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "20px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "100%", height: "200px", overflow: "hidden", position: "relative", backgroundColor: isDark ? "#2c2c2e" : "#e5e5ea" }}>
                  {activeImageSrc && <img src={activeImageSrc} alt={proj.projectName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                </div>
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
                  <h2 style={{ margin: "0 0 12px 0", fontSize: "22px", fontWeight: "600", color: isDark ? "#ffffff" : "#1d1d1f" }}>{proj.projectName.split(" — ")[0]}</h2>
                  <button onClick={() => openModal(proj)} style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "none", backgroundImage: "linear-gradient(90deg, #2f54ff 0%, #a24eff 100%)", color: "#ffffff", fontSize: "15px", fontWeight: "600", cursor: "pointer", marginTop: "14px" }}>See More</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* GLASS BUTTON */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
          <button 
            onClick={handleViewAllApps}
            style={{
              padding: "14px 32px",
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(0, 0, 0, 0.1)",
              color: isDark ? "#ffffff" : "#1d1d1f",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            See All Apps
          </button>
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
              <div className="modal-section"><h3>Architectural Milestones</h3><ul>{activeModalProject.wins.map((win, idx) => <li key={idx}>{win}</li>)}</ul></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

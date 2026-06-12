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
    return () => observer.disconnect();
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
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div className="projects-container-wrapper">
        {/* Header */}
        <div className="projects-responsive-header">
          <h1
            className={isDark ? "dark-mode project-title" : "project-title"}
            style={{
              fontWeight: "700",
              letterSpacing: "-0.5px",
              color: isDark ? "#ffffff" : "#1d1d1f",
              margin: 0,
            }}
          >
            {bigProjects.title}
          </h1>
          <button onClick={handleViewAllApps} className="see-all-apps-header-btn">
            See All Apps <span>>></span>
          </button>
        </div>

        {/* Cards */}
        <div className="featured-apps-scroll-container">
          {bigProjects.projects.map((proj) => {
            const activeImageSrc =
              preloadedIcons[proj.id] || proj.icon?.default || proj.icon;

            return (
              <div key={proj.id} className="showcase-card-node">
                <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                  {activeImageSrc && (
                    <img
                      src={activeImageSrc}
                      alt={proj.projectName}
                      loading="eager"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
                <div style={{ padding: "28px", flexGrow: 1 }}>
                  <h2>{proj.projectName.split(" - ")[0]}</h2>
                  <p>{proj.summary}</p>
                  <button onClick={() => openModal(proj)} className="premium-btn">
                    See More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {activeModalProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className={isDark ? "dark-mode modal-container" : "modal-container"}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h2>{activeModalProject.projectName}</h2>
                <span className="modal-architecture-badge">
                  {activeModalProject.architecture}
                </span>
              </div>
              <button onClick={closeModal}>✕</button>
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
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
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

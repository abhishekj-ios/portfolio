import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";

function Header({ setPage }) {
  const headerBackground = "rgba(15, 12, 32, 0.75)";
  const glassBlur = "blur(20px)";
  const permanentWhite = "#ffffff"; // Locks text color to pure white universally

  const closeMenu = () => {
    const checkbox = document.getElementById("menu-btn");
    if (checkbox) checkbox.checked = false;
  };
  const navigateToAllProjects = () => {
    closeMenu(); // Close mobile menu first
    window.history.pushState({ page: "all-apps" }, "", "#projects-view");
    if (setPage) setPage("all-apps"); 
    window.scrollTo(0, 0);
  };
  return (
      <header 
        className="dark-menu header"
        style={{
          backgroundColor: headerBackground, 
          backdropFilter: glassBlur, 
          WebkitBackdropFilter: glassBlur, 
          borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
          width: "100%",
          transition: "all 0.3s ease",
          position: "sticky", 
          top: 0,
          zIndex: 1000
        }}
      >
        <div className="header-container">
          
          {/* BRAND NAME LOGO */}
          <div className="logo">
            <span 
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: "600",       
                fontSize: "19px",         
                letterSpacing: "-0.3px",  
                color: permanentWhite, 
                lineHeight: "1"
              }}
            >
              Abhishek J
            </span>
          </div>

          {/* MOBILE TOGGLE MECHANICS */}
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{ color: permanentWhite }}
          >
            <span className="navicon navicon-dark"></span>
          </label>

          {/* NAVIGATION LINKS */}
          <ul className="dark-menu menu">
            <li>
              <a 
                href="#whatIDo" 
                onClick={closeMenu} 
                style={{ color: permanentWhite }} 
                onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"} 
                onMouseLeave={(e) => e.currentTarget.style.color = permanentWhite}
              >
                Expertise
              </a>
            </li>
            <li>
              <a 
                href="#opensource" 
                onClick={closeMenu} 
                style={{ color: permanentWhite }} 
                onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"}
                onMouseLeave={(e) => e.currentTarget.style.color = permanentWhite}
              >
                Recent Projects
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={closeMenu} 
                style={{ color: permanentWhite }} 
                onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"}
                onMouseLeave={(e) => e.currentTarget.style.color = permanentWhite}
              >
                Work Experience
              </a>
            </li>
            <li>
            <span 
              onClick={navigateToAllProjects}
              style={{ 
                color: permanentWhite, 
                cursor: "pointer",
                fontSize: "inherit", 
                fontWeight: "inherit"
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"}
              onMouseLeave={(e) => e.currentTarget.style.color = permanentWhite}
            >
              All Projects
            </span>
          </li>
          </ul>

        </div>
      </header>
  );
}

export default Header;

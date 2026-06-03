import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { isDark } = useContext(StyleContext);

  const headerBackground = isDark ? "rgba(15, 12, 32, 0.75)" : "rgba(255, 255, 255, 0.85)";
  const glassBlur = "blur(20px)";

  return (
    <Headroom
      // FIXED: Allow the headroom layout wrapper to breathe and dynamically scale when the mobile drawer expands
      wrapperStyle={{
        backgroundColor: headerBackground,
        backdropFilter: glassBlur,
        WebkitBackdropFilter: glassBlur,
        transition: "background-color 0.3s ease"
      }}
    >
      <header 
        className={isDark ? "dark-menu header" : "header"}
        style={{
          backgroundColor: headerBackground, 
          backdropFilter: glassBlur, 
          WebkitBackdropFilter: glassBlur, 
          borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.04)" : "1px solid rgba(0, 0, 0, 0.05)",
          width: "100%",
          transition: "all 0.3s ease"
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
                color: isDark ? "#ffffff" : "#1d1d1f",
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
            style={{ color: isDark ? "white" : "black" }}
          >
            <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
          </label>

          {/* NAVIGATION LINKS */}
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            <li>
              <a 
                href="#whatIDo" 
                onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"} 
                onMouseLeave={(e) => e.currentTarget.style.color = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)"}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#opensource" 
                onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"}
                onMouseLeave={(e) => e.currentTarget.style.color = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)"}
              >
                Recents
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"}
                onMouseLeave={(e) => e.currentTarget.style.color = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)"}
              >
                Experience
              </a>
            </li>
          </ul>

        </div>
      </header>
    </Headroom>
  );
}

export default Header;

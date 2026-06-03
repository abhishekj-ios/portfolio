import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { isDark } = useContext(StyleContext);

  // Define the premium theme styles so they can be injected into both Headroom and the header element
  const headerBackground = isDark ? "rgba(15, 12, 32, 0.75)" : "rgba(255, 255, 255, 0.85)";
  const glassBlur = "blur(20px)";

  return (
    <Headroom
      // FORCE HEADROOM WRAPPER MATCH: This ensures react-headroom doesn't render a solid or clear block
      wrapperStyle={{
        backgroundColor: headerBackground,
        backdropFilter: glassBlur,
        WebkitBackdropFilter: glassBlur,
        transition: "all 0.3s ease"
      }}
    >
      <header 
        className={isDark ? "dark-menu header" : "header"}
        style={{
          padding: "18px 0", 
          backgroundColor: headerBackground, 
          backdropFilter: glassBlur, 
          WebkitBackdropFilter: glassBlur, 
          borderBottom: isDark ? "1px solid rgba(255, 255, 255, 0.04)" : "1px solid rgba(0, 0, 0, 0.05)",
          width: "100%",
          transition: "all 0.3s ease"
        }}
      >
        {/* CONTAINER WRAPPER */}
        <div 
          style={{
            maxWidth: "1340px", 
            margin: "0 auto",
            padding: "0 6%", 
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          
          {/* BRAND NAME LOGO */}
          <div 
            className="logo" 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              cursor: "default",
              userSelect: "none"
            }}
          >
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
          <ul 
            className={isDark ? "dark-menu menu" : "menu"}
            style={{
              display: "flex",
              gap: "36px", 
              listStyle: "none",
              margin: 0,
              padding: 0,
              alignItems: "center"
            }}
          >
            <li>
              <a 
                href="#whatIDo" 
                style={{ 
                  textDecoration: "none", 
                  fontSize: "14px", 
                  fontWeight: "500",
                  color: isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)",
                  letterSpacing: "-0.1px",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"} 
                onMouseLeave={(e) => e.currentTarget.style.color = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)"}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#opensource" 
                style={{ 
                  textDecoration: "none", 
                  fontSize: "14px", 
                  fontWeight: "500",
                  color: isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)",
                  letterSpacing: "-0.1px",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#2f80ed"}
                onMouseLeave={(e) => e.currentTarget.style.color = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)"}
              >
                Recents
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                style={{ 
                  textDecoration: "none", 
                  fontSize: "14px", 
                  fontWeight: "500",
                  color: isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)",
                  letterSpacing: "-0.1px",
                  transition: "color 0.2s ease"
                }}
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

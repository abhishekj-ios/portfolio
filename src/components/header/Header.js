import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header 
        className={isDark ? "dark-menu header" : "header"}
        style={{
          padding: "24px 0", // Premium spacious padding
          backgroundColor: isDark ? "#000000" : "#ffffff",
          transition: "all 0.2s ease-in-out"
        }}
      >
        {/* CONTAINER WRAPPER */}
        <div 
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          
          {/* --- CHANGED: Clean Typography Logo (Abhishek J) --- */}
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
                fontWeight: "700",       // Clean, professional bold weight
                fontSize: "20px",         // Scaled perfectly for the full string length
                letterSpacing: "-0.2px",  // Slightly tighter kerning for a crisp modern look
                color: isDark ? "#ffffff" : "#1d1d1f",
                lineHeight: "1"
              }}
            >
              Abhishek J
            </span>
          </div>
          {/* ---------------------------------------------------- */}

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
              gap: "32px",
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
                  fontSize: "15px", 
                  fontWeight: "500",
                  letterSpacing: "-0.1px"
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#opensource" 
                style={{ 
                  textDecoration: "none", 
                  fontSize: "15px", 
                  fontWeight: "500",
                  letterSpacing: "-0.1px"
                }}
              >
                Recents
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                style={{ 
                  textDecoration: "none", 
                  fontSize: "15px", 
                  fontWeight: "500",
                  letterSpacing: "-0.1px"
                }}
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

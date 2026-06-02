import React, { useContext } from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <footer 
      className={isDark ? "dark-mode footer-main" : "footer-main"}
      style={{
        padding: "20px 20px", // Snug vertical tracking to eliminate dead spacing
        textAlign: "center",
        backgroundColor: isDark ? "#0f0f11" : "#f5f5f7",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: isDark ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(0, 0, 0, 0.05)"
      }}
    >
      <div 
        className="footer-div" 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "12px", // Tightened inner gap layout
          maxWidth: "1200px",
          width: "100%"
        }}
      >
        {/* TEXT BRANDING STRIPS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p 
            className={isDark ? "dark-mode footer-text" : "footer-text"}
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: "400",
              color: isDark ? "#a1a1a6" : "#515154",
              lineHeight: "1.4",
              background: "transparent !important", // Strips out the template gray highlight boxes
              backgroundColor: "transparent"
            }}
          >
            Crafting high-performance, modular iOS systems.
          </p>
          <p 
            className={isDark ? "dark-mode footer-text" : "footer-text"}
            style={{
              margin: 0,
              fontSize: "12.5px",
              fontWeight: "400",
              color: isDark ? "#6e6e73" : "#86868b",
              lineHeight: "1.4",
              background: "transparent !important", // Strips out the template gray highlight boxes
              backgroundColor: "transparent"
            }}
          >
            Built using the open-source foundation by the DeveloperFolio Team.
          </p>
        </div>

        {/* SOCIAL ICON BAR TRACK */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "20px",
            margin: "2px 0"
          }}
        >
          {/* GITHUB - Structural Graphic Asset (No Click Action) */}
          <span 
            style={{ 
              color: isDark ? "#a1a1a6" : "#515154",
              display: "inline-flex",
              alignItems: "center",
              background: "transparent"
            }}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="19" width="19" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </span>

          {/* LINKEDIN - Your Verified Active URL Gateway */}
          <a 
            href="https://www.linkedin.com/in/abhishek-j-ios/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: isDark ? "#a1a1a6" : "#515154",
              display: "inline-flex",
              alignItems: "center",
              transition: "color 0.2s ease",
              background: "transparent"
            }}
            onMouseOver={(e) => e.currentTarget.style.color = isDark ? "#ffffff" : "#0071e3"}
            onMouseOut={(e) => e.currentTarget.style.color = isDark ? "#a1a1a6" : "#515154"}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="19" width="19" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
            </svg>
          </a>

          {/* EMAIL - Mailto Link Protocol */}
          <a 
            href="mailto:your.email@example.com" 
            style={{ 
              color: isDark ? "#a1a1a6" : "#515154",
              display: "inline-flex",
              alignItems: "center",
              transition: "color 0.2s ease",
              background: "transparent"
            }}
            onMouseOver={(e) => e.currentTarget.style.color = isDark ? "#ffffff" : "#0071e3"}
            onMouseOut={(e) => e.currentTarget.style.color = isDark ? "#a1a1a6" : "#515154"}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="19" width="19" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.844 8 9.6l-1.271-.756L1.034 12.261A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"></path>
            </svg>
          </a>
        </div>

        {/* BOTTOM BASE COPYRIGHT LABEL */}
        <p 
          className={isDark ? "dark-mode footer-text" : "footer-text"}
          style={{
            margin: 0,
            fontSize: "12px",
            color: isDark ? "#6e6e73" : "#86868b",
            letterSpacing: "-0.1px",
            background: "transparent !important", // Strips out the template gray highlight boxes
            backgroundColor: "transparent"
          }}
        >
          © {new Date().getFullYear()} Abhishek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

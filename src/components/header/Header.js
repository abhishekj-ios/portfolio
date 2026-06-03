import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        
        {/* --- CHANGED: Removed <a> tag link and replaced text with your logo image --- */}
        <div 
          className="logo" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            cursor: "default" // Makes it look non-clickable
          }}
        >
          <img 
            src={require("../../assets/images/logo.png")} 
            alt="Logo" 
            style={{ 
              height: "35px",   // Adjust this height if you want it bigger or smaller
              width: "auto", 
              objectFit: "contain" 
            }} 
          />
        </div>
        {/* --------------------------------------------------------------------------- */}

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#whatIDo">Skills</a>
          </li>
          <li>
            <a href="#opensource">Recents</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;

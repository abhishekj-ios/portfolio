import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo" style={{ textDecoration: "none" }}>
          <span 
            className="logo-name" 
            style={{ 
              fontFamily: "inherit", 
              fontWeight: "700", 
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}
          >
            {greeting.username}
          </span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#opensource">Recents</a>
          </li>
          <li>
            <a href="#workExperience">Experience</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;

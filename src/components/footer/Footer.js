import React, { useContext } from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <footer className={isDark ? "dark-mode footer-main" : "footer-main"}>
      <div className="footer-div">
        <div>
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
            Crafting high-performance, modular iOS systems.
          </p>
          <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
            Built using the open-source foundation by the DeveloperFolio Team.
          </p>
        </div>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {new Date().getFullYear()} Abhishek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

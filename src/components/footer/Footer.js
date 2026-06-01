import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* Meaningful baseline data about your practice */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Crafting high-performance, modular iOS systems.
        </p>
        
        {/* Your personal copyright ownership line */}
        <p className={isDark ? "dark-mode footer-text copyright" : "footer-text copyright"}>
          © {new Date().getFullYear()} Abhishek. All rights reserved.
        </p>

        {/* Clean, respectful courtesy to the original open-source team */}
        <p className={isDark ? "dark-mode footer-text courtesy" : "footer-text courtesy"}>
          Built using the open-source foundation by the DeveloperFolio Team.
        </p>
      </div>
    </Fade>
  );
}

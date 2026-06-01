import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  // Clean-slate styling objects to bypass all hidden framework layouts completely
  const absoluteWrapperStyle = {
    width: "100%",
    maxWidth: "100%",
    clear: "both",
    display: "block",
    padding: "0px",
    margin: "40px 0px 0px 0px"
  };

  const verticalStackStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: "100%",
    padding: "0px",
    margin: "0px"
  };

  const fullWidthHeaderStyle = {
    width: "100%",
    maxWidth: "100%",
    textAlign: "left",
    padding: "0px",
    margin: "0px"
  };

  const fullWidthSubtitleStyle = {
    width: "100%",
    maxWidth: "850px", // Maintains perfect line-length readability for senior technical descriptions
    textAlign: "left",
    display: "block",
    margin: "0px 0px 30px 0px",
    fontSize: "18px",
    lineHeight: "1.6"
  };

  const leftAlignedLinksStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    gap: "12px",
    margin: "0px",
    padding: "0px"
  };

  const killImageStyle = {
    display: "none",
    width: "0px",
    height: "0px",
    opacity: 0,
    visibility: "hidden"
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      {/* REMOVED ".main" and ".contact-margin-top" classes to kill framework overrides */}
      <div id="contact" style={absoluteWrapperStyle}>
        <div style={verticalStackStyle}>
          <div style={fullWidthHeaderStyle}>
            
            {/* Restored your clean title text variable */}
            <h1 style={{ textAlign: "left", width: "100%", fontWeight: 700, fontSize: "40px", margin: "0px 0px 20px 0px" }}>
              {contactInfo.title}
            </h1>

            <p
              style={fullWidthSubtitleStyle}
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            
            <div
              style={leftAlignedLinksStyle}
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                    style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: "500" }}
                  >
                    {contactInfo.number}
                  </a>
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
                style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: "500" }}
              >
                {contactInfo.email_address}
              </a>
              <div style={{ marginTop: "15px" }}>
                <SocialMedia />
              </div>
            </div>
          </div>

          {/* This wrapper is now completely blocked from rendering structural width */}
          <div style={killImageStyle}>
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img alt="Mail illustration" src={require("../../assets/images/contactMailDark.svg")} />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

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

  // Inline styling blocks to completely bypass external SCSS files and force alignment
  const mainWrapperStyle = {
    width: "100%",
    maxWidth: "100%",
    paddingLeft: "0px",
    paddingRight: "0px",
    marginLeft: "0px",
    marginRight: "0px"
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: "100%",
    padding: "0px",
    margin: "0px"
  };

  const headerStyle = {
    width: "100%",
    maxWidth: "100%",
    flex: "1 1 100%",
    padding: "0px",
    margin: "0px",
    textAlign: "left"
  };

  const subtitleStyle = {
    width: "100%",
    maxWidth: "850px",
    textAlign: "left",
    display: "block",
    marginBottom: "35px"
  };

  const textDivStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    gap: "8px"
  };

  const hiddenImageStyle = {
    display: "none",
    width: "0px",
    height: "0px",
    opacity: 0,
    visibility: "hidden",
    margin: "0px",
    padding: "0px"
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact" style={mainWrapperStyle}>
        <div className="contact-div-main" style={containerStyle}>
          <div className="contact-header" style={headerStyle}>
            <h1 className="heading contact-title" style={{ textAlign: "left", width: "100%", fontWeight: 700 }}>
              {contactInfo.title}
            </h1>
            <p
              style={subtitleStyle}
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              style={textDivStyle}
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                    style={{ textDecoration: "none", display: "inline-block" }}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div" style={hiddenImageStyle}>
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

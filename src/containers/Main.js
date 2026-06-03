import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import StackProgress from "./skillProgress/skillProgress";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import WhatIDo from "./whatIDo/WhatIDo";
import Experience from "./experience/Experience";

const Main = ({ setPage }) => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  // --- FORCE HARD CHECKPOINT ON HASH CHANGE ---
  useEffect(() => {
    const handlePopState = () => {
      // If the hash disappears because the user hit back, restore home page state
      if (!window.location.hash.includes("#projects-view")) {
        setPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [setPage]);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(() => {
        setIsShowingSplashAnimation(false);
      }, splashScreen.duration);
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting setPage={setPage} />
            <WhatIDo />
            <StackProgress />
            <Education />
            <Projects setPage={setPage} />
            <Experience />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;

/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Sections
const illustration = {
  animated: false
};

const greeting = {
  username: "Abhishek",
  title: "Hello, I'm Abhishek",
  subTitle: "Senior iOS Developer",
  resumeSectionDescription: "With 12+ years of expertise in Swift and SwiftUI, I design and deliver scalable, high-performance mobile applications. My focus is on clean architecture, maintainability, and user-centric design.",
  resumeLink: "https://drive.google.com/file/d/14qK3Vm5Ud6vJEbKiPpRGzSQ_EsdM7wvk/view?usp=sharing",
  displayGreeting: true 
};

// Social Media Links
const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/abhishek-j-ios",
  gmail: "kailasj281@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@abhishek_j",
  stackoverflow: "",
  display: true
};

// Skills Section
export const whatIDo = {
  title: "Specializations & Expertise",
  subTitle: "Over a decade of engineering high-performance mobile systems, shaping modular codebases, and scaling technical teams.",
  skills: [
    { id: "1", title: "iOS Development", description: "Building scalable, robust, and enterprise-ready native applications leveraging the full power of Swift & SwiftUI.", icon: "swift" },
    { id: "2", title: "App Architecture", description: "Designing modular software ecosystems using MVVM, VIPER, and clean separation of concerns for maintainable lifecycles.", icon: "architecture" },
    { id: "3", title: "UI/UX & Fluid Motion", description: "Crafting polished animations, highly responsive layouts, and accessible interfaces that elevate the overall user experience.", icon: "uiux" },
    { id: "4", title: "Technical Leadership", description: "Driving engineering excellence by mentoring developers, defining production health standards, and spearheading cross-functional roadmaps.", icon: "leadership" }
  ]
};

export const skillsSection = { title: "Proficiency", subTitle: "", skills: [] };

// Education Section
const educationInfo = { display: false, schools: [] };

// Tech Experience
const techStack = {
  viewSkillBars: false,
  experience: [
    { Stack: "Swift & SwiftUI Architecture", progressPercentage: "95%" },
    { Stack: "UIKit & Legacy Migration", progressPercentage: "90%" },
    { Stack: "Protocol-Oriented Design (POP)", progressPercentage: "85%" }
  ],
  displayCodersrank: false 
};

// Big Projects
const bigProjects = {
  title: "Featured Production Apps",
  subtitle: "A technical spotlight on my 3 most recent native deployments",
  display: true,
  projects: [
    {
      id: "hero-bloom",
      projectName: "Bloom — IoT Micro-Mobility Platform",
      icon: require("./assets/images/bloom-icon.png"),
      architecture: "Modular MVVM Architecture with Hardware Isolation Layers",
      summary: "Architectural core driving an IoT bike-rental engine scaled seamlessly across 7 distinct white-label client variants. Isolates custom firmware protocols from core business logic.",
      challenge: "Managing asynchronous hardware state-machines, real-time geolocation tracking, and high-stakes multi-tenant payment pipelines concurrently without locking the main thread.",
      techStack: ["CoreBluetooth", "Stripe API", "Apple Pay", "MapKit Core", "Firebase Stream"],
      wins: [
        "Architected an abstract Bluetooth communication layer that gracefully handles hardware variations across multiple lock manufacturers.",
        "Engineered a thread-safe rental billing calculator processing real-time ride duration and server data syncing.",
        "Successfully delivered high functional and UI customization modules across 7 live production derivatives."
      ]
    },
    {
      id: "hero-smartfin",
      projectName: "SmartFin — Institutional Banking Hub",
      icon: require("./assets/images/smartfin-icon.png"),
      architecture: "Decoupled VIPER Architecture with Strict Interface Abstraction",
      summary: "Enterprise trade-finance services platform enabling international traders to securely negotiate financial assistance directly with international partner banks.",
      challenge: "Handling heavy concurrent data payloads, rendering multi-tiered interactive financial charts, and maintaining air-gapped security parameters across separate role-based submodules.",
      techStack: ["VIPER Core", "Swift Concurrency", "Background Tasks", "Interactive Charting Core"],
      wins: [
        "Achieved 100% decoupling of complex bank/trader transaction lifecycles using strict protocol-driven routing.",
        "Optimized rendering logic and background data ingestion pipelines to maximize UI performance during intense trade spikes.",
        "Implemented secure, localized role-based access tokens separating authorization models between distinct financial parties."
      ]
    },
    {
      id: "hero-smartflow",
      projectName: "SmartFlow — Real-Time Ledger Monitor",
      icon: require("./assets/images/smartflow-icon.png"),
      architecture: "Event-Driven VIPER Core with Asynchronous Telemetry",
      summary: "A secure tracking system built to ingest, map, and visualize transaction states across distributed blockchain networks in real-time.",
      challenge: "Translating rapid immutable distributed ledger entries into a fluid, low-latency UI lifecycle timeline without generating memory leaks or performance bottlenecks.",
      techStack: ["VIPER Core", "Blockchain API Services", "Real-Time Logs", "State Visualization Layers"],
      wins: [
        "Engineered a low-latency transaction status parser that transforms live stream telemetry into structural event logs.",
        "Constructed a high-fidelity transaction lifecycle visualization component using performance-tuned rendering structures.",
        "Eliminated runtime retention cycles entirely during persistent WebSockets/API polling phases."
      ]
    }
  ]
};

// Exports
export const workExperiences = { viewExperiences: true, title: "Work History", experience: [] }; // (Truncated for brevity, keep your original workExperience object)
const openSource = { showGithubProfile: "false", display: false };
const achievementSection = { title: emoji("Achievements & Milestones 🏆"), subtitle: "", achievementsCards: [], display: false };
const blogSection = { display: false, blogs: [] };
const talkSection = { display: false, talks: [] };
const podcastSection = { display: false, podcast: [] };
const resumeSection = { title: "Curriculum Vitae", subtitle: "", display: false };
const contactInfo = { title: "Get In Touch", subtitle: "", number: "+91 9496775713", email_address: "kailasj281@gmail.com", display: false };
const twitterDetails = { userName: "", display: false };
const isHireable = true;

export {
  splashScreen, illustration, greeting, socialMediaLinks, educationInfo, techStack,
  openSource, bigProjects, achievementSection, blogSection, talkSection,
  podcastSection, contactInfo, twitterDetails, isHireable, resumeSection
};

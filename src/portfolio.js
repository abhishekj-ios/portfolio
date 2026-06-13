
/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

import bloomIcon from './assets/images/bloomnew.webp';
import smartFinIcon from './assets/images/SmartFin.webp';
import smartFlowIcon from './assets/images/SmartFlow.webp';
import beyondClassScreen from './assets/images/beyondScreen.webp';
// Splash Screen//src/

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Sections

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Abhishek",
  title: "Senior iOS Developer", // Cleaned up to match your new executive title layout
  subTitle: "Senior iOS Developer",
  // Updated description string with your new, refined bio copy
  resumeSectionDescription: "I design, architect, and ship high-performance, native iOS applications. Focused on clean code architecture, scalable performance, and user-centric design, I build robust mobile ecosystems that balance technical excellence with exceptional user experiences.",
  resumeLink: "https://drive.google.com/file/d/1X6h0bgx2R_jLYQfEQm_nFucBNjAXjAnd/view?usp=share_link",
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
    {
      id: "1",
      title: "iOS Development",
      description: "Building scalable, robust, and enterprise-ready native applications leveraging the full power of Swift & SwiftUI.",
      icon: "swift"
    },
    {
      id: "2",
      title: "App Architecture",
      description: "Designing modular software ecosystems using MVVM, VIPER, and clean separation of concerns for maintainable lifecycles.",
      icon: "architecture"
    },
    {
      id: "3",
      title: "UI/UX & Fluid Motion",
      description: "Crafting polished animations, highly responsive layouts, and accessible interfaces that elevate the overall user experience.",
      icon: "uiux"
    },
    {
      id: "4",
      title: "Technical Leadership",
      description: "Driving engineering excellence by mentoring developers, defining production health standards, and spearheading cross-functional roadmaps.",
      icon: "leadership"
    }
  ]
};

export const skillsSection = {
  title: "Proficiency",
  subTitle: "",
  skills: []
};
// Education Section

const educationInfo = {
  display: false, // Set to true and populate when you want to display university credentials
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Swift & SwiftUI Architecture",
      progressPercentage: "95%"
    },
    {
      Stack: "UIKit & Legacy Migration",
      progressPercentage: "90%"
    },
    {
      Stack: "Protocol-Oriented Design (POP)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false 
};


// Some big projects you have worked on
// FIXED: Removed inline export to avoid double-export syntax conflicts
const bigProjects = {
  title: "Featured Production Apps",
  subtitle: "A technical spotlight on my 3 most recent native deployments",
  display: true,
  projects: [
    {
      id: "hero-bloom",
      projectName: "Bloom — IoT Micro-Mobility Platform",
      icon: bloomIcon,
      architecture: "Modular MVVM-C with Protocol-Oriented Hardware Isolation Layers",
      summary: "Architectural core driving an IoT bike-rental engine scaled seamlessly across 7 distinct white-label client variants. Isolates custom firmware protocols from core business logic using POP.",
      challenge: "Managing asynchronous hardware state machines, real-time geolocation tracking, and high-stakes multi-tenant payment pipelines concurrently without locking the main thread. The core architectural challenge was decoupling the hardware-specific Bluetooth protocols from the business logic to ensure the platform could scale seamlessly into a white-label solution across distinct product variants.",
      techStack: [
      "Swift",
      "MVVM-C",
      "Core Bluetooth",
      "Stripe API",
      "Apple Pay",
      "Animations",
      "Custom Views",
      "Protocol-Oriented Programming",
      "MapKit Core",
      "Firebase Stream",
      "AVFoundation"
      ],
  wins: [
    "Architected an abstract, protocol-driven Bluetooth communication layer that gracefully handles hardware variations across multiple lock manufacturers.",
    "Engineered a thread-safe rental billing calculator processing real-time ride duration and server data syncing without blocking the main UI thread.",
    "Leveraged the Coordinator pattern (MVVM-C) to isolate navigation logic and smoothly manage deep-linked user flows across distinct application variants.",
    "Successfully delivered high-fidelity functional and UI customization modules across 7 live production derivatives."
  ]
    },
    {
      id: "hero-beyondClass",
      projectName: "Beyond Class — Interactive Music Coaching App",
      icon: beyondClassScreen,
      architecture: "Modular MVVM-C with Protocol-Oriented Media Pipelines",
  summary: "A dual-module student-coach collaboration platform managing high-throughput asynchronous media lifecycles, role-based navigation graphs, and low-latency interactive evaluation tools.",
  challenge: "Orchestrating a unified codebase supporting completely distinct, role-based workflows while managing high-throughput asynchronous media lifecycles, real-time messaging syncs, and fluid, low-latency video preview interactions without degraded UI frames.",
  techStack: [
    "Swift",
    "MVVM-C",
    "AVFoundation",
    "Protocol-Oriented Programming",
    "CoreMedia",
    "CoreData",
    "WebSockets",
    "Push Notifications"
  ],
  wins: [
    "Engineered a secure runtime state switch using Protocol-Oriented configuration trees to completely isolate Student assets from Coach evaluation tools under a single codebase.",
    "Optimized AVFoundation capture sessions with custom asset-export configurations, slashing media file sizes prior to transit without degrading critical musical audio fidelity.",
    "Utilized independent sub-coordinators (MVVM-C) to isolate the complex navigation graphs of the separate Student and Coach modules via a central authentication switch.",
    "Built a custom interactive review timeline with decoupled animation layers, maintaining a locked 120Hz frame rate during concurrent video playback and audio note recording."
  ]
    },
    {
      id: "hero-smartflow",
      projectName: "SmartFlow — Real-Time Ledger Monitor",
      icon: smartFlowIcon,
      architecture: "Secure Blockchain Trade Monitor with Real-Time Lifecycle Tracking",
      summary: "A role-isolated enterprise trade monitoring engine tracking distributed blockchain ledger states and rendering high-performance transaction lifecycle visualizations in real time.",
  challenge: "Orchestrating low-latency state synchronization between traditional RESTful backend APIs and distributed blockchain networks while maintaining highly secure, role-based data isolation layers and fluid, non-blocking lifecycle visualizations.",
  techStack: [
    "Swift",
    "VIPER",
    "Graphs",
    "Core Data",
    "Push Notifications",
    "Secure Keychain",
    "Protocol-Oriented Programming",
    "WebSockets",
    "CoreAnimation",
    "Push Notifications"
  ],
  wins: [
    "Engineered a protocol-driven data abstraction layer that successfully decoupled smart contract endpoints from view representation structures.",
    "Built a thread-safe transaction state processor capable of safely handling high-frequency ledger events concurrently without degrading main UI loop frames.",
    "Engineered an Interactor-backed data layer that completely isolated blockchain endpoints and Entity models from the presentation logic",
    "Built a thread-safe background processing engine to handle high-frequency ledger events concurrently, ensuring the Presenter updates the UI without lag."
  ]
    }
  ]
};

// Work experience section

export const workExperiences = {
  viewExperiences: true,
  title: "Work History",
  experience: [
    {
      id: "exp-1",
      role: "Staff iOS Developer",
      company: "Tensai Consulting",
      location: "Remote",
      date: "June 2024 – Present",
      subtitle: "Deep technical engagement initiated in 2024, continuing through the company’s official incorporation in 2025.",
      descBullets: [
        "Spearhead high-level technical direction and mobile product strategy for enterprise clients, defining scalable iOS development roadmaps.",
        "Architect and transition complex architectures into highly decoupled, modular Swift ecosystems to support simultaneous multi-team development tracks.",
        "Own system design definitions, security standards, and third-party infrastructure integrations across large-scale client applications."
      ],
      skills: ["SwiftUI", "Architecture", "Module Design", "Product Strategy"]
    },
    {
      id: "exp-2",
      role: "Senior iOS Developer (Contract)",
      company: "Freelance Practice",
      location: "Remote",
      date: "June 2021 – May 2024",
      subtitle: "",
      descBullets: [
        "Played an active, lead role in completely redesigning and restructuring legacy codebases into modular MVVM-C architectures, successfully elevating user satisfaction ratings by 30%.",
        "Designed, developed, and scaled highly reusable white-label iOS applications and framework layers utilized across multiple distinct client brands.",
        "Independently managed release engineering and uploaded 8 production apps to the App Store as part of complex white-label product pipelines.",
        "Trained, onboarded, and mentored incoming developers, introducing robust development workflows and code review practices to accelerate team productivity.",
        "Diagnosed and resolved critical performance bottlenecks, memory leaks, and retention cycles based on runtime feedback to maximize stability."
      ],
      skills: ["MVVM-C", "White-Label", "Release Engineering", "Performance Tuning"]
    },
    {
      id: "exp-3",
      role: "Senior iOS Developer",
      company: "Distributed Ledger Technologies (DLT) PTE. LTD.",
      location: "Trivandrum",
      date: "May 2019 – March 2021",
      subtitle: "",
      descBullets: [
        "Acted as the sole iOS developer, owning the complete development lifecycle from requirement analysis and technical design to development, testing, and App Store deployment.",
        "Successfully built, optimized, and published 3 production iOS applications on the App Store.",
        "Collaborated closely with product stakeholders, UI/UX designers, and backend engineering teams to translate business requirements into highly scalable mobile solutions.",
        "Implemented clean architecture patterns (VIPER) and highly reusable UI components to drastically minimize technical debt and improve long-term maintainability.",
        "Controlled all App Store compliance workflows, including provisioning profiles, certificates, TestFlight beta distribution, and live production releases."
      ],
      skills: ["VIPER", "Full-Lifecycle", "Blockchain Integration", "App Store Compliance"]
    },
    {
      id: "exp-4",
      role: "Lead iOS Engineer (Independent Practice)",
      company: "Freelance Practice",
      location: "Remote",
      date: "March 2014 – April 2019",
      subtitle: "",
      descBullets: [
        "Successfully designed, engineered, and shipped 7 mobile applications to the App Store, specializing in custom client-centric architectures and white-label platforms.",
        "Coordinated, managed, and aligned Android and web application development tracks to guarantee cross-platform feature and API parity.",
        "Led a distributed team of remote and local freelance developers, taking full accountability for task delegation, technical quality, and sprint timelines."
      ],
      skills: ["Team Leadership", "Cross-Platform Alignment", "Bespoke Architecture"]
    },
    {
      id: "exp-5",
      role: "Junior iOS Developer",
      company: "Srishti Innovative",
      location: "Technopark, Trivandrum",
      date: "March 2013 – February 2014",
      subtitle: "",
      descBullets: [
        "Contributed to the active development of multiple native iOS applications utilizing Objective-C and UIKit within a fast-paced Agile/Scrum team environment.",
        "Implemented product features, engineered clean layout configurations, and systematically resolved application bugs to improve runtime performance.",
        "Gained foundational production experience working with MVVM architecture, Git version control workflows, and peer code reviews."
      ],
      skills: ["Objective-C", "UIKit", "Agile/Scrum", "Git Workflows"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */
const openSource = {
  showGithubProfile: "false", 
  display: false 
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Milestones 🏆"),
  subtitle: "Highlights of core delivery metrics across the App Store ecosystem.",
  achievementsCards: [
    {
      title: "App Store Publishing Record",
      subtitle: "Successfully engineered, optimized, and pushed over 15 distinct production applications to the Apple App Store marketplace over a 12-year professional tenure.",
      image: null,
      imageAlt: "Apple App Store Logo",
      footerLink: []
    }
  ],
  display: false 
};

// Blogs Section
const blogSection = {
  display: false, // Hidden until you add custom Medium integration or personal tech articles
  blogs: []
};

// Talks Sections
const talkSection = {
  display: false, // Hidden by default
  talks: []
};

// Podcast Section
const podcastSection = {
  display: false, // Hidden by default
  podcast: []
};

// Resume Section
const resumeSection = {
  title: "Curriculum Vitae",
  subtitle: "Review my complete professional timeline and architecture focus.",
  display: false 
};

const contactInfo = {
  title: "Get In Touch", // Removed the retro phone emoji
  subtitle: "Let's discuss native architecture, remote contract consultation, or senior-grade technical leadership opportunities.", // Kept clean and elegant
  number: "+91 9496775713", 
  email_address: "kailasj281@gmail.com",
  display: false
};

// Twitter Section
const twitterDetails = {
  userName: "", 
  display: false 
};

const isHireable = true; // Set to true to flags active engagement availability to technical recruiters

// ==========================================================================
// Re-engineered, High-Grade Professional Contact Section 
// ==========================================================================
// ==========================================================================
// Re-engineered, Centered Professional Contact Section 
// ==========================================================================
export const CustomContactSection = () => {
  return (
    <div style={{
      width: "100%",
      maxWidth: "100%",
      padding: "80px 4% 100px 4%", // Generous modern breathing room
      boxSizing: "border-box",
      textAlign: "center", // Forces core text alignment to center axis
      display: "block",
      clear: "both"
    }}>
      {/* Structural Inner Container */}
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center" // Keeps flex container children centered completely
      }}>

        {/* Clean, Bold Display Title — Centered */}
        <h1 style={{
          fontSize: "40px",
          fontWeight: "700",
          margin: "0 0 24px 0",
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: "-0.5px",
          color: "#ffffff",
          textAlign: "center",
          width: "100%"
        }}>
          {contactInfo.title}
        </h1>

        {/* Unconstrained Description — Centered */}
        <p style={{
          fontSize: "19px",
          lineHeight: "1.7",
          width: "100%",
          maxWidth: "850px", // Snug width boundary for elegant reading layout
          margin: "0 0 48px 0",
          color: "#cbd5e1", // Off-white modern contrast slate
          fontFamily: "'Montserrat', sans-serif",
          textAlign: "center"
        }}>
          {contactInfo.subtitle}
        </p>

        {/* Professional Contact Actions Block — Centered */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center", // Centers the link groupings horizontally
          gap: "60px", // Generous premium spacing between options
          margin: "0",
          padding: "0",
          width: "100%"
        }}>
          
          {/* Email Channel Action Point */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", fontWeight: "600" }}>
              Direct Email
            </span>
            <a 
              href={`mailto:${contactInfo.email_address}`}
              style={{
                fontSize: "18px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#ffffff",
                borderBottom: "1px dashed #475569",
                paddingBottom: "2px"
              }}
            >
              {contactInfo.email_address}
            </a>
          </div>

          {/* Phone Channel Action Point */}
          {contactInfo.number && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#64748b", fontWeight: "600" }}>
                Voice / Signal
              </span>
              <a 
                href={`tel:${contactInfo.number}`}
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  textDecoration: "none",
                  color: "#ffffff",
                  borderBottom: "1px dashed #475569",
                  paddingBottom: "2px"
                }}
              >
                {contactInfo.number}
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable, 
  resumeSection
};

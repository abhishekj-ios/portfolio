/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

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
  title: "Hello, I'm Abhishek",
  subTitle: "Senior iOS Developer",
  resumeSectionDescription: "With 12+ years of expertise in Swift and SwiftUI, I design and deliver scalable, high-performance mobile applications. My focus is on clean architecture, maintainability, and user-centric design.",
  resumeLink: "https://drive.google.com/file/d/14qK3Vm5Ud6vJEbKiPpRGzSQ_EsdM7wvk/view?usp=sharing",
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/abhishek-j-ios", // Update with your exact URL slug if different
  gmail: "kailasj281@gmail.com", // Replace with your primary professional email
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@abhishek_j",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
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

export const CustomContactSection = () => {
  return (
    <div style={{
      width: "100%",
      maxWidth: "1140px",
      margin: "60px auto",
      padding: "0 20px",
      boxSizing: "border-box",
      textAlign: "left",
      display: "block",
      clear: "both"
    }}>
      <h1 style={{
        fontSize: "40px",
        fontWeight: "700",
        margin: "0 0 20px 0",
        fontFamily: "inherit"
      }}>
        {contactInfo.title}
      </h1>
      <p style={{
        fontSize: "18px",
        lineHeight: "1.6",
        maxWidth: "850px",
        margin: "0 0 30px 0",
        opacity: 0.85
      }}>
        {contactInfo.subtitle}
      </p>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "12px"
      }}>
        <a 
          href={`tel:${contactInfo.number}`}
          style={{
            fontSize: "16px",
            fontWeight: "500",
            textDecoration: "none",
            color: "#60a5fa"
          }}
        >
          {contactInfo.number}
        </a>
        <a 
          href={`mailto:${contactInfo.email_address}`}
          style={{
            fontSize: "16px",
            fontWeight: "500",
            textDecoration: "none",
            color: "#60a5fa"
          }}
        >
          {contactInfo.email_address}
        </a>
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

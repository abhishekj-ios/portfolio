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
      role: "Staff iOS Engineer",
      company: "Tensai Consulting",
      location: "Singapore",
      date: "June 2024 – Present",
      subtitle: "Deep technical engagement initiated in 2024, continuing through the company’s official incorporation in June 2025.",
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
      location: "Singapore",
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
  showGithubProfile: "true", 
  display: true 
};

// Some big projects you have worked on

const bigProjects = {
  title: "Production App Architecture",
  subtitle: "ENTERPRISE PROTOCOLS AND MODULAR IMPLEMENTATIONS",
  projects: [
    {
      image: null,
      projectName: "Aero — Flight Booking",
      projectDesc: "A professional flight search and booking application integrating the Amadeus self-service API. Implemented with a single-coordinator flow to cleanly decouple navigation architecture while managing complex asynchronous network abstraction layers efficiently.",
      footerLink: [
        {
          name: "Source Blueprint",
          url: "https://github.com/abhishekj-ios/portfolio"
        }
      ]
    },
    {
      image: null,
      projectName: "HappyHour — Mixology Discovery",
      projectDesc: "A high-fidelity cocktail exploration interface calling clean data mappings via the CocktailDB open API. Utilizes modern grid layouts built entirely around modular, protocol-oriented presentation logic.",
      footerLink: [
        {
          name: "Source Blueprint",
          url: "https://github.com/abhishekj-ios/portfolio"
        }
      ]
    }
  ],
  display: true 
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
  display: true 
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
  display: true 
};

const contactInfo = {
  title: emoji("Get In Touch ☎️"),
  subtitle: "Let's discuss native architecture, remote contract consultation, or senior-grade technical leadership opportunities.",
  number: "", // Leave empty or add your professional routing contact lines
  email_address: "abhishek.ios.dev@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "", 
  display: false 
};

const isHireable = true; // Set to true to flags active engagement availability to technical recruiters

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
  isHireable, // <-- added back into the mix
  resumeSection
};

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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhishek",
  title: "Hi, I'm Abhishek",
  subTitle: emoji(
    "Senior iOS Developer with over 12 years of experience building scalable mobile architectures. Specializing in Swift, SwiftUI, and creating high-performance apps with clean code methodologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Your verified Google Drive file link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abhishekj-ios",
  linkedin: "https://www.linkedin.com/in/abhishek-ios/", // Update with your exact URL slug if different
  gmail: "abhishek.ios.dev@gmail.com", // Replace with your primary professional email
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOPING HIGH-PERFORMANCE NATIVE iOS APPLICATIONS",
  skills: [
    "⚡ 12+ years of experience delivering robust, modular architectures (MVVM-C, VIPER, POP)",
    "⚡ Expert proficiency in Swift, SwiftUI, UIKit, Combine, and Async/Await concurrency",
    "⚡ Strong advocate for clean code, dependency injection, and avoiding singleton patterns for scalability",
    "⚡ Proven track record of managing cross-functional technical teams and leading App Store deployments"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "iOS SDK",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "App Store",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set to true and populate when you want to display university credentials
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "iOS Technical Lead",
      company: "Bloomsharing Redesign Project",
      companylogo: null,
      date: "Partner Engagement",
      desc: "Spearheaded the modular refactoring and clean code structural alignment for the application ecosystem.",
      descBullets: [
        "Led cross-functional engineering squads including Android and Web stakeholders to realign systemic delivery targets.",
        "Systematically dismantled overused legacy singleton patterns to integrate rigorous dependency injection, driving a 30% increase in user satisfaction ratings."
      ]
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
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
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

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

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "David Motsoeneng",
  title: "Hi all, I'm David",
  subTitle: emoji(
    "Hi, I'm David — backend engineer, founder of CodeCatalyst Solutions, and systems thinker focused on resilient architecture."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12gyNOD5HzUQYHZLgd2VRQzbZzy6agUOk/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TheDirectorZA",
  linkedin: "https://www.linkedin.com/in/butinyana-motsoeneng-809516175/",
  gmail: "davidbmotsoeneng.dev@gmail.com",
  facebook: "https://web.facebook.com/TheDirectorZA",
  medium: "https://medium.com/@davidmotsoeneng2001",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Backend Engineer & Systems Thinker focused on scalable architecture, clean code, and reliable distributed systems",

  skills: [
    emoji(
      "⚡ Design and build scalable backend systems using TypeScript, Node.js, and Java with clean architecture principles"
    ),
    emoji(
      "⚡ Develop microservices-based applications with Docker, Kubernetes (Rancher), and Dapr for resilient distributed communication"
    ),
    emoji(
      "⚡ Architect secure REST APIs with proper authentication, caching (Redis), and performance optimization strategies"
    ),
    emoji(
      "⚡ Implement serverless and cloud-native solutions using Azure Functions and modern DevOps workflows"
    ),
    emoji(
      "⚡ Integrate third-party services such as Supabase (GitHub Auth), payment systems, and external APIs with production-level reliability"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Dapr",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL / Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Supabase",
      fontAwesomeClassname: "fas fa-plug"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UNISA",
      logo: require("./assets/images/unisa_logo.jpg"),
      subHeader: "BSc in Computing",
      duration: "January 2026 - Present",
      desc: "Pursuing advanced computing studies with focus on systems design and scalable software engineering."
    },
    {
      schoolName: "We Think Code_",
      logo: require("./assets/images/wtc_logo.png"),
      subHeader: "NQF Level 5 in Systems Development",
      duration: "September 2023 - December 2024",
      desc: "Completed intensive peer-to-peer software engineering program emphasizing problem solving, algorithms, and production-ready systems."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Backend Engineering", progressPercentage: "85%"},
    {Stack: "Microservices & Distributed Systems", progressPercentage: "75%"},
    {Stack: "Frontend (React)", progressPercentage: "65%"}
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "MTN",
      companylogo: require("./assets/images/mtn-new-logo.png"),
      date: "January 2025 – Present",
      desc: "Contributing to enterprise-grade backend systems and distributed services within Agile engineering teams.",
      descBullets: [
        "Design and maintain containerized microservices using Java, TypeScript, and Python",
        "Led database schema redesign and system re-architecture to improve scalability",
        "Implemented observability using logging, metrics, and tracing tools",
        "Collaborate on high-reliability enterprise platforms"
      ]
    },
    {
      role: "Bootcamp Coordinator",
      company: "WeThinkCode_",
      companylogo: require("./assets/images/wtc_logo.png"),
      date: "October 2024 – December 2024",
      desc: "Mentored students in Python programming and coordinated bootcamp operations.",
      descBullets: [
        "Guided foundational software development and problem-solving training",
        "Tracked student performance and ensured curriculum milestone achievement"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Key Projects",
  subtitle:
    "Systems and applications focused on scalability, routing intelligence, and architectural experimentation.",
  projects: [
    {
      image: require("./assets/images/SiyaphiLogo.png"),
      rojectName: "Siyaphi Taxi Navigator",
      projectDesc:
        "Routing and commuter navigation system focused on improving local transport efficiency using backend-driven logic.",
      footerLink: [
        {
          name: "Visit the Project on GitHub",
          url: "https://github.com/TheDirectorZA/siyaphi_taxi_navigator.git"
        }
      ]
    },
    {
      image: require("./assets/images/CCLogo.png"),
      rojectName: "CodeCatalyst Solutions",
      projectDesc:
        "CodeCatalyst Solutions is a software development company focused on building scalable, backend-driven systems and cloud-native solutions that transform innovative ideas into reliable, high-performance digital products.",
      footerLink: [
        {
          name: "Visit the Project on GitHub",
          url: "https://github.com/TheDirectorZA/code-catalyst-solutions.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/OhlukileLogo.png"),
      projectName: "Ohlukile Banking",
      projectDesc:
        "Ohlukile Banking is a Java-based banking application utilizing a Maven Client-Server architecture with Javalin for a robust API server. The app enables secure account management, seamless money transfers, and real-time transaction tracking. With a focus on data validation and user experience, Ohlukile Banking ensures safe and intuitive financial services for users, with plans for future mobile integration and advanced analytics.",
      footerLink: [
        {
          name: "Visit the Project on GitHub",
          url: "https://github.com/TheDirectorZA/banking_app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Fellowship Award",
      subtitle:
        "Awarded by WeThinkCode_ in recognition of being a supportive and impactful peer contributor within a peer-to-peer learning environment.",
      image: require("./assets/images/wtc_logo.png"),
      imageAlt: "WeThinkCode Logo",
      footerLink: []
    },
    {
      title: "Year 1 Semester 2 Top 50",
      subtitle:
        "Thrilled to have earned a Top 50 Medallion in Object-Oriented Programming (OOP) with Java at WeThinkCode! This milestone reflects the hard work and dedication I've put into mastering OOP principles, and I'm excited to continue building on this foundation as I advance in my coding journey.",
      image: require("./assets/images/wtc_logo.png"),
      imageAlt: "WeThinkCode Logo",
      footerLink: []
    },

    {
      title: "Year 1 Semester 1 Top 50",
      subtitle:
        "I am excited to share that I have been recognized as the #2 student out of the top 50 for Semester 1 in the 2023 Cohort of WeThinkCode_. This honor reflects my dedication and hard work in mastering Programming Fundamentals in Python. I am grateful for this recognition and look forward to continuing my journey in the world of coding and technology.",
      image: require("./assets/images/wtc_logo.png"),
      imageAlt: "WeThinkCode Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@davidmotsoeneng2001/a-journey-through-enhancing-robot-world-54f4c8a48a58",
      title: "A Journey Through Enhancing Robot World",
      description:
        'David Motsoeneng shares insights into the iterative development process used to enhance the "Robot World" project. Through four iterations, the team progressively refined the software, focusing on key areas such as feature implementation, code base improvement, and architectural refinement. In Iteration 1, the foundation was laid by defining user stories and setting up build processes. Iteration 2 expanded functionalities, introduced Docker, and refined the codebase. Iteration 3 added persistent storage with database integration, while Iteration 4 focused on architectural refinement and implementing a Web API with ORM. The project showcases the power of systematic improvements in achieving a robust, adaptable software system.'
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+27 84 973 2676",
  email_address: "davidbmotsoeneng.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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

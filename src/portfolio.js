import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Madhesh",
  title: "Madhesh P D",
  subTitle: emoji(
    "Full Stack Developer with hands-on production experience building and deploying scalable web applications on AWS. Specialises in Node.js backend services, React.js SPAs, and serverless architectures using Lambda, API Gateway, Cognito, SQS, and DynamoDB."
  ),
  resumeLink:
    "/Madhesh_Resume_.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/madheshduraisamy",
  linkedin: "https://www.linkedin.com/in/madhesh-d-9b1b42251/",
  gmail: "madhesh.suguna76@gmail.com",
  instagram: "",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer • AWS Cloud & Backend Engineer",
  skills: [
    emoji("⚡ Building scalable backend services using Node.js and Express"),
    emoji("⚡ Architecting serverless solutions with AWS Lambda, API Gateway, Cognito, SQS, and DynamoDB"),
    emoji("⚡ Frontend development with React.js, TypeScript, and modern JavaScript (ES6+)"),
    emoji("⚡ Database management with PostgreSQL, DynamoDB, MongoDB, and MySQL"),
    emoji("⚡ Implementing CI/CD pipelines and automated deployments on AWS Amplify, S3, and CloudFront"),
    emoji("⚡ Full delivery lifecycle from database schema design to CDN deployment")
  ],

  softwareSkills: [
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    {
      skillName: "DynamoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS EC2",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Hindusthan Institute of Technology",
      logo: require("./assets/images/HIT.png"),
      subHeader: "B.E. – Computer Science and Engineering",
      duration: "2021 – 2025",
      desc: "CGPA: 7.21"
    },
    {
      schoolName: "Lakshmi Matric Higher Secondary School",
      logo: require("./assets/images/LMHSS.png"),
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "2020 – 2021",
      desc: "87%"
    },
    {
      schoolName: "Lakshmi Matric Higher Secondary School",
      logo: require("./assets/images/LMHSS.png"),
      subHeader: "Secondary School Leaving Certificate (SSLC)",
      duration: "2018 – 2019",
      desc: "83%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend (Node.js/Express/Serverless)", 
      progressPercentage: "95%" 
    },
    {
      Stack: "AWS Cloud Services (Lambda, API Gateway, EC2, S3, DynamoDB)",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend (React.js/TypeScript/JavaScript)",
      progressPercentage: "80%"
    },
    {
      Stack: "Database (PostgreSQL/MySQL/MongoDB/DynamoDB)",
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
      role: "Full Stack Developer",
      company: "Pitfall Pvt Ltd",
      companylogo: require("./assets/images/Pitfall.png"),
      date: "March 2025 – Present",
      descBullets: [
        "Engineered Node.js backend services for 4 production applications (Business Management System, WhatsApp messenger, Gold pledge and repledge, Restaurant Table Booking) on AWS EC2 with auto-scaling.",
        "Architected serverless REST APIs with AWS Lambda + API Gateway, eliminating fixed server costs and enabling on-demand scaling.",
        "Deployed React.js SPAs across all products via AWS Amplify CI/CD, S3 static hosting, CloudFront CDN, and Route 53.",
        "Designed multi-database architectures combining PostgreSQL (billing, loans, orders) with Amazon DynamoDB for high-throughput operations.",
        "Implemented Amazon Cognito for user authentication, JWT-based authorization, and RBAC across all platforms.",
        "Integrated Amazon SQS message queuing to decouple bulk WhatsApp notification delivery for asynchronous processing."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Code Bind",
      companylogo: require("./assets/images/code.jpeg"),
      date: "June 2023 – July 2023",
      descBullets: [
        "Built 3 full-stack applications (Car Rental System, Task Management, Tour Booking) end-to-end using React.js, Node.js, and MySQL/PostgreSQL.",
        "Designed JWT-based authentication and admin dashboard features for vehicle availability, booking management, task assignment, and itinerary browsing.",
        "Participated in code reviews and maintained Git version control practices across all repositories."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    
    {
      image: require("./assets/images/task.jpg"),
      projectName: "Task Management System",
      projectDesc:
        "Full-stack application with React.js frontend and Node.js backend enabling real-time task tracking across distributed teams. Built a dual-role permission system with manager and team member accounts. Developed CRUD-compliant REST APIs with Express.js covering user profiles, tasks, assignments, priorities, deadlines, and status workflows. Implemented JWT authentication with session management enforcing data isolation between roles.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://task.madhesh.co.in/"
        }
      ]
    },
    {
      image: require("./assets/images/agribot.jpg"),
      projectName: "Agri-Bot — AI Agricultural Assistant",
      projectDesc:
        "Built an AI-powered assistant integrating with NPK sensor hardware to capture real-time soil pH, nitrogen, phosphorus, and potassium readings. Developed a crop recommendation engine that analyses sensor data to suggest optimal crops, reducing crop failure risk for small-scale farmers. Delivered a unified Python full-stack platform connecting the data pipeline, recommendation logic, and government agricultural scheme discovery.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://agribot.madhesh.co.in/"
        }
      ]
    },
    {
      image: require("./assets/images/gesture.webp"),
      projectName: "Hand Gesture Recognition",
      projectDesc:
        "Built a real-time gesture recognition system using TensorFlow, OpenCV, and Python, achieving reliable multi-gesture classification from live webcam input via a trained deep learning model. Applied data augmentation and hyperparameter tuning, visualising performance with Matplotlib accuracy curves, loss graphs, and confusion matrices.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://rental.madhesh.co.in/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  subtitle: "Feel free to view my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8668002081",
  email_address: "madhesh.suguna76@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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

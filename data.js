/**
 * Aditi's Personal Portfolio Data
 * Central configuration file for all portfolio sections.
 * Update this file to modify content without altering UI code.
 */
export const portfolioData = {
  personal: {
    name: "ADITI WALWEKAR",
    fullName: "Aditi Walwekar",
    role: "CSE (AI & DS) Student · Developer · Builder",
    tagline: "Learning. Building. Experimenting.",
    location: "Pune, India",
    university: "DES Pune University",
    email: "walwekaraditi11@gmail.com",
    shortBio: "First-year Computer Science engineering student specializing in Artificial Intelligence & Data Science, exploring intelligent systems and practical technology.",
    interests: [
      "Web Development",
      "Artificial Intelligence",
      "Data Science",
      "Programming Logic",
      "Building Practical Projects"
    ]
  },

  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/aditi-walwekar", handle: "aditi-walwekar" },
    { platform: "GitHub", url: "https://github.com/aditiwalwekarcode", handle: "@aditiwalwekarcode" },
    { platform: "LeetCode", url: "https://leetcode.com/u/AditiWalwekar/", handle: "AditiWalwekar" },
    { platform: "Instagram", url: "https://instagram.com/aditiwalwekar_11", handle: "@aditiwalwekar_11" },
    { platform: "Email", url: "mailto:walwekaraditi11@gmail.com", handle: "walwekaraditi11@gmail.com" }
  ],

  currentlyExploring: [
    { title: "Front-end Development", category: "Web Interfaces", focus: "Semantic HTML, modern CSS architecture, responsive design." },
    { title: "Artificial Intelligence", category: "Intelligent Systems", focus: "Foundational AI principles, machine learning workflows, and generative models." },
    { title: "Data Science", category: "Analysis & Insights", focus: "Data handling concepts, statistical thinking, and structured representation." },
    { title: "Programming", category: "Core Algorithms", focus: "Algorithmic thinking, memory models in C, and dynamic execution in JavaScript." },
    { title: "Personal Projects", category: "Applied Engineering", focus: "Identifying daily frictions faced by students and building clean digital solutions." }
  ],

  skills: [
    {
      category: "Programming",
      skills: ["C", "JavaScript", "Python"]
    },
    {
      category: "Web & Frontend",
      skills: ["HTML5", "CSS3", "React", "Tailwind CSS"]
    },
    {
      category: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Vercel"]
    }
  ],

  projects: [
    {
      id: "mausam",
      number: "01",
      title: "MAUSAM — Real-Time Weather Dashboard for Indian Cities",
      tagline: "Real-time meteorological weather dashboard built for Indian cities",
      category: "Web Application · Jul 2026",
      description: "An intuitive weather web application focused on presenting atmospheric conditions with visual clarity, real-time meteorological metrics, and responsive layout across Indian regions.",
      technologies: ["HTML5", "Cascading Style Sheets (CSS)", "JavaScript", "Weather API Integration", "Responsive Design"],
      liveUrl: "https://mausam-weather-dashboard.vercel.app/"
    },
    {
      id: "finanza",
      number: "02",
      title: "FINANZA - Expense Tracker",
      tagline: "Lightweight, browser-based expense tracker for budget clarity",
      category: "FinTech Utility · Jul 2026",
      description: "A lightweight, browser-based expense tracker designed to give students and individuals effortless oversight over daily spending and category allocations.",
      technologies: ["HTML5", "Cascading Style Sheets (CSS)", "JavaScript", "Local State Persistence"],
      liveUrl: "https://expense-tracker-aditi-walwekar.vercel.app/"
    },
    {
      id: "todo-app",
      number: "03",
      title: "TaskFlow — Premium Task Management App",
      tagline: "Modern task management web app designed for productivity and friction-free tracking",
      category: "Productivity Utility",
      description: "A modern task management web app built with clean state persistence, priority tagging, responsive layout, and zero distraction.",
      technologies: ["Front-End Development", "Responsive Web Design", "JavaScript", "HTML5", "CSS3", "DOM Architecture"],
      liveUrl: "https://task-flow-premium-task-management-eight.vercel.app/"
    },
    {
      id: "cgpa-calculator",
      number: "04",
      title: "CGPA Calculator",
      tagline: "Academic semester GPA and cumulative CGPA estimation tool",
      category: "Academic Utility",
      description: "A student utility application for semester GPA and cumulative CGPA calculation, eliminating manual grade point estimation errors.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Computational Logic"]
    },
    {
      id: "portfolio",
      number: "05",
      title: "Personal Portfolio",
      tagline: "Long-term personal digital archive and technical workshop",
      category: "Creative Engineering",
      description: "A bespoke personal website built completely from scratch as a living digital space to document learnings, projects, and milestones.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Semantic HTML"],
      liveUrl: "https://aditiwalwekarportfolio.vercel.app/"
    },
    {
      id: "campusmove",
      number: "06",
      title: "CampusMove (Thinking Phase)",
      tagline: "Early concept & notes on university transit challenges in India",
      category: "Thinking Phase · Exploratory Concept",
      description: "An exploratory idea and initial thoughts around transportation frictions university students encounter in India. Currently in an early thinking and observation phase.",
      technologies: ["Systems Modeling", "Concept Architecture", "Research Notes"]
    }
  ],

  achievements: [
    {
      title: "AWS IGNITE 2026",
      subtitle: "Presented on AWS Bedrock Foundation Models",
      year: "2026",
      role: "First-Year B.Tech CSE (AI & DS) Team Member",
      takeaways: [
        "Generative AI & LLM architectures",
        "Cloud technologies & AWS ecosystem",
        "Problem-solving & technical presentation",
        "Teamwork under event timelines"
      ]
    }
  ],

  certifications: [
    {
      id: "aws-ignite-2026",
      title: "AWS Ignite 2026",
      issuer: "AWS Student Builder Group - DESPU",
      issueDate: "Sep 2026",
      skills: ["Public Speaking", "Cloud Infrastructure", "AWS Bedrock"],
      certificateName: "AWS IGNITE"
    },
    {
      id: "google-gemini-fund-my-crazy",
      title: "Google Gemini Fund My Crazy",
      issuer: "Google Student Ambassador",
      issueDate: "Aug 2026",
      skills: ["Prompt Engineering", "Google Gemini", "Generative AI"],
      certificateName: "Google Gemini Fund My Crazy"
    },
    {
      id: "ai-quizoff-2026",
      title: "AI QUIZOFF 2026",
      issuer: "Unstop",
      issueDate: "Jul 2026",
      skills: ["Artificial Intelligence (AI)", "Machine Learning Fundamentals"],
      certificateName: "QuizOff 2026"
    },
    {
      id: "iit-madras-ds-ai",
      title: "Introduction to Data Science and AI",
      issuer: "Centre for Outreach and Digital Education (CODE), IIT Madras",
      issueDate: "Oct 2025",
      skills: ["Data Science", "Artificial Intelligence (AI)"],
      certificateName: "Certificate of Participation"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology, Computer Science Engineering",
      specialization: "Artificial Intelligence & Data Science",
      institution: "DES Pune University",
      period: "Aug 2026 – Present",
      status: "Currently Pursuing (First Year)"
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "The Lexicon International School,Wagholi",
      period: "2026",
      grade: "82.4%"
    },
    {
      degree: "Class X (Secondary School)",
      institution: "The Lexicon International School,Wagholi",
      period: "2024",
      grade: "90%"
    },
    {
      degree: "Foundational & Middle School Education",
      institution: "Shanti Asiatic School Ahmedabad",
      period: "Dec 2014 – Aug 2023"
    }
  ],

  resume: {
    path: "assets/documents/Aditi_Resume.pdf",
    fileName: "Aditi_Resume.pdf"
  }
};

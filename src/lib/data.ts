export const personalInfo = {
  name: "Abhishek Mittal",
  title: "Senior Software Engineer",
  taglines: [
    "Senior Software Engineer",
    "Frontend & React Native Developer",
    "Fintech & Crypto App Builder",
    "Mobile & Full Stack Engineer",
  ],
  email: "abhishekbxn@gmail.com",
  phone: "+91-7610032837",
  location: "Jaipur, Rajasthan",
  github: "https://github.com/abhishekmittall",
  linkedin: "https://www.linkedin.com/in/abhishekmittall/",
  x: "https://x.com/_erabhishek",
  facebook: "https://www.facebook.com/abhi.mittall",
  instagram: "https://www.instagram.com/abhi.mittall/",
  resume: "https://drive.google.com/file/d/1yCuQDEhAsqD9bJhNnNkYICON9zNq3dCX/view?usp=sharing",
  resumeDownload: "https://drive.google.com/uc?export=download&id=1yCuQDEhAsqD9bJhNnNkYICON9zNq3dCX",
  about: `Senior Software Engineer with 3+ years of experience building scalable fintech, AI, and
    consumer applications. Specialized in React, React Native, and real-time systems (WebSockets),
    with strong expertise in API integrations and performance optimization. Proven ability to
    deliver high-quality, user-centric products across mobile and web platforms.`,
  profileLight: "/profile-light.png",
  profileDark: "/profile-dark.png",
};

export const experiences = [
  {
    id: 1,
    role: "Software Development Engineer II",
    company: "Startup Labs Infotech Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    duration: "Nov 2024 – Present",
    type: "Full-time",
    description: [
      "Led end-to-end development of MutualFundWala (fintech platform), owning 100% web admin, 90% mobile app, and 70% backend APIs, improving development efficiency by 40% and reducing release cycles.",
      "Implemented real-time features using WebSockets and reduced redundant API calls by 30%, improving app responsiveness.",
      "Integrated 5+ third-party SDKs including Meta Pixel, CleverTap, AppsFlyer, Microsoft Clarity, and Firebase Cloud Messaging (FCM), enhancing user analytics, attribution tracking, and notification delivery.",
      "Built core investment modules (portfolio tracking, goal-based investing, LAMF), enhancing user experience and increasing feature adoption.",
      "Developed reusable components and optimized UI, reducing code duplication by 35% and improving maintainability.",
      "Built Instagram Auto DM with end-to-end ownership and contributed 85% to Formatr: AI Formatting Tool, accelerating product delivery timelines by 30%.",
    ],
    tech: ["React Native", "Next.js", "Node.js", "WebSockets", "CodePush", "Firebase", "CleverTap", "AppsFlyer", "NestJS"],
  },
  {
    id: 2,
    role: "Software Development Engineer I",
    company: "Flitpay Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    duration: "Jan 2023 – Nov 2024",
    type: "Full-time",
    description: [
      "Developed Flitpay (crypto trading app) with real-time trading and analytics features, improving user engagement and session duration.",
      "Designed and implemented 60–70% of UI/UX, reducing UI inconsistencies and improving user experience across devices.",
      "Contributed to Connect by FinkUP, building chat and analytics modules to enhance real-time user interaction.",
      "Integrated REST and GraphQL APIs, improving data fetch efficiency and reducing API response handling time.",
    ],
    tech: ["React Native", "GraphQL", "REST API", "Firebase", "TypeScript", "Redux"],
  },
  {
    id: 3,
    role: "Front End Developer Intern",
    company: "Wait 4 Tech Services Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    duration: "June 2022 – Dec 2022",
    type: "Internship",
    description: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript, improving usability across multiple devices.",
      "Built reusable UI components, reducing development time for new features.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
];

export const projects = [
  {
    id: 1,
    title: "MutualFundWala",
    description:
      "Mobile app simplifying mutual fund investments with goal-based investing, portfolio tracking, automated planning, real-time market insights, and LAMF support. 5K+ downloads on Google Play.",
    tech: ["React Native", "Next.js", "Node.js", "NestJS", "PostgreSQL", "REST API", "Firebase", "TypeScript"],
    androidLink: "https://play.google.com/store/apps/details?id=com.mutualfundwala",
    iosLink: "https://apps.apple.com/in/app/mutualfundwala/id6752248976",
    webLink: null as string | null,
    sourceLink: null as string | null,
    platforms: ["Android", "iOS"],
    featured: true,
  },
  {
    id: 2,
    title: "MintLink",
    description:
      "Creator-driven commerce platform enabling content creators to monetize their influence by tagging products in social posts and earning commissions from sales. Includes an Instagram Auto DM automation feature streamlining creator-business communication. 1K+ downloads on Google Play.",
    tech: ["React Native", "REST API", "Next.js", "TypeScript"],
    androidLink: "https://play.google.com/store/apps/details?id=com.mintlink.app",
    iosLink: "https://apps.apple.com/in/app/mintlink/id6743850599",
    webLink: null as string | null,
    sourceLink: null as string | null,
    platforms: ["Android", "iOS"],
    featured: true,
  },
  {
    id: 3,
    title: "Flitpay: Crypto Trading App",
    description:
      "Mobile app for Flitpay cryptocurrency exchange offering easy and secure trading of Bitcoin and 350+ cryptocurrencies with instant buy/sell and referral rewards. 1M+ downloads on Google Play.",
    tech: ["React Native", "Redux", "REST API", "Firebase", "TypeScript"],
    androidLink: "https://play.google.com/store/apps/details?id=com.core.app.flitpay&hl=en_IN",
    iosLink: "https://apps.apple.com/in/app/flitpay-crypto-exchange/id1571975471",
    webLink: null as string | null,
    sourceLink: null as string | null,
    platforms: ["Android", "iOS"],
    featured: true,
  },
  {
    id: 4,
    title: "Formatr",
    description:
      "AI-powered platform automating academic formatting and citation management for students and researchers with journal-ready formatting and document organization. 10K+ downloads on Google Play.",
    tech: ["React Native", "React.js", "Node.js", "AI/LLM"],
    androidLink: "https://play.google.com/store/apps/details?id=app.formatr.ai",
    iosLink: "https://apps.apple.com/us/app/formatr-ai-formatting-tool/id6744606912",
    webLink: "https://app.formatr.ai/",
    sourceLink: null as string | null,
    platforms: ["Android", "iOS", "Web"],
    featured: false,
  },
  {
    id: 5,
    title: "Connect by FinkUP",
    description:
      "Event platform with AI-powered matchmaking, ticketing, live analytics, and real-time chat for seamless attendee networking and sponsor interaction. 10+ downloads on Google Play.",
    tech: ["React Native", "Socket.io", "Node.js", "Firebase"],
    androidLink: "https://play.google.com/store/apps/details?id=com.finkup.connect",
    iosLink: null as string | null,
    webLink: null as string | null,
    sourceLink: null as string | null,
    platforms: ["Android"],
    featured: false,
  },
  {
    id: 6,
    title: "Scratch Mobile App",
    description:
      "Mobile app inspired by Scratch enabling drag-and-drop creation of interactive projects, animations, and games. Customize sprites and create without writing code.",
    tech: ["React Native", "TypeScript", "Animations"],
    androidLink: null as string | null,
    iosLink: null as string | null,
    webLink: null as string | null,
    sourceLink: "https://github.com/abhishekmittall/Scratch-App",
    platforms: ["Android", "iOS"],
    featured: false,
  },
  {
    id: 7,
    title: "Crypto Buzz",
    description:
      "Web app providing real-time cryptocurrency updates, news, and price tracking. Helps users stay informed on market trends with live data and a clean interface.",
    tech: ["React.js", "REST API", "Tailwind CSS", "TypeScript"],
    androidLink: null as string | null,
    iosLink: null as string | null,
    webLink: null as string | null,
    sourceLink: "https://github.com/abhishekmittall/Crypto-Buzz-App",
    platforms: ["Web"],
    featured: false,
  },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "React Native", level: 95 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 92 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Redux / TanStack Query", level: 85 },
    { name: "GraphQL", level: 82 },
    { name: "Socket.IO", level: 78 },
    { name: "RxJS", level: 70 },
    { name: "SCSS", level: 75 },
    { name: "Bootstrap", level: 65 },
    { name: "Angular", level: 65 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "NestJS", level: 72 },
    { name: "REST API", level: 90 },
    { name: "GraphQL / Apollo", level: 82 },
    { name: "WebSockets", level: 82 },
    { name: "Socket.IO", level: 78 }
  ],
  database: [
    { name: "PostgreSQL", level: 78 },
    { name: "SQL", level: 80 },
    { name: "Firebase", level: 85 },
    { name: "pgAdmin", level: 72 },
  ],
  tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "Figma", level: 80 },
    { name: "Firebase / FCM", level: 88 },
    { name: "CodePush (OTA)", level: 85 },
    { name: "AWS", level: 45 },
    { name: "Sentry", level: 78 },
    { name: "Jest / RTL", level: 75 },
    { name: "Jira / Bitbucket", level: 82 },
    { name: "Claude Code / Cursor AI", level: 85 },
  ],
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Jaipur Engineering College and Research Center",
    location: "Jaipur, Rajasthan",
    duration: "Aug 2019 – June 2023",
    grade: "7.55 CGPA",
    description:
      "Focused on data structures, algorithms, operating systems, and full-stack development. Qualified for the 2nd Round of Smart India Hackathon 2022.",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Smart India Hackathon 2022 — 2nd Round Qualifier",
    issuer: "Government of India",
    year: "2022",
  },
];

export const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Apps Shipped", value: "10+" },
  { label: "APIs Integrated", value: "50+" },
  { label: "Platforms", value: "Android, iOS & Web" },
];

export const hobbies = ["Photography", "Badminton", "Chess"];

export const personalInfo = {
  name: "Abhishek Mittal",
  title: "Software Development Engineer II",
  taglines: [
    "Software Development Engineer",
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
  resume: "https://drive.google.com/file/d/1HkvJ5sWSp-WohWotXBYR7BDhi2TRBBCz/view?usp=sharing",
  resumeDownload: "https://drive.google.com/uc?export=download&id=1HkvJ5sWSp-WohWotXBYR7BDhi2TRBBCz",
  about: `Results-driven Software Engineer with 3+ years of experience in building scalable
    fintech, crypto, and AI-powered applications. Skilled in React, React Native, and API
    integrations, focused on delivering high-performance, user-centric digital solutions.`,
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
      "Developing and maintaining a fintech platform across mobile application and web admin panel, handling backend API development, third-party integrations, and complete app–web API integration.",
      "Implemented mutual fund investment features including portfolio tracking, goal-based investing, and integrated the LAMF SDK to enable seamless liquidity access against user holdings.",
      "Integrated third-party services including CleverTap (user engagement automation), AppsFlyer (attribution tracking), and Firebase Cloud Messaging for notifications.",
      "Managed OTA updates (CodePush) to streamline deployments and reduce app store release dependency.",
      "Developed a social media creator commerce application, designing UI and handling API integrations for product linking, affiliate commissions, and content monetization.",
      "Built cross-platform mobile applications for AI-driven academic tools and creator commerce solutions.",
      "Created regex-based modules to support LLM training and document parsing workflows.",
      "Contributed to React.js and Next.js web development with backend integration and UI enhancements.",
    ],
    tech: ["React Native", "Next.js", "Node.js", "CodePush", "Firebase", "CleverTap", "AppsFlyer", "GraphQL"],
  },
  {
    id: 2,
    role: "Software Development Engineer I",
    company: "Flitpay Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    duration: "Jan 2023 – Nov 2024",
    type: "Full-time",
    description: [
      "Built and maintained end-to-end mobile applications with features such as AI matchmaking, real-time chat, analytics, and cryptocurrency trading.",
      "Designed approximately 90% of UI/UX for Android and iOS platforms, focusing on responsive and user-centric design.",
      "Integrated about 70% of APIs using both RESTful and GraphQL technologies, and developed around 60% of the core application logic.",
      "Implemented social authentication, Firebase Cloud Messaging, and push notifications to enable real-time communication and engagement.",
      "Managed third-party service integrations while optimizing app performance, ensuring strong security, and enhancing overall user experience.",
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
      "Developed user interfaces using HTML, CSS, and JavaScript to enhance usability and functionality.",
      "Implemented responsive designs ensuring seamless experience across devices.",
      "Improved UI elements and introduced new features to boost user engagement and experience.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
];

export const projects = [
  {
    id: 1,
    title: "MutualFundWala",
    description:
      "Mobile app simplifying mutual fund investments with goal-based investing, portfolio tracking, automated planning, real-time market insights, and LAMF support.",
    tech: ["React Native", "TypeScript", "REST API", "Firebase"],
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
      "Creator-driven commerce platform enabling content creators to monetize their influence by tagging products in social posts and earning commissions from sales.",
    tech: ["React Native", "Node.js", "GraphQL", "TypeScript"],
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
      "Mobile app for Flitpay cryptocurrency exchange offering easy and secure trading of Bitcoin and 350+ cryptocurrencies with instant buy/sell and referral rewards.",
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
      "AI-powered platform automating academic formatting and citation management for students and researchers with journal-ready formatting and document organization.",
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
      "Event platform with AI-powered matchmaking, ticketing, live analytics, and real-time chat for seamless attendee networking and sponsor interaction.",
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
    { name: "Angular", level: 65 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "NestJS", level: 72 },
    { name: "REST API", level: 90 },
    { name: "GraphQL / Apollo", level: 82 },
    { name: "Python (basic)", level: 55 },
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

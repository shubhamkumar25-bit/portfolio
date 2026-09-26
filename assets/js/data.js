export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Skills", href: "/skills/" },
  { label: "Experience", href: "/experience/" },
  { label: "Projects", href: "/projects/" },
  { label: "Achievements", href: "/achievements/" },
  { label: "Contact", href: "/contact/" }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/shubhamkumar25-bit", icon: "<>" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham-kumar-b46b4b29a/",
    icon: "in"
  },
  { label: "Portfolio", href: "https://shubham-drab.vercel.app/", icon: "[]" }
];

export const skillGroups = [
  {
    title: "Web Development",
    skills: [
      {
        slug: "html",
        name: "HTML5",
        summary: "Semantic and responsive web structure using modern HTML5 practices.",
        useFor: "Building accessible page structures and meaningful content hierarchy.",
        keyConcepts: ["Semantic tags", "Forms", "Accessibility", "Document structure"],
        relatedProjects: ["Portfolio Website", "Flipkart Clone"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "css",
        name: "CSS3",
        summary: "Responsive layouts, Flexbox, Grid, animations, transitions and modern styling.",
        useFor: "Creating premium interfaces, card systems and responsive layouts.",
        keyConcepts: ["Flexbox", "Grid", "Transitions", "Responsive design"],
        relatedProjects: ["Portfolio Website", "Flipkart Clone"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "javascript",
        name: "JavaScript",
        summary: "Core JavaScript, DOM manipulation, functions, arrays, objects, events and modern JavaScript concepts.",
        useFor: "Adding application logic, interactions and routing behavior.",
        keyConcepts: ["ES6+", "DOM", "Events", "Arrays and objects"],
        relatedProjects: ["BharatSaathi AI", "Portfolio Website"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "react",
        name: "React.js",
        summary: "Component-based frontend development, reusable UI components, routing, state management and modern React workflows.",
        useFor: "Building maintainable UI systems and interactive frontend products.",
        keyConcepts: ["Components", "Props", "State", "Routing"],
        relatedProjects: ["BharatSaathi AI", "Flipkart Clone"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "tailwind",
        name: "Tailwind CSS",
        summary: "Utility-first responsive UI development with reusable and scalable styling.",
        useFor: "Fast UI implementation with consistent design tokens.",
        keyConcepts: ["Utilities", "Responsive variants", "Custom themes", "Design consistency"],
        relatedProjects: ["BharatSaathi AI"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "nodejs",
        name: "Node.js",
        summary: "Backend development and server-side JavaScript workflows.",
        useFor: "Handling APIs, backend logic and service orchestration.",
        keyConcepts: ["Runtime", "Modules", "REST API", "Async flows"],
        relatedProjects: ["BharatSaathi AI"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "firebase",
        name: "Firebase",
        summary: "Authentication, application services and backend integration.",
        useFor: "Rapid backend integration for auth and cloud services.",
        keyConcepts: ["Authentication", "Hosting", "Cloud services", "Security rules"],
        relatedProjects: ["BharatSaathi AI"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "firestore",
        name: "Firestore",
        summary: "Cloud NoSQL database for storing and managing application data.",
        useFor: "Real-time and structured cloud data management.",
        keyConcepts: ["Collections", "Documents", "Queries", "Data modeling"],
        relatedProjects: ["BharatSaathi AI"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "typescript",
        name: "TypeScript",
        summary: "Typed JavaScript development for scalable and maintainable applications.",
        useFor: "Reducing runtime bugs and improving maintainability in larger codebases.",
        keyConcepts: ["Types", "Interfaces", "Type inference", "Strict mode"],
        relatedProjects: ["BharatSaathi AI"],
        relatedExperience: ["NavGurukul"]
      }
    ]
  },
  {
    title: "SEO & Digital Marketing",
    skills: [
      {
        slug: "seo",
        name: "SEO",
        summary: "Search engine optimization focused on improving website visibility and organic search performance.",
        useFor: "Driving long-term organic visibility and traffic quality.",
        keyConcepts: ["Visibility", "Ranking factors", "Content optimization", "Organic growth"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["Honeybee", "EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "on-page-seo",
        name: "On-Page SEO",
        summary: "Keyword optimization, headings, metadata, internal linking and content optimization.",
        useFor: "Improving page relevance and search intent alignment.",
        keyConcepts: ["Metadata", "Headings", "Internal links", "Content quality"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["Honeybee", "EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "off-page-seo",
        name: "Off-Page SEO",
        summary: "Backlink building and external website visibility activities.",
        useFor: "Improving authority signals through relevant external references.",
        keyConcepts: ["Backlinks", "Authority", "Referrals", "Brand mentions"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "technical-seo",
        name: "Technical SEO",
        summary: "Website structure, crawlability, performance and technical optimization.",
        useFor: "Ensuring websites are indexable, fast and technically healthy.",
        keyConcepts: ["Crawlability", "Performance", "Sitemaps", "Structured basics"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["Honeybee", "EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "keyword-research",
        name: "Keyword Research",
        summary: "Researching relevant search terms and identifying keyword opportunities.",
        useFor: "Planning content and optimization priorities around search behavior.",
        keyConcepts: ["Intent", "Search volume", "Topic clusters", "Opportunity gaps"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "blog-writing",
        name: "Blog Writing",
        summary: "Creating informative and SEO-focused blog content.",
        useFor: "Publishing useful content aligned with audience needs.",
        keyConcepts: ["Topic planning", "Structure", "Readability", "SEO writing"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "content-writing",
        name: "Content Writing",
        summary: "Writing clear and engaging content for websites and digital platforms.",
        useFor: "Converting ideas into user-friendly and goal-oriented copy.",
        keyConcepts: ["Tone", "Clarity", "Audience-fit", "Conversion support"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["Honeybee", "EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "content-editing",
        name: "Content Editing",
        summary: "Improving existing content for clarity, readability, structure and SEO.",
        useFor: "Refining draft content into polished and optimized pieces.",
        keyConcepts: ["Editing", "Proofing", "Optimization", "Content structure"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "backlink-building",
        name: "Backlink Building",
        summary: "Supporting off-page SEO through relevant backlink-building activities.",
        useFor: "Strengthening external trust signals and referral pathways.",
        keyConcepts: ["Outreach", "Relevance", "Domain fit", "Off-page signals"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "social-media-management",
        name: "Social Media Management",
        summary: "Managing social media pages, content and online presence.",
        useFor: "Maintaining consistent communication and audience engagement.",
        keyConcepts: ["Content planning", "Page management", "Engagement", "Brand consistency"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["Honeybee", "EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "digital-marketing",
        name: "Digital Marketing",
        summary: "Supporting digital marketing activities across content, SEO and social media.",
        useFor: "Coordinating online growth efforts across multiple channels.",
        keyConcepts: ["Campaign support", "SEO", "Social", "Content operations"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["Honeybee", "EverEconic Tech Pvt. Ltd. (Eventoz)"]
      }
    ]
  },
  {
    title: "Tools",
    skills: [
      { slug: "microsoft-excel", name: "Microsoft Excel" },
      { slug: "google-sheets", name: "Google Sheets" },
      { slug: "canva", name: "Canva" },
      { slug: "microsoft-word", name: "Microsoft Word" },
      { slug: "microsoft-powerpoint", name: "Microsoft PowerPoint" },
      { slug: "google-analytics", name: "Google Analytics" },
      { slug: "wordpress", name: "WordPress" },
      { slug: "vs-code", name: "VS Code" },
      { slug: "github", name: "GitHub" },
      { slug: "vercel", name: "Vercel" }
    ]
  },
  {
    title: "AI & Productivity",
    skills: [
      {
        slug: "ai-assisted-coding",
        name: "AI-assisted Coding",
        summary: "Using AI tools to speed up coding workflows and improve solution quality.",
        useFor: "Faster debugging, architecture ideation and cleaner implementation flow.",
        keyConcepts: ["Prompting", "Code review", "Refactoring support", "Workflow acceleration"],
        relatedProjects: ["BharatSaathi AI", "Portfolio Website"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "ai-research",
        name: "AI Research",
        summary: "Using AI systems for domain research, comparisons and rapid learning.",
        useFor: "Learning new concepts and making implementation decisions faster.",
        keyConcepts: ["Context gathering", "Comparative analysis", "Rapid synthesis", "Knowledge expansion"],
        relatedProjects: ["BharatSaathi AI"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "ai-content-creation",
        name: "AI Content Creation",
        summary: "Using AI tools for structured content drafts and idea generation.",
        useFor: "Generating outlines and first drafts for digital content tasks.",
        keyConcepts: ["Drafting", "Ideation", "Content flow", "Iteration"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["Honeybee"]
      },
      {
        slug: "ai-writing",
        name: "AI Writing",
        summary: "Using AI support to improve writing speed and structure.",
        useFor: "Writing faster while maintaining clarity and relevance.",
        keyConcepts: ["Clarity", "Tone adaptation", "Structure", "Revision"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["Honeybee"]
      },
      {
        slug: "ai-content-editing",
        name: "AI Content Editing",
        summary: "Using AI tools to refine language, grammar and readability.",
        useFor: "Editing content before publishing or sharing.",
        keyConcepts: ["Proofing", "Readability", "Quality checks", "Optimization"],
        relatedProjects: ["Portfolio Website"],
        relatedExperience: ["EverEconic Tech Pvt. Ltd. (Eventoz)"]
      },
      {
        slug: "ai-productivity",
        name: "AI Productivity",
        summary: "Using AI for planning, organization and faster decision support.",
        useFor: "Task breakdown, prioritization and workflow efficiency.",
        keyConcepts: ["Planning", "Automation support", "Decision support", "Time efficiency"],
        relatedProjects: ["BharatSaathi AI"],
        relatedExperience: ["NavGurukul"]
      },
      {
        slug: "generative-ai",
        name: "Generative AI",
        summary: "Applying generative AI capabilities in development and content workflows.",
        useFor: "Experimentation with AI-assisted user support and digital services.",
        keyConcepts: ["Prompt design", "Generation", "Use-case design", "Practical applications"],
        relatedProjects: ["BharatSaathi AI"],
        relatedExperience: ["NavGurukul"]
      }
    ]
  }
];

export const experiences = [
  {
    company: "Honeybee",
    role: "Digital Marketing Executive / Intern",
    duration: "3 Months Internship",
    responsibilities: [
      "Digital marketing activities",
      "SEO activities",
      "Website and content optimization",
      "Content creation",
      "Digital marketing support",
      "Online visibility activities"
    ]
  },
  {
    company: "YFS",
    role: "Intern",
    duration: "",
    responsibilities: []
  },
  {
    company: "EverEconic Tech Pvt. Ltd. (Eventoz)",
    role: "SEO & Digital Marketing",
    duration: "6 Months",
    responsibilities: [
      "SEO",
      "Social media page management",
      "Blogging",
      "Content writing",
      "Content editing",
      "Keyword-focused content",
      "Backlink building",
      "Off-page SEO",
      "Digital marketing",
      "Online visibility",
      "Social media content"
    ]
  },
  {
    company: "NavGurukul",
    role: "Academic Coordinator / Software Trainee",
    duration: "Learning and project phase",
    responsibilities: [
      "Academic coordination",
      "Student support",
      "Student learning activities",
      "Team coordination",
      "Web development learning",
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Real-world projects",
      "Team communication"
    ]
  }
];

export const projects = [
  {
    title: "BharatSaathi AI",
    category: "AI Platform / Full Stack Project",
    description:
      "BharatSaathi AI is an AI-powered platform designed to support students, job seekers and citizens with career guidance, resume building, government scheme discovery, skill development, interview preparation and digital services.",
    technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "Firebase", "Firestore", "Google Gemini API", "Tailwind CSS"],
    features: [
      "AI Chatbot",
      "Resume Builder",
      "Career Guidance",
      "Government Scheme Finder",
      "Job & Internship Guidance",
      "Skill Development",
      "Interview Preparation",
      "Multi-language Support",
      "Student Support"
    ],
    liveDemo: "https://bharat-sathi-ai.vercel.app/",
    featured: true
  },
  {
    title: "Flipkart Clone",
    category: "Frontend Project",
    description: "A responsive e-commerce interface focused on product browsing and modern UI replication.",
    technologies: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
    features: ["Product listing UI", "Responsive pages", "Interactive navigation"],
    featured: false
  },
  {
    title: "Portfolio Website",
    category: "Personal Branding",
    description: "A premium, image-free portfolio website designed for professional discovery and hiring readiness.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vite"],
    features: ["Multi-page architecture", "SEO-focused structure", "Accessible dark UI"],
    liveDemo: "https://shubham-drab.vercel.app/",
    featured: false
  }
];

export const achievements = [
  {
    icon: "🏆",
    title: "Build for Good 2026 Hackathon",
    detail: "Project: BharatSaathi AI"
  }
];

export const contactInfo = {
  email: "shubhamumar25@navguruul.com"
};

export function findSkillBySlug(slug) {
  for (const group of skillGroups) {
    for (const skill of group.skills) {
      if (skill.slug === slug) {
        return { ...skill, group: group.title };
      }
    }
  }
  return null;
}

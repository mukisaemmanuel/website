import {
  PersonalInfo,
  Skill,
  Project,
  Experience,
  Education,
  Contact,
} from "../types/portfolio.types";

export const personalInfo: PersonalInfo = {
  name: "Mukisa Emmanuel",
  title: "Software Engineer",
  bio: "Passionate software engineer with expertise in modern web development, specializing in React, TypeScript, and full-stack solutions. I love creating efficient, scalable applications that solve real-world problems.",
  avatar: "/images/profile.jpg",
  resume: "/resume.pdf",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "fab fa-react" },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: "fab fa-js-square",
  },
  {
    name: "JavaScript",
    level: 95,
    category: "frontend",
    icon: "fab fa-js-square",
  },
  { name: "HTML5", level: 95, category: "frontend", icon: "fab fa-html5" },
  { name: "CSS3", level: 90, category: "frontend", icon: "fab fa-css3-alt" },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "frontend",
    icon: "fas fa-palette",
  },
  { name: "Next.js", level: 80, category: "frontend", icon: "fas fa-rocket" },
  { name: "Vue.js", level: 75, category: "frontend", icon: "fab fa-vuejs" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "fab fa-node-js" },
  { name: "Express.js", level: 80, category: "backend", icon: "fas fa-server" },
  { name: "Python", level: 85, category: "backend", icon: "fab fa-python" },
  { name: "Django", level: 75, category: "backend", icon: "fas fa-code" },
  { name: "PHP", level: 70, category: "backend", icon: "fab fa-php" },
  { name: "Laravel", level: 65, category: "backend", icon: "fas fa-code" },

  // Database
  {
    name: "PostgreSQL",
    level: 80,
    category: "database",
    icon: "fas fa-database",
  },
  { name: "MongoDB", level: 75, category: "database", icon: "fas fa-leaf" },
  { name: "MySQL", level: 85, category: "database", icon: "fas fa-database" },
  { name: "Redis", level: 70, category: "database", icon: "fas fa-memory" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "fab fa-git-alt" },
  { name: "Docker", level: 75, category: "tools", icon: "fab fa-docker" },
  { name: "AWS", level: 70, category: "tools", icon: "fab fa-aws" },
  { name: "Linux", level: 80, category: "tools", icon: "fab fa-linux" },
  { name: "Figma", level: 70, category: "tools", icon: "fab fa-figma" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React frontend and Node.js backend",
    longDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Built with modern technologies and best practices.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    image: "/images/ecommerce-project.jpg",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/mukisa/ecommerce-platform",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates",
    longDescription:
      "A modern task management application that allows teams to collaborate efficiently. Features include real-time updates, drag-and-drop functionality, user roles, notifications, and detailed analytics.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Material-UI"],
    image: "/images/task-app.jpg",
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/mukisa/task-manager",
    featured: true,
    category: "Web App",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive weather application with location-based forecasts",
    longDescription:
      "An intuitive weather dashboard that provides current weather conditions, 7-day forecasts, and weather maps. Includes geolocation support, favorite locations, and weather alerts.",
    technologies: [
      "React",
      "TypeScript",
      "OpenWeather API",
      "Chart.js",
      "CSS3",
    ],
    image: "/images/weather-app.jpg",
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/mukisa/weather-dashboard",
    featured: false,
    category: "Frontend",
  },
  {
    id: "4",
    title: "Blog CMS",
    description: "A content management system for blogs with rich text editing",
    longDescription:
      "A powerful CMS built for bloggers and content creators. Features include rich text editing, media management, SEO optimization, comment system, and user management.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TinyMCE"],
    image: "/images/blog-cms.jpg",
    githubUrl: "https://github.com/mukisa/blog-cms",
    featured: false,
    category: "CMS",
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    position: "Senior Software Engineer",
    duration: "2022 - Present",
    location: "Kampala, Uganda",
    description: [
      "Led development of client-facing web applications using React and TypeScript",
      "Architected and implemented microservices using Node.js and Docker",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization techniques",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    id: "2",
    company: "Digital Innovations Ltd.",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "Kampala, Uganda",
    description: [
      "Developed and maintained multiple web applications using React and Django",
      "Collaborated with design team to implement responsive user interfaces",
      "Integrated third-party APIs and payment gateways",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: [
      "React",
      "Django",
      "Python",
      "PostgreSQL",
      "JavaScript",
      "CSS3",
    ],
  },
  {
    id: "3",
    company: "StartupHub",
    position: "Junior Developer",
    duration: "2019 - 2020",
    location: "Kampala, Uganda",
    description: [
      "Built responsive websites using HTML, CSS, and JavaScript",
      "Assisted in database design and implementation",
      "Participated in client meetings and requirement gathering",
      "Learned modern development practices and tools",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Makerere University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2016 - 2019",
    location: "Kampala, Uganda",
    gpa: "3.8/4.0",
  },
  {
    id: "2",
    institution: "Uganda Technical College",
    degree: "Diploma",
    field: "Information Technology",
    duration: "2014 - 2016",
    location: "Kampala, Uganda",
  },
];

export const contact: Contact = {
  email: "mukisa.emmanuel@example.com",
  phone: "+256 700 123 456",
  location: "Kampala, Uganda",
  linkedin: "https://linkedin.com/in/mukisa-emmanuel",
  github: "https://github.com/mukisa",
  twitter: "https://twitter.com/mukisa_dev",
  website: "https://mukisa-emmanuel.dev",
};

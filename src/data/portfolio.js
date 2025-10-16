export const personalInfo = {
  name: "Fakhri Habibi",
  title: "Information Systems Student",
  tagline: "Software Engineering & Data Analytics Enthusiast",
  bio: "Passionate undergraduate information systems student specializing in software engineering. With a strong foundation in both technical implementation and strategic planning, I bridge the gap between business needs and technology solutions. I am also exploring other fields, such as data analytics, AI, and RAG systems, by constantly learning and seeking challenges. Besides coding, I enjoy music, movies, and exploring new technologies.",
  email: "fakhri.habibi@ui.ac.id",
  location: "Jakarta, Indonesia",
};

export const skills = [
  {
    category: "Software Engineering",
    items: [
      "Full-Stack Development",
      "System Architecture",
      "API Design",
      "Database Design",
      "Software Testing",
      "DevOps & CI/CD",
    ]
  },
  {
    category: "Data Analytics",
    items: [
      "Data Visualization",
      "Machine Learning",
      "Exploratory Data Analysis",
      "Interactive Dashboards",
    ]
  },
];

export const techStack = [
  { name: "Next.js", icon: "https://img.icons8.com/?id=MWiBjkuHeMVq&format=png&size=48" },
  { name: "Django", icon: "https://img.icons8.com/?id=IuuVVwsdTi2v&format=png&size=48" },
  { name: "React", icon: "https://img.icons8.com/?id=asWSSTBrDlTW&format=png&size=48" },
  { name: "Flutter", icon: "https://img.icons8.com/?id=7I3BjCqe9rjG&format=png&size=48" },
  { name: "Supabase", icon: "https://img.icons8.com/?id=grZaE9tjqDyr&format=png&size=48" },
  { name: "Node.js", icon: "https://img.icons8.com/?id=54087&format=png&size=48" },
  { name: "AWS", icon: "https://img.icons8.com/?id=33039&format=png&size=48" },
  { name: "JavaScript", icon: "https://img.icons8.com/?id=108784&format=png&size=48" },
  { name: "Python", icon: "https://img.icons8.com/?id=Rc0Xn5AtE8kX&format=png&size=48" },
  { name: "PostgreSQL", icon: "https://img.icons8.com/?id=38561&format=png&size=48" },
  { name: "Git", icon: "https://img.icons8.com/?id=20906&format=png&size=48" },
  { name: "Docker", icon: "https://img.icons8.com/?id=22813&format=png&size=48" },
  { name: "Google Looker", icon: "https://img.icons8.com/?id=SruJhzn0nnLl&format=png&size=48" },
  { name: "Figma", icon: "https://img.icons8.com/?id=zfHRZ6i1Wg0U&format=png&size=48" },
];

export const experiences = [
  {
    id: 1,
    title: "Business Intelligence Analyst Intern",
    organization: "Telkom Indonesia",
    type: "Internship",
    period: "Jul 2025 - Aug 2025",
    duration: "2 months",
    description: [
      "Collected, cleaned, and analyzed large datasets to identify trends and insights for business decision-making",
      "Built and tuned interactive dashboards using Google Looker to visualize key business metrics",
      "Developed side-projects for the AyoBeraksi initiative, including an e-commerce like platform for donations and a speaker booking system to help event organizers find professionals from various fields"
    ],
    technologies: ["Looker Studio", "Microsoft Excel", "Python", "Next.js", "Django", "Figma", "Git", "Supabase"],
  },
  {
    id: 2,
    title: "Head of Public Relations",
    organization: "Olimpiade Ilmiah Mahasiswa UI",
    type: "Organization",
    period: "May 2024 - Nov 2024",
    duration: "7 months",
    description: [
      "Led the PR team for Universitas Indonesia's largest academic competition",
      "Managed partnerships with Narasi TV, StudentxCEO UI, and many other media outlets",
      "Coordinated external communications through social media and planned public relations strategies",
    ],
    technologies: ["Leadership", "Team Management", "Project Management", "Media Relations", "External Communications"],
  },
  // {
  //   id: 3,
  //   title: "Vice President of Technology",
  //   organization: "University Tech Community",
  //   type: "Organization",
  //   period: "Sep 2023 - Present",
  //   duration: "Ongoing",
  //   description: [
  //     "Leading technical initiatives and workshops for 200+ student members",
  //     "Organizing hackathons and coding competitions with industry partnerships",
  //     "Mentoring junior students in software development and career planning",
  //     "Managing technology stack and infrastructure for community projects",
  //   ],
  //   technologies: ["Leadership", "Event Management", "Mentoring", "Community Building"],
  // },
];

export const projects = [
  {
    id: 1,
    title: "Quikyu - Smart Queue System for PT KAI",
    description: "Developed in under 48 hours, this multi-layer solution enhances the security, resilience, and user experience for PT KAI's digital booking platform. The project focuses on proactively managing high traffic and preventing fraudulent bot activity.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    technologies: ["Crowdhandler", "Next.js", "Supabase", "Tailwind CSS"],
    category: "#1 Winner of Hacksphere 2025",
    link: "https://www.quikyu.xyz/",
    github: "https://github.com/Frizz-Dev/hacksphrizz",
  },
  {
    id: 2,
    title: "Project Portfolio Tracker",
    description: "Advanced project management tool with Gantt charts, Kanban boards, and team collaboration features. Includes automated reporting and integration with popular tools like Slack and GitHub.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
    category: "Project Management",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "AI-Powered Study Assistant",
    description: "Intelligent study companion using machine learning to personalize learning paths, generate practice questions, and provide instant feedback on student submissions.",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    technologies: ["Python", "FastAPI", "TensorFlow", "React", "Redis"],
    category: "AI & Machine Learning",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "E-Commerce Analytics Dashboard",
    description: "Real-time business intelligence platform providing insights into sales trends, customer behavior, inventory management, and predictive analytics for e-commerce businesses.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js", "AWS"],
    category: "Business Intelligence",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Mobile Event Management App",
    description: "Cross-platform mobile application for organizing and managing events, featuring ticket sales, attendee tracking, QR code scanning, and real-time event updates.",
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
    technologies: ["React Native", "Firebase", "Node.js", "Stripe API"],
    category: "Mobile Development",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Supply Chain Optimization Tool",
    description: "Enterprise solution for optimizing supply chain operations with route planning, inventory forecasting, vendor management, and automated procurement workflows.",
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    technologies: ["Angular", "Java Spring", "MySQL", "Docker", "Kubernetes"],
    category: "Enterprise Software",
    link: "#",
    github: "#",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/fakhrihabb",
    icon: "github",
    handle: "@fakhrihabb",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/fakhrihabb",
    icon: "linkedin",
    handle: "Fakhri Habibi",
  },
  {
    name: "Email",
    url: "mailto:fakhri.habb@example.com",
    icon: "email",
    handle: "fakhri.habb@example.com",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/fakhrihabb",
    icon: "twitter",
    handle: "@fakhrihabb",
  },
];

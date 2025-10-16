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
    coverImage: "/project-images/quikyu-mockup.png",
    technologies: ["Crowdhandler SDK", "Next.js", "Supabase", "Tailwind CSS"],
    category: "#1 Winner of Hacksphere 2025",
    link: "https://www.quikyu.xyz/",
    github: "https://github.com/Frizz-Dev/hacksphrizz",
  },
  {
    id: 2,
    title: "BarangBareng - Online Donation Platform",
    description: "As an extension of my internship, my team and I developed this comprehensive donation platform for AyoBeraksi, featuring item listings, real-time chat, and donation tracking to facilitate community-driven support and resource sharing.",
    coverImage: "/project-images/barangbareng-mockup.png",
    technologies: ["Next.js", "Supabase", "Hostinger DNS", "Tailwind CSS"],
    category: "Funded Project for AyoBeraksi",
    link: "https://www.barangbareng.id/",
    github: "#",
  },
  {
    id: 3,
    title: "Narrapro - Book a Speaker Platform",
    description: "As an extension of my internship, my team and I developed this speaker-booking platform, including features such as speaker profiles, booking management, and event listing to help events connect with experts from various fields.",
    coverImage: "/project-images/narrapro-mockup.png",
    technologies: ["Python", "FastAPI", "TensorFlow", "React", "Redis"],
    category: "Funded Project for AyoBeraksi",
    link: "https://www.narrapro.org/",
    github: "#",
  },
  {
    id: 4,
    title: "Internal Dashboards for Telkom Indonesia",
    description: "Interactive dashboards for Telkom Indonesia's Revenue Assurance team, providing insights into financial metrics and operational efficiency to facilitate data-driven decision-making and strategic planning.The dashboards themselves are created using Google Looker Studio.",
    coverImage: "/project-images/dashboards-mockup.png",
    technologies: ["Python (Pre-Processing & EDA)", "Google Looker Studio", "Google Spreadsheets"],
    category: "Business Intelligence",
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
    url: "mailto:fakhri.habibi@ui.ac.id",
    icon: "email",
    handle: "fakhri.habibi@ui.ac.id",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/fakhrihabb",
    icon: "instagram",
    handle: "@fakhrihabb",
  },
];

import { FaReact, FaNode, FaPython, FaJava, FaDocker, FaAws, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiD3Dotjs, SiThreedotjs, SiPostgresql, SiMongodb, SiKubernetes, SiGo, SiApachekafka } from 'react-icons/si';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Microsoft",
    location: "Atlanta, GA",
    date: "May 2025 - Aug 2025",
    points: [
      "Designed and implemented a scalable data pipeline using C# with message queue architecture and performance monitoring dashboard to automate processing Azure Virtual Machines downtime records, raising availability to 99.99% for millions of users.",
      "Resolved 15% of outdated data cases by collaborating with cross-functional teams to define data validation logic using KQL queries on Azure Data Explorer, ensuring consistent alignment between downtime records and root cause classification.",
      "Implemented a decision tree-based labeling system to trace and analyze VM downtime across phases (Detection, Diagnostics, and Mitigation), resulting in a 10% reduction in recovery time.",
      "Built PowerBI dashboards to visualize downtime patterns enabling proactive system performance monitoring.",
      "Engineered a load testing tool in Go to simulate VM failure scenarios and validate pipeline performance under stress, improving test execution speed by 3x and ensuring system reliability at scale.",
    ],
    color: "#00a4ef",
  },
  {
    title: "Software Engineer Intern",
    company: "MoMo (M_Service)",
    location: "Ho Chi Minh City, Vietnam",
    date: "May 2024 - Aug 2024",
    points: [
      "Developed a high-performance internal dashboard using JavaScript and Thymeleaf for Vietnam's largest digital wallet platform to monitor data of multiple database tables and reload Redis configurations, reducing external tool costs by $1.5 million annually.",
      "Devised a unified data access interface integrating Oracle, Cassandra, and MySQL databases using Java, Vert.x, Kafka, and RabbitMQ, reducing data processing time by 30% and optimizing system performance.",
      "Engineered a microservices architecture using Java and Vert.x with custom logging and exception handling systems, reducing the average time to identify and fix bugs by 35%.",
      "Achieved 90% code coverage by designing and executing comprehensive unit tests using JUnit across all critical services.",
    ],
    color: "#af206e",
  },
  {
    title: "Software Engineer Intern",
    company: "Flow",
    location: "Austin, TX",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Developed RESTful APIs using Django with optimized database queries through indexing and denormalization, storing data in AWS RDS with Redis caching, reducing average response time from 200ms to 150ms.",
      "Engineered React.js frontend with Material UI using code splitting and lazy loading, resulting in 50% faster load times.",
      "Automated CI/CD pipelines with Bash scripts, accelerating deployment workflows and reducing setup time by 80%.",
      "Led a team of 5 interns to implement full-stack features using Agile methodology, designing workflows and organizing daily stand-ups, sprint planning, and retrospectives.",
    ],
    color: "#6366f1",
  },
  {
    title: "Research Assistant",
    company: "University of South Florida",
    location: "Tampa, FL",
    date: "Jan 2023 - May 2023",
    points: [
      "Applied Smith-Waterman algorithm utilizing CUDA for parallel genomic sequence alignment across multiple GPUs, achieving 3.5x faster processing time compared to CPU implementations.",
      "Architected a task scheduler in C++ that dynamically distributed genome fragments across the GPU cluster, balancing workloads based on sequence complexity and reducing idle GPU time by 40%.",
    ],
    color: "#006747",
  },
];

export const projects = [
  {
    name: "The Streaming Wars",
    description: "Interactive data visualization analyzing the streaming platform competition (Netflix, Disney+, Amazon Prime, HBO Max). Features animated race charts, content library comparisons, genre trends, and geographic availability maps.",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "TypeScript", color: "text-blue-300" },
      { name: "D3.js", color: "text-orange-400" },
      { name: "Framer Motion", color: "text-pink-400" },
    ],
    image: "/streaming-wars.png",
    link: "https://github.com/Hungruong/streaming-wars",
    demo: "https://streaming-wars.vercel.app/",
    featured: true,
  },
];

export const skills = {
  languages: [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "Python", level: 90 },
    { name: "Java", level: 88 },
    { name: "Go", level: 75 },
    { name: "C/C++", level: 80 },
    { name: "SQL/KQL", level: 85 },
  ],
  frameworks: [
    { name: "React/Next.js", level: 95 },
    { name: "D3.js", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "Spring Boot", level: 82 },
    { name: "Django/FastAPI", level: 85 },
    { name: "Three.js", level: 75 },
  ],
  tools: [
    { name: "Docker/Kubernetes", level: 85 },
    { name: "AWS/GCP", level: 82 },
    { name: "PostgreSQL/MongoDB", level: 88 },
    { name: "Kafka/RabbitMQ", level: 80 },
    { name: "Git/CI-CD", level: 92 },
    { name: "PowerBI/Tableau", level: 78 },
  ],
};

export const socialLinks = {
  github: "https://github.com/Hungruong",
  linkedin: "https://linkedin.com/in/hungtk04",
  email: "hungkhanh.truong112@gmail.com",
};

export const about = {
  title: "Data Visualization Engineer",
  subtitle: "Turning complex data into compelling visual stories",
  description: `I'm a Computer Science student at University of South Florida with a passion for data visualization, interactive storytelling, and building systems that make complex information accessible.

With experience at Microsoft and MoMo, I specialize in building high-performance dashboards, scalable data pipelines, and data-driven applications that serve cross-functional teams. At Microsoft, I designed data pipelines processing Azure VM telemetry for millions of users. At MoMo, I built internal dashboards that saved $1.5M annually while integrating multiple database systems (Oracle, Cassandra, MySQL) to serve operations, risk management, and customer support teams.

I combine strong backend engineering fundamentals (Java, Python, C#, Go) with creative data visualization skills (React, D3.js, TypeScript). My experience spans the full data stack - from building ETL pipelines with Kafka and message queues, to creating interactive frontends that transform raw metrics into actionable insights.

What drives me is the challenge of making data understandable and beautiful - whether it's visualizing streaming platform competition or building real-time monitoring systems that help teams make faster decisions.`,
  highlights: [
    "Built dashboards saving $1.5M annually at MoMo",
    "Achieved 99.99% availability for Azure VM monitoring at Microsoft",
    "3rd Place - MoMo Techday Hackathon 2024",
    "Harvard CS50 & MIT ML Certified",
  ],
};

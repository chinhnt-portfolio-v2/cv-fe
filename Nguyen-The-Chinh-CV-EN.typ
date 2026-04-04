#import "@preview/modern-cv:0.9.0": *

#show: resume.with(
  author: (
    firstname: "Nguyen The",
    lastname: "Chinh",
    email: "nguyenthechinhk25@gmail.com",
    homepage: "https://portfolio.chinhnt.xyz",
    phone: "0566113369",
    github: "chinhnt113",
    address: "Hanoi",
    positions: (
      "Fullstack Developer",
    ),
  ),
  keywords: ("Engineer", "Architect"),
  description: "Chinh complete resume",
  profile-picture: image("profile_ava_1_1.png"),
  date: datetime.today().display(),
  language: "en",
  colored-headers: true,
  show-footer: false,
  show-address-icon: true,
  paper-size: "us-letter",
)

= About Me

#resume-item[
  Fullstack developer with ~4 years of experience building scalable web applications.
  Strong in Java Spring Boot on the backend and ReactJS/TypeScript on the frontend.
  Experienced with messaging systems (Kafka, RabbitMQ) and real-time communication
  (WebSocket). Actively leveraging AI coding tools like Claude Code and Cursor
  to boost productivity.
]

= Experience

#resume-entry(
  title: "Fullstack Developer — Sapo GO",
  location: "Sapo Technology JSC",
  date: "Jul 2022 - Present",
)

#resume-item[
  - Led end-to-end frontend migration: Node 14 → 18, React 16 → 18 (improved build
    performance by ~40%, aligned project with current LTS).
  - Built Social Channel feature for Facebook, Instagram, and Zalo sellers — includes
    live chat, inventory sync, automated messaging scripts, and analytics dashboard
    (Kafka + WebSocket for real-time updates).
  - Developed and maintained backend APIs with Java Spring Boot; managed frontend
    with ReactJS and Redux state.
  - Integrated Sentry for real-time error monitoring and performance tracking — enabling faster root cause identification and reducing time spent on bug resolution.
]

#resume-entry(
  title: "Fullstack Developer — Sapo Marketplace",
  location: "Sapo Technology JSC",
  date: "Feb 2026 - Present",
)

#resume-item[
  - Developed Marketplace Channel feature enabling Shopee, TikTok Shop, and Lazada
    sellers to manage orders and sync product data from a single platform.
  - Built browser extension for TikTok Seller to crawl and enrich customer phone
    numbers for targeted marketing campaigns.
]

#resume-entry(
  title: "Frontend Developer — Sapo Social Mobile",
  location: "Sapo Technology JSC",
  date: "Jan 2025 - Jun 2025",
)

#resume-item[
  - Built mobile app interface with React Native and integrated REST APIs for Sapo
    Social Channel, serving thousands of social sellers on the go.
]

#resume-entry(
  title: "Frontend Developer — Facebook Shopping",
  location: "Sapo Technology JSC",
  date: "Oct 2024 - Feb 2025",
)

#resume-item[
  - Developed Facebook Catalog and Facebook Live Shopping interfaces with TypeScript,
    integrated into the Sapo platform ecosystem.
]

= Projects

#resume-entry(
  title: "Personal Portfolio",
  location: "Personal Project",
  date: "Mar 2026 - Present",
)

#resume-item[
  - Built and shipped a production-ready portfolio using AI-augmented workflow —
    BMAD agent orchestration + Claude Code throughout the SDLC (spec, implementation, tests, CI/CD).
  - Backend: Spring Boot (GCP Cloud Run) + Frontend: React/TypeScript (Vercel);
    WebSocket for real-time UI; PostgreSQL for persistence.
  - 222 passing tests; CI/CD pipeline live on day 13.
]

#resume-entry(
  title: "Hospital Booking System (Graduation Thesis)",
  location: "HUST",
  date: "2022 - 2023",
)

#resume-item[
  - Full-stack booking and healthcare info system for clients and admins.
  - Implemented load-balancing with nginx for production deployment.
  - Stack: ReactJS, NodeJS, Python, MongoDB, nginx.
]

= Skills

#resume-skill-grid(
  categories-with-values: (
    "Languages": ("Java", "TypeScript", "JavaScript", "Python"),
    "Frontend": ("ReactJS", "React Native", "Redux", "WebSocket"),
    "Backend": ("Spring Boot", "NodeJS", "REST APIs"),
    "Database": ("MySQL", "MongoDB"),
    "DevOps": ("Docker", "nginx", "CI/CD (GitHub Actions)"),
    "Messaging": ("Kafka", "RabbitMQ"),
    "AI Tools": ("Claude Code", "Cursor"),
  ),
)

= Education

#resume-entry(
  title: "Hanoi University of Science and Technology",
  location: "Hanoi",
  date: "2018 - 2023",
  description: "Global ICT Program — Bachelor of Engineering in Information Technology",
)

#resume-item[
  - Program focuses on English communication and global engineering skills.
]

= Certificates

#resume-entry(
  title: "TOEIC Listening & Reading — Score: 930",
  location: "",
  date: "Feb 2023",
)

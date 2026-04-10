/**
 * portfolio.js
 * Central data configuration for Utsav Agarwal's backend portfolio.
 * Import from this file across all sections to keep content consistent.
 */

// ─── PERSONAL INFO ───────────────────────────────────────────────────────────
export const personal = {
  name: "Utsav Agarwal",
  title: "Backend Developer",
  tagline:
    "Building scalable infrastructure, high-performance matching engines, and distributed event-driven systems.",
  email: "utsav73629@gmail.com",
  github: "https://github.com/Utsav7428",
  leetcode: {
    label: "LeetCode",
    problems: 300,
    rating: 1665,
    badge: "Solved 300+ problems · Rating 1665",
  },
  location: "Bengaluru, India",
};

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experience = [
  {
    id: "tcs",
    role: "Backend Developer",
    company: "Tata Consultancy Services",
    location: "Bengaluru, India",
    period: "Present",
    highlights: [
      {
        metric: "60%",
        direction: "down",
        label: "Reduction in service-to-service calls",
        detail:
          "Built a centralized Event Orchestrator using Spring Boot and Apache Kafka, decoupling inter-service communication and eliminating redundant REST round-trips.",
      },
      {
        metric: "4h → <1h",
        direction: "down",
        label: "ETL execution time in production",
        detail:
          "Accelerated large-scale ETL processing via Remote Batch Partitioning (Spring Batch), parallelising workloads across worker nodes.",
      },
      {
        metric: "ELK",
        direction: "neutral",
        label: "Event Reconciliation Module",
        detail:
          "Implemented an Elasticsearch-Logstash-Kibana-based reconciliation pipeline for near-real-time event auditing and anomaly detection.",
      },
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "chronox",
    title: "ChronoX Exchange",
    category: "Matching Engine",
    description:
      "A high-performance order-matching engine written in Golang achieving sub-millisecond simulated matching latency on a dataset of 10 000 orders.",
    highlights: [
      "Sub-millisecond simulated matching latency",
      "10K-order benchmark dataset",
      "Redis Pub/Sub for real-time order-book broadcast",
      "WebSocket feed for live trade updates",
    ],
    tech: ["Golang", "PostgreSQL", "Redis Pub/Sub", "WebSockets"],
    accentColor: "#3b82f6",
    media: "/assets/project-chronox-placeholder.mp4",
    mediaPoster: "/assets/project-chronox-poster.png",
    github: "https://github.com/Utsav7428/ChronoXchange",
  },
  {
    id: "eventra",
    title: "Eventra",
    category: "Event Automation",
    description:
      "Scalable event-automation backend inspired by Zapier — built with Java and Kafka, capable of handling 1 000 concurrent event triggers in simulation.",
    highlights: [
      "1K concurrent event triggers in simulation",
      "Kafka-backed async trigger pipeline",
      "Pluggable action executor architecture",
      "PostgreSQL event-log with idempotent replay",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL"],
    accentColor: "#22c55e",
    media: "/assets/project-eventra-placeholder.mp4",
    mediaPoster: "/assets/project-eventra-poster.png",
    github: "https://github.com/Utsav7428/eventra",
  },
  {
    id: "rubix-cube-solver",
    title: "Rubix Cube Solver",
    category: "Algorithmic C++",
    description:
      "A performance-first Rubik's Cube solver implemented in C++ with optimized search heuristics for fast solution generation.",
    highlights: [
      "C++ search-based solver",
      "Optimized move generation",
      "Command-line cube analysis",
      "Focused on speed and reliability",
    ],
    tech: ["C++", "Algorithms", "Data Structures"],
    accentColor: "#7c83fd",
    media: "/assets/project-rubix-placeholder.mp4",
    mediaPoster: "/assets/project-rubix-poster.png",
    github: "https://github.com/Utsav7428/rubix-cube-solver",
  },
  {
    id: "hardware-monitor-tui",
    title: "Hardware Monitor TUI",
    category: "Rust Systems Tool",
    description:
      "A terminal-based hardware monitoring interface built in Rust, focused on efficient system telemetry and ergonomics.",
    highlights: [
      "Rust-native TUI experience",
      "Real-time system metrics",
      "Low-overhead telemetry polling",
      "Designed for developers and ops users",
    ],
    tech: ["Rust", "Terminal UI", "Systems Monitoring"],
    accentColor: "#ff8c42",
    media: "/assets/project-rust-placeholder.mp4",
    mediaPoster: "/assets/project-rust-poster.png",
    github: "https://github.com/Utsav7428/hardware-monitor-tui",
  },
];

// ─── SKILLS / MARQUEE ─────────────────────────────────────────────────────────
export const skills = {
  languages: ["Java", "C++", "SQL", "PL/SQL", "Golang"],
  frontend: ["React", "Next.js"],
  devops: ["Docker", "Jenkins", "Kubernetes", "Git", "GitHub"],
  tools: ["Postman", "DBeaver"],
  databases: ["PostgreSQL", "Redis", "Elasticsearch"],

  marquee: [
    "Java",
    "C++",
    "SQL",
    "PL/SQL",
    "Golang",
    "Spring Boot",
    "React",
    "Next.js",
    "Docker",
    "Git",
    "Jenkins",
    "Postman",
    "DBeaver",
    "GitHub",
    "Kubernetes",
    "PostgreSQL",
    "Redis",
    "Elasticsearch",
  ],
};

// ─── ABOUT BENTO CARDS ────────────────────────────────────────────────────────
export const aboutCards = [
  {
    id: "event-orchestrator",
    title: "Event Orchestrator",
    body: "Centralized Kafka + Spring Boot orchestration layer that cut cross-service chatter by 60% and made our event pipeline auditable end-to-end.",
    tag: "TCS · Production",
  },
  {
    id: "etl-partitioning",
    title: "Remote Batch Partitioning",
    body: "Spring Batch ETL refactor that slashed job duration from 4 hours to under 1 hour by distributing partition steps across parallel worker nodes.",
    tag: "TCS · Production",
  },
  {
    id: "elk-reconciliation",
    title: "ELK Reconciliation Module",
    body: "Elasticsearch-driven event audit pipeline with Kibana dashboards for near-real-time anomaly detection across distributed microservices.",
    tag: "TCS · Production",
  },
];

// ─── FOOTER / CONTACT ─────────────────────────────────────────────────────────
export const contact = {
  email: personal.email,
  phone: "7362921218",
  github: personal.github,
  linkedin: "https://www.linkedin.com/in/utsav-agarwal-5b2230168/",
  socials: [
    { label: "GitHub", url: personal.github },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/utsav-agarwal-5b2230168/" },
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/utsav7428/",
      badge: personal.leetcode.badge,
    },
  ],
  cta: "Open to backend / infra roles. Let's build something fast.",
};

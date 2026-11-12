// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change what the portfolio shows.
//  Images live in /public and are referenced as "/file.png".
// ─────────────────────────────────────────────────────────────

export const profile = {
  shortName: "GK", // used in the giant hero heading
  fullName: "Erothu Gopala Krishna",
  role: "Full-Stack Developer & SaaS Product Builder",
  heroLine: "a full-stack developer building scalable saas products end to end",
  heroImage: "/gk-hero.webp", // transparent cut-out, works on light and dark
  photo: "/gk-photo.png",
  about:
    "I turn business requirements into scalable software. From multi-tenant SaaS architecture and database design " +
    "to payments, WhatsApp automation and clean interfaces, i build products that real temples, restaurants, " +
    "stores and teams run on. Let's build something incredible together!",
  facts: [
    { label: "Company", value: "KRANAS TECH & SOLUTIONS PVT LTD" },
    { label: "Education", value: "B.Com · AKRG Institution · 2023" },
    { label: "Based in", value: "Telangana, India (from Andhra Pradesh)" },
    { label: "Open to", value: "Opportunities in Dubai, UAE" },
  ],
  // Leave a value empty to hide its button.
  email: "gopalakrishnaeerothu@gmail.com",
  phone: "+91 8464091436",
  linkedin: "https://www.linkedin.com/in/gopala-krishna-erothu",
  github: "https://github.com/gopalakrishnaeerothu-sudo",
  githubOrg: "https://github.com/productsmy385-spl",
};

export const services = [
  {
    name: "Full-Stack Development",
    description:
      "End-to-end web apps with Next.js, React, TypeScript and Node.js / FastAPI — from the database to a polished, responsive UI.",
  },
  {
    name: "SaaS & Multi-Tenant Architecture",
    description:
      "Platforms where many businesses share one deployment safely: tenant isolation, subdomains, role-based access and per-tenant websites.",
  },
  {
    name: "Database Design",
    description:
      "PostgreSQL schemas, migrations and ER modelling built for correctness, auditability and growth — plus Redis and Firebase where they fit.",
  },
  {
    name: "Integrations & Automation",
    description:
      "WhatsApp Cloud API, Razorpay, Clerk/Firebase auth, ImageKit, Google Maps, telephony and AI workflows that automate real business processes.",
  },
  {
    name: "Testing & Quality",
    description:
      "Manual and automation testing with Selenium, TestNG, Vitest and Playwright so every release ships with confidence.",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Responsive Design", "UI/UX"],
  Backend: ["Node.js", "Next.js API Routes", "FastAPI", "REST APIs", "Auth & RBAC", "Multi-tenancy"],
  Databases: ["PostgreSQL", "MySQL", "Redis", "Firebase", "SQL Migrations", "DB Design"],
  Testing: ["Selenium WebDriver", "TestNG", "Vitest", "Playwright", "Manual Testing", "Automation Testing"],
  "Tools & Platforms": ["Git & GitHub", "VS Code", "Eclipse", "Railway", "Vercel", "Render", "Docker", "Postman", "Figma"],
  Integrations: ["Firebase Auth", "Clerk", "WhatsApp Cloud API", "Razorpay", "ImageKit", "Cloudinary", "Google Maps API", "Socket.io", "Twilio / Exotel"],
  "AI & Automation": ["AI app development", "AI content workflows", "Automated video generation", "Business process automation"],
};

export type Project = {
  name: string;
  category: string;
  description: string;
  features: string[];
  stack: string[];
  live?: string;
  repo?: string;
  image?: string; // optional screenshot in /public; a designed panel shows when empty
  featured?: boolean; // featured projects get the big stacking cards
};

// Brand palette (also defined as CSS variables in src/index.css)
export const palette = { orange: "#FF9E20", teal: "#215E61", ink: "#1D2128", paper: "#F4F2F2" };

// Project panels cycle through these palette gradients (start colour stays dark so white text reads well).
const accentPairs: [string, string][] = [
  [palette.teal, palette.orange],
  ["#2A303B", palette.orange],
  [palette.teal, "#2A303B"],
];
export const accentFor = (i: number) => accentPairs[i % accentPairs.length];

export const projects: Project[] = [
  {
    name: "TempleOS",
    category: "Temple Management SaaS",
    description:
      "Multi-tenant temple operations platform: every temple gets its own subdomain, public website and admin portal.",
    features: ["Devotee & family records", "Donations & campaigns", "Events & occasions", "WhatsApp chatbot", "English & Telugu", "Role-based access"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Firebase Auth", "WhatsApp Cloud API", "Razorpay"],
    live: "https://trytempleos.com",
    repo: "https://github.com/SusanthKakarla/TempleOS",
    featured: true,
  },
  {
    name: "Adira Store",
    category: "E-commerce",
    description:
      "Custom-design photo & resin frame store with a live design editor, checkout and a full 9-role admin.",
    features: ["Design editor", "Cart, coupons & checkout", "Razorpay + COD", "Orders & invoices", "Deliveries & inventory", "Reports & exports"],
    stack: ["Next.js 16", "PostgreSQL", "Drizzle", "Clerk", "Railway", "Playwright"],
    live: "https://ecom-production-f9860cea.up.railway.app",
    repo: "https://github.com/productsmy385-spl/ECOM",
    featured: true,
  },
  {
    name: "FlowDine",
    category: "Restaurant Management SaaS",
    description:
      "Multi-tenant, multi-outlet restaurant platform with individual restaurant websites and QR ordering.",
    features: ["Digital menus & QR ordering", "KOT & kitchen printers", "Billing & payments", "Delivery management", "WhatsApp & IVR", "Staff roles"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "Redis", "Socket.io", "ImageKit"],
    featured: true,
  },
  {
    name: "Bakery Management System",
    category: "Business Automation",
    description:
      "Ordering, kitchen display and delivery for bakeries — with voice order announcements and live ETAs.",
    features: ["Product catalog", "Kitchen Display System", "Voice announcements", "Delivery ETAs", "Multi-agent WhatsApp inbox", "Telephony"],
    stack: ["Next.js", "PostgreSQL", "Redis", "Socket.io", "WhatsApp Cloud API", "Google Maps API"],
    featured: true,
  },
  {
    name: "Palette",
    category: "Business & Project Management",
    description: "Projects, tasks, workflows, a knowledge base and team collaboration in one productivity SaaS.",
    features: ["Project & task management", "Business workflows", "Knowledge base", "Team collaboration", "Workflow automation"],
    stack: ["Next.js 16", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "TanStack Query"],
    featured: true,
  },
  {
    name: "Digital Setu OS",
    category: "F&B SaaS · KRANAS TECH",
    description: "Tenant storefronts, a role-based console for chefs, sales and delivery staff, and a thermal print agent.",
    features: ["Tenant storefronts", "Role-based console", "Super-admin console", "Thermal print agent"],
    stack: ["Next.js 15", "Prisma", "Clerk", "Tailwind v4"],
    repo: "https://github.com/productsmy385-spl/DIGITALSETU-OS",
  },
  {
    name: "RasoiOS",
    category: "Restaurant SaaS",
    description: "Restaurant platform sold as a licence: public site, KOT board, cloud print queue and day close.",
    features: ["Orders & KOT", "Cloud print queue", "Payments ledger", "Social menu cards"],
    stack: ["Next.js", "Prisma", "Clerk", "PostgreSQL"],
    repo: "https://github.com/productsmy385-spl/RasoiOS",
  },
  {
    name: "Adira Wellness",
    category: "Yoga & Wellness SaaS",
    description: "Consultants build personalised yoga and diet programmes; owners track adherence analytics.",
    features: ["Yoga & diet engines", "Daily check-ins", "Tenant websites", "RBAC"],
    stack: ["Next.js 16", "PostgreSQL", "shadcn/ui", "Railway"],
    repo: "https://github.com/productsmy385-spl/ADIRA-YOGA-DIET-GREENFIELD",
  },
  {
    name: "TaskFlow HR",
    category: "HRM",
    description: "HR, tasks and geofenced attendance verified server-side, with an append-only audit trail.",
    features: ["Geofenced attendance", "Task board & calendar", "Approvals", "Audit trail"],
    stack: ["Next.js 15", "PostgreSQL", "Tailwind v4"],
    repo: "https://github.com/gopalakrishnaeerothu-sudo/HRM",
  },
  {
    name: "QueueLess",
    category: "Mobile App",
    description: "Join real-world queues from your phone, track your live position and get notified before your turn.",
    features: ["Digital tickets", "Live position", "Business console"],
    stack: ["Expo", "React Native", "Fastify", "PostgreSQL"],
    repo: "https://github.com/gopalakrishnaeerothu-sudo/QueueLess",
  },
  {
    name: "Marketives",
    category: "Business Platform",
    description: "Knowledge base architecture, ERDs, API documentation and rollout planning for a business platform.",
    features: ["ERD design", "API documentation", "Data retention", "Rollout planning"],
    stack: ["System Design", "PostgreSQL"],
  },
  {
    name: "Stickman Video Director",
    category: "AI Video Automation",
    description: "Automated YouTube videos: script, AI images and voice, rendered end to end with FFmpeg.",
    features: ["Script generation", "AI images & voice", "FFmpeg rendering"],
    stack: ["Python", "AI APIs", "FFmpeg"],
  },
];

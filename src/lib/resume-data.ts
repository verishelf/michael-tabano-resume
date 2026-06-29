export const personalInfo = {
  name: "Michael Tabano",
  title: "Warehouse Operations | Customer Service | Security",
  location: "Imperial Beach, CA 91932",
  phone: "(619) 946-3880",
  email: null as string | null,
  domain: "Imperial Beach, California",
};

export const heroStatement =
  "Reliable warehouse, logistics, customer service, and security professional with a strong work ethic and team-oriented mindset.";

export const aboutSummary = `Reliable and hardworking professional with experience in warehouse operations, food service, customer service, and security roles. Proven ability to work in fast-paced environments while maintaining accuracy, safety compliance, and customer satisfaction. Skilled in shipping and receiving, inventory support, event monitoring, and high-volume service — with a consistent record of meeting production goals and representing employers with professionalism.`;

export const skills = [
  "Warehouse Operations",
  "Shipping & Receiving",
  "Inventory Management",
  "Customer Service",
  "Security & Event Monitoring",
  "Teamwork & Communication",
  "Safety Compliance",
  "Fast-Paced Environments",
];

export const experience = [
  {
    company: "UPS",
    role: "Preloader",
    period: "September 2025 – January 2026",
    bullets: [
      "Loaded and unloaded packages efficiently in a fast-paced warehouse environment.",
      "Maintained accuracy in sorting and scanning shipments.",
      "Followed safety protocols and met daily production goals.",
    ],
  },
  {
    company: "New York West",
    role: "Server",
    period: "June 2021 – October 2023",
    bullets: [
      "Provided customer service in a high-volume restaurant setting.",
      "Took orders, delivered food, and handled customer requests.",
      "Maintained a clean and organized dining environment.",
    ],
  },
  {
    company: "Wave House",
    role: "Server",
    period: "October 2012 – September 2016",
    bullets: [
      "Worked in a fast-paced beachfront restaurant environment.",
      "Delivered quality service to guests and handled multiple tables.",
      "Processed payments and ensured customer satisfaction.",
    ],
  },
  {
    company: "Sportstown USA",
    role: "Associate",
    period: "September 2011 – October 2012",
    bullets: [
      "Assisted customers with purchases and product inquiries.",
      "Managed stocking, merchandising, and store organization.",
      "Supported daily retail operations.",
    ],
  },
  {
    company: "Elite Show Services",
    role: "Security Guard",
    period: "June 2010 – September 2011",
    bullets: [
      "Monitored events and ensured safety of guests and property.",
      "Controlled entry points and verified credentials.",
      "Responded to incidents professionally and calmly.",
    ],
  },
];

export const resumePdfPath = "/resume/Michael_Tabano_Resume.pdf";
export const resumePdfFilename = "Michael_Tabano_Resume.pdf";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export type MarqueeCompany = {
  name: string;
  tag?: "Recent" | "Experience";
};

export const marqueeCompanies: MarqueeCompany[] = [
  { name: "UPS", tag: "Recent" },
  { name: "New York West", tag: "Experience" },
  { name: "Wave House", tag: "Experience" },
  { name: "Sportstown USA", tag: "Experience" },
  { name: "Elite Show Services", tag: "Experience" },
];

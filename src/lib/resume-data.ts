export const personalInfo = {
  name: "Michael Tabano",
  title: "Warehouse & Logistics | Customer Service | Event Security",
  location: "Imperial Beach, CA 91932",
  phone: "(619) 946-3880",
  email: null as string | null,
  domain: "Imperial Beach, California",
};

export const heroStatement =
  "Operations-focused professional with 10+ years of experience across warehouse logistics, high-volume hospitality, retail, and event security — recognized for reliability, safety compliance, and consistent performance under pressure.";

export const aboutSummary = `Results-driven professional with a proven record of delivering dependable service across warehouse operations, hospitality, retail, and security environments. Skilled in shipping and receiving, inventory support, guest relations, and event safety — with hands-on experience in fast-paced settings where accuracy, teamwork, and professionalism matter most. Recognized for a strong work ethic, clear communication, and the ability to adapt quickly while meeting production goals and maintaining high standards. Seeking a warehouse, logistics, customer service, or security role where consistency, accountability, and operational excellence drive long-term value.`;

export const skills = [
  "Warehouse Operations",
  "Shipping & Receiving",
  "Package Sorting & Scanning",
  "Inventory Management",
  "Customer Service",
  "Hospitality & Guest Relations",
  "Event Security",
  "Retail Operations",
  "Team Collaboration",
  "Safety Compliance",
];

export const competencies = [
  "Warehouse Operations & Logistics",
  "Shipping, Receiving & Package Handling",
  "Inventory Management & Stocking",
  "High-Volume Customer Service",
  "Hospitality & Food Service Operations",
  "Retail Sales & Merchandising",
  "Event Security & Access Control",
  "Safety Protocols & Compliance",
  "Payment Processing & Cash Handling",
  "Conflict Resolution & Problem Solving",
  "Team Collaboration & Communication",
  "Time Management & Organization",
  "Fast-Paced Environment Adaptability",
  "Attention to Detail & Accuracy",
  "Professionalism Under Pressure",
];

export const experience = [
  {
    company: "UPS",
    role: "Preloader",
    period: "September 2025 – January 2026",
    bullets: [
      "Loaded and unloaded packages with speed and precision in a high-volume warehouse and distribution environment.",
      "Maintained accuracy in sorting, scanning, and routing shipments to meet daily production and delivery standards.",
      "Followed strict safety protocols and workplace procedures to protect team members, equipment, and cargo.",
      "Consistently met daily production goals while maintaining quality and operational efficiency.",
      "Collaborated with team members to keep workflow moving smoothly during peak shipping periods.",
      "Demonstrated reliability, physical stamina, and attention to detail in a demanding logistics setting.",
    ],
  },
  {
    company: "New York West",
    role: "Server",
    period: "June 2021 – October 2023",
    bullets: [
      "Delivered exceptional guest service in a high-volume restaurant environment with consistent professionalism.",
      "Took orders accurately, served food promptly, and addressed customer requests with a positive, solution-oriented approach.",
      "Managed multiple tables and dining sections while maintaining service quality during peak business hours.",
      "Processed payments and handled customer transactions with accuracy and efficiency.",
      "Maintained a clean, organized, and welcoming dining environment that reflected high service standards.",
      "Collaborated with kitchen and front-of-house staff to ensure smooth operations and guest satisfaction.",
      "Adapted quickly to changing guest needs, menu updates, and high-traffic service demands.",
    ],
  },
  {
    company: "Wave House",
    role: "Server",
    period: "October 2012 – September 2016",
    bullets: [
      "Provided high-quality guest service in a fast-paced beachfront restaurant and entertainment venue.",
      "Managed multiple tables simultaneously while delivering attentive, friendly, and efficient service.",
      "Processed payments accurately and ensured a positive end-to-end guest experience.",
      "Handled high guest volume with composure, professionalism, and strong communication skills.",
      "Supported team operations during busy shifts to maintain service flow and customer satisfaction.",
      "Demonstrated dependability and consistency in a dynamic, customer-facing hospitality environment.",
    ],
  },
  {
    company: "Sportstown USA",
    role: "Sales Associate",
    period: "September 2011 – October 2012",
    bullets: [
      "Assisted customers with product selection, purchases, and inquiries in a retail sales environment.",
      "Managed stocking, merchandising, and store organization to maintain a professional shopping experience.",
      "Supported daily retail operations including inventory replenishment and floor presentation.",
      "Delivered friendly, knowledgeable customer service that encouraged repeat business and trust.",
      "Demonstrated reliability, attention to detail, and teamwork in a fast-paced retail setting.",
    ],
  },
  {
    company: "Elite Show Services",
    role: "Security Guard",
    period: "June 2010 – September 2011",
    bullets: [
      "Monitored events and protected guests, staff, and property with professionalism and situational awareness.",
      "Controlled entry points, verified credentials, and enforced access procedures with consistency and discretion.",
      "Responded to incidents calmly, professionally, and in accordance with event safety protocols.",
      "Maintained a visible, approachable presence that supported a secure and well-managed event environment.",
      "Collaborated with event staff and team members to ensure smooth operations and guest safety.",
    ],
  },
];

export const additionalQualifications = [
  "Proven ability to perform effectively in physically demanding and fast-paced work environments.",
  "Strong verbal communication skills with a professional, customer-focused approach.",
  "Experienced working independently and as part of a team across multiple industries.",
  "Demonstrated problem-solving ability and composure when handling pressure or unexpected situations.",
  "Consistent record of punctuality, accountability, and respect for workplace standards.",
  "Seeking opportunities in Warehouse Operations, Logistics, Shipping & Receiving, Customer Service, Hospitality, Retail, and Event Security.",
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

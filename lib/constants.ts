import {
  Service,
  CaseStudy,
  TeamMember,
  BlogPost,
  Testimonial,
  FAQ,
  CompanyStats,
  Product,
  Client,
  GalleryItem,
  DownloadItem,
  JobOpening,
} from "@/types";
import Prod1 from "@/components/assets/Prod-1.webp";
import Prod2 from "@/components/assets/Prod-2.webp";
import Prod3 from "@/components/assets/Prod-3.webp";
import Prod4 from "@/components/assets/Prod-4.webp";
import Prod6 from "@/components/assets/prod-6.webp";
import Prod7 from "@/components/assets/Prod-7.webp";
import Prod9 from "@/components/assets/prod-9.webp";
import PermanentAccessSystem from "@/components/assets/Permanent Access System.webp";
import MonorailSuspensionSystems from "@/components/assets/Monorail Suspension Systems.webp";
import MonorailSuspensionSystemsInsta from "@/components/assets/Monorail Suspension Systems Insta.webp";
import PowerSuspendedCradles from "@/components/assets/Power Suspended Cradles.webp";
import FacadeAccessSystem from "@/components/assets/Facade Access System .webp";
import FacadeCleaningServices from "@/components/assets/Facade Cleaning Services.webp";
import FacadeRestoration from "@/components/assets/Facade Restoration.webp";

export const companyName = "Cradleman";
export const companyTagline =
  "Design, Supply, Manufacturing, Installation & Maintenance";
export const siteUrl = "https://cradleman.com";
export const companyDescription =
  "Cradleman designs, supplies, manufactures, installs, and maintains facade access and cleaning systems for commercial and industrial buildings.";

export const contactInfo = {
  email: "info@cradleman.com",
  phone: "+91 90000 00000",
  address: "Cradleman Company, Industrial Area, Mumbai, India",
  officeHours: "Mon – Sat: 9:00 AM – 6:00 PM",
};

export const socialLinks = {
  linkedin: "https://linkedin.com/company/cradleman",
  facebook: "https://facebook.com/cradleman",
  twitter: "https://twitter.com/cradleman",
};

export const services: Service[] = [
  {
    id: "1",
    title: "Facade Access System",
    slug: "facade-access-system",
    description:
      "Design, supply, manufacturing, installation, and maintenance of permanent facade access systems for high-rise and complex building envelopes.",
    shortDescription:
      "Permanent access solutions engineered for safe, reliable facade maintenance.",
    icon: "Building2",
    image: FacadeAccessSystem,
    benefits: [
      "Custom engineered systems for unique facade geometry",
      "Improved worker safety and controlled access at height",
      "Repeatable maintenance access with defined procedures",
      "Compliance-focused design and documentation support",
      "Lifecycle support: inspection, servicing, and upgrades",
    ],
    process: [
      {
        step: 1,
        title: "Site Study & Requirement Capture",
        description:
          "We review building drawings/site conditions and define access requirements and constraints.",
      },
      {
        step: 2,
        title: "Engineering & Design",
        description:
          "We design the system layout, loads, anchorage, and safe operating procedures.",
      },
      {
        step: 3,
        title: "Manufacture & Installation",
        description:
          "Fabrication, installation, commissioning, and functional checks on-site.",
      },
      {
        step: 4,
        title: "Training & Preventive Maintenance",
        description:
          "Operator training plus ongoing inspections, servicing, and spares support.",
      },
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Facade Cleaning Services",
    slug: "glass-facade-cleaning",
    description:
      "Facade cleaning services with safe access planning and trained execution using cradles, platforms, rope access, scaffolding, and cherry pickers.",
    shortDescription:
      "Safe, consistent cleaning programs for glass and mixed facades.",
    icon: "Sparkles",
    image: FacadeCleaningServices,
    benefits: [
      "Improves appearance, tenant experience, and property value",
      "Methods tailored to glass, ACP, stone, and mixed facades",
      "Trained teams for rope access, cradles, and platforms",
      "Safety-first execution with documented procedures",
      "Minimized disruption to occupants and operations",
    ],
    process: [
      {
        step: 1,
        title: "Survey & Method Statement",
        description:
          "We assess height/access and define cleaning method, equipment, and safety controls.",
      },
      {
        step: 2,
        title: "Mobilization",
        description:
          "Team, equipment, and consumables are mobilized with site coordination.",
      },
      {
        step: 3,
        title: "Execution & Quality Checks",
        description:
          "Cleaning is executed with continuous QA and supervisor sign-off.",
      },
      {
        step: 4,
        title: "Reporting & Schedule Optimization",
        description:
          "We provide completion reports and optimize frequency based on site conditions.",
      },
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Facade Restoration",
    slug: "facade-restoration",
    description:
      "Facade inspection and restoration support for commercial buildings—helping you plan safe access and execute repairs with reduced risk.",
    shortDescription:
      "Inspection-led restoration planning with safe access at height.",
    icon: "Wrench",
    image: FacadeRestoration,
    benefits: [
      "Improves building envelope integrity and longevity",
      "Reduces water ingress, corrosion, and material degradation",
      "Supports compliance and safety for high-access work",
      "Access planning for repairs, sealants, and replacement works",
      "Documentation support for facility teams and consultants",
    ],
    process: [
      {
        step: 1,
        title: "Inspection & Findings",
        description:
          "We document issues and define access and risk controls for restoration tasks.",
      },
      {
        step: 2,
        title: "Scope & Planning",
        description:
          "We plan materials, sequencing, and access equipment requirements.",
      },
      {
        step: 3,
        title: "Execution Support",
        description:
          "We support safe execution using appropriate suspended platforms and methods.",
      },
      {
        step: 4,
        title: "Handover & Preventive Plan",
        description:
          "We close out with reports and suggest a preventive maintenance schedule.",
      },
    ],
    featured: true,
  },
  {
    id: "4",
    title: "Temporary & Manual Access Systems",
    slug: "temporary-suspended-platforms",
    description:
      "Temporary and manual access systems for projects, retrofits, and special works with safe configurations for site conditions.",
    shortDescription:
      "Temporary access solutions for time-bound facade work.",
    icon: "HardHat",
    image: MonorailSuspensionSystemsInsta,
    benefits: [
      "Fast deployment for time-bound maintenance or retrofit work",
      "Flexible configurations for difficult-to-reach elevations",
      "Improved safety compared to improvised access methods",
      "Compatible with cleaning, inspection, and restoration tasks",
      "On-site training and operational guidance",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "We assess height, reach, obstructions, and anchor/rigging constraints.",
      },
      {
        step: 2,
        title: "Configuration",
        description:
          "We select platform type, rigging plan, and safety controls.",
      },
      {
        step: 3,
        title: "Deployment",
        description:
          "We deploy equipment, test functionality, and brief site teams.",
      },
      {
        step: 4,
        title: "Support",
        description:
          "We provide on-call support, inspections, and demobilization planning.",
      },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Managing Director",
    role: "Leadership",
    bio: "Leads Cradleman’s mission to deliver safe, reliable, and compliant building maintenance access solutions across projects and portfolios.",
    image: Prod1,
    social: {
      linkedin: "https://linkedin.com/company/cradleman",
    },
  },
  {
    id: "2",
    name: "Engineering Head",
    role: "Design & Engineering",
    bio: "Responsible for engineering, design reviews, documentation, and ensuring project-specific solutions meet operational and safety needs.",
    image: Prod2,
    social: {
      linkedin: "https://linkedin.com/company/cradleman",
    },
  },
  {
    id: "3",
    name: "Projects Lead",
    role: "Installation & Commissioning",
    bio: "Coordinates site execution, commissioning, handover, and operator training with a focus on timeline and quality.",
    image: Prod3,
    social: {
      linkedin: "https://linkedin.com/company/cradleman",
    },
  },
  {
    id: "4",
    name: "Service & Support",
    role: "Preventive Maintenance",
    bio: "Manages inspections, servicing, spares, and annual maintenance programs to keep access systems dependable year-round.",
    image: Prod4,
    social: {
      linkedin: "https://linkedin.com/company/cradleman",
    },
  },
];

// Used by the existing /portfolio routes (we treat these as "Projects / Installations")
export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Permanent Facade Access System for a Commercial Tower",
    slug: "permanent-facade-access-commercial-tower",
    description:
      "Designed and installed a permanent facade access system to support routine cleaning, inspection, and facade maintenance with repeatable, safe access.",
    challenge:
      "The building had complex setbacks and mixed facade materials, making consistent access difficult and increasing time and risk for exterior work.",
    solution:
      "We engineered a permanent access layout with dedicated roof rigging zones and defined operating procedures, followed by commissioning and operator training.",
    results: [
      "Standardized access routes for routine facade work",
      "Improved safety through documented procedures and training",
      "Reduced setup time for cleaning and inspection teams",
      "Better long-term maintainability for the building envelope",
    ],
    image: Prod6,
    client: "Commercial Building Owner",
    technologies: ["Engineering", "Fabrication", "Installation", "Commissioning"],
    services: ["Facade Access System"],
    category: "Facade Access",
    featured: true,
  },
  {
    id: "2",
    title: "Monorail Suspension Retrofit for Curtain Wall Cleaning",
    slug: "monorail-suspension-retrofit",
    description:
      "Retrofitted a monorail suspension system to improve reach and efficiency for glass facade cleaning on multiple elevations.",
    challenge:
      "Existing access methods were slow to mobilize and created inconsistent coverage across the facade, affecting schedule and results.",
    solution:
      "We proposed a monorail approach tailored to facade geometry, coordinated installation with minimal disruption, and delivered operating guidance.",
    results: [
      "Improved coverage across elevations and corners",
      "Faster mobilization for planned cleaning cycles",
      "Reduced disruption to building operations",
      "Easier long-term scheduling for facility teams",
    ],
    image: Prod7,
    client: "Facility Management Team",
    technologies: ["Retrofit Planning", "Installation", "QA"],
    services: ["Glass Facade Cleaning", "Facade Access System"],
    category: "Retrofit",
    featured: true,
  },
  {
    id: "3",
    title: "Temporary Suspended Platform for Facade Restoration Works",
    slug: "temporary-suspended-platform-facade-restoration",
    description:
      "Deployed a temporary suspended platform solution to support time-bound restoration work with safe access and on-site support.",
    challenge:
      "Restoration activities required flexible access around obstructions with a short turnaround time and strict safety requirements.",
    solution:
      "We configured a temporary suspended platform plan, performed functional checks, trained site teams, and supported daily operations.",
    results: [
      "Timely access for restoration scope and inspections",
      "Safer working method compared to improvised access",
      "Clear daily checklists and operator guidance",
      "Smooth demobilization at project completion",
    ],
    image: Prod9,
    client: "Construction Contractor",
    technologies: ["Rigging Plan", "Deployment", "Training"],
    services: ["Temporary Suspended Platforms", "Facade Restoration"],
    category: "Temporary Access",
    featured: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Facility Manager",
    role: "Commercial Buildings",
    company: "Property Management Group",
    image: Prod1,
    quote:
      "Cradleman helped us standardize safe access for facade work. Their team was responsive, and the handover documentation made operations smooth.",
    rating: 5,
  },
  {
    id: "2",
    name: "Project Director",
    role: "Construction",
    company: "General Contractor",
    image: Prod2,
    quote:
      "The temporary suspended platform solution met our tight schedule. Safety briefings and on-site support were excellent.",
    rating: 5,
  },
  {
    id: "3",
    name: "Operations Head",
    role: "Industrial Facility",
    company: "Manufacturing Campus",
    image: Prod3,
    quote:
      "We needed reliable access for inspection and cleaning across multiple elevations. Cradleman delivered a robust solution with clear SOPs.",
    rating: 5,
  },
];

// Used by the existing /blog routes (we treat these as "Insights")
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Standardize Exterior Building Maintenance Programs",
    slug: "standardize-exterior-building-maintenance-programs",
    excerpt:
      "A practical approach to consistent quality: defined scopes, repeatable processes, and measurable checks for facade cleaning and access operations.",
    content:
      "A consistent exterior maintenance program starts with clear scope, access planning, safety controls, and QA checklists. Standard operating procedures reduce variability and help teams deliver predictable outcomes across different elevations and facade materials.",
    author: {
      name: "Cradleman Team",
      image: Prod4,
    },
    publishedAt: "2025-10-15",
    image: Prod6,
    category: "Commercial Buildings",
    tags: ["Maintenance", "Quality", "Operations"],
    readingTime: 6,
    featured: true,
  },
  {
    id: "2",
    title: "Choosing the Right Facade Access System for Your Building",
    slug: "choosing-the-right-facade-access-system",
    excerpt:
      "Key factors to consider: geometry, reach, obstructions, maintenance frequency, safety controls, and lifecycle support.",
    content:
      "Selecting a facade access system is about matching building geometry and operational needs. Consider reach, setbacks, parapets, anchorage, maintenance frequency, training, and preventive maintenance plans to keep the system reliable over time.",
    author: {
      name: "Engineering Desk",
      image: Prod2,
    },
    publishedAt: "2025-09-20",
    image: Prod7,
    category: "Facade Access",
    tags: ["Facade Access", "Safety", "Design"],
    readingTime: 7,
    featured: true,
  },
  {
    id: "3",
    title: "Preventive Maintenance for Suspended Platforms: What to Track",
    slug: "preventive-maintenance-for-suspended-platforms",
    excerpt:
      "Downtime prevention comes from planned inspections, documented checks, and timely servicing—here’s a checklist-driven way to run it.",
    content:
      "Preventive maintenance reduces unplanned downtime. Track inspection frequency, daily checks, load ratings, wire ropes, braking systems, electrical controls (if powered), and documentation so site teams can operate confidently.",
    author: {
      name: "Service & Support",
      image: Prod3,
    },
    publishedAt: "2025-08-28",
    image: Prod9,
    category: "Safety & Reliability",
    tags: ["Maintenance", "Safety", "Reliability"],
    readingTime: 6,
    featured: true,
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What does Cradleman do?",
    answer:
      "Cradleman designs, manufactures, supplies, installs, and maintains building maintenance solutions including facade access systems and suspended platforms for commercial and industrial buildings.",
    category: "general",
  },
  {
    id: "2",
    question: "How do we start a project?",
    answer:
      "We begin with drawings/site study, then finalize engineering, provide a proposal, and proceed to manufacturing, installation, commissioning, and operator training.",
    category: "process",
  },
  {
    id: "3",
    question: "What is your pricing model?",
    answer:
      "Pricing depends on site conditions, access requirements, and system configuration. Share your drawings and scope for a customized estimate.",
    category: "pricing",
  },
  {
    id: "4",
    question: "What building types do you serve?",
    answer:
      "We support commercial buildings, mixed-use towers, industrial facilities, campuses, hotels, hospitals, and other properties that require safe access for facade work.",
    category: "general",
  },
  {
    id: "5",
    question: "Do you provide installation and maintenance?",
    answer:
      "Yes. We provide end-to-end support: supply, installation, commissioning, training, inspection, servicing, and annual maintenance programs.",
    category: "services",
  },
  {
    id: "6",
    question: "How do you ensure project quality?",
    answer:
      "We follow standardized processes, on-site QA checks, commissioning protocols, and documentation-driven handover to ensure consistent results.",
    category: "process",
  },
  {
    id: "7",
    question: "Can you upgrade or service existing systems?",
    answer:
      "Yes. We can inspect existing equipment, recommend corrective actions, provide spares, and propose upgrades to improve safety and reliability.",
    category: "services",
  },
  {
    id: "8",
    question: "What is your development process?",
    answer:
      "We follow a structured project lifecycle: study → design → manufacture → install → commission → train → maintain, with clear milestones and reporting.",
    category: "process",
  },
  {
    id: "9",
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer preventive maintenance plans, inspections, servicing, and on-call support to keep your access systems operating reliably.",
    category: "services",
  },
  {
    id: "10",
    question: "How do you approach safety and compliance?",
    answer:
      "Safety is central to our approach. We emphasize method statements, risk controls, training, and documentation to support safe operations at height.",
    category: "general",
  },
];

export const companyStats: CompanyStats[] = [
  { label: "Years of Experience", value: 20, suffix: "+" },
  { label: "Projects Supported", value: 500, suffix: "+" },
  { label: "Installations", value: 250, suffix: "+" },
  { label: "Maintenance Programs", value: 100, suffix: "+" },
];

export const products: Product[] = [
  {
    id: "p1",
    title: "Permanent Access System",
    slug: "permanent-access",
    shortDescription:
      "Permanent facade access solutions engineered for safe, repeatable building maintenance.",
    description:
      "Permanent access systems provide reliable, controlled access to building exteriors for ongoing cleaning, inspection, repairs, and restoration. Cradleman supports the full lifecycle—from engineering and manufacturing to installation, commissioning, training, and preventive maintenance.",
    features: [
      "Custom engineered layouts for unique building geometry",
      "Defined operating procedures and safe access planning",
      "Documentation-driven handover for facility teams",
      "Planned inspections, servicing, and spares support",
    ],
    specifications: [
      { label: "System type", value: "Permanent facade access solution" },
      { label: "Use cases", value: "Cleaning, inspection, restoration" },
      { label: "Support", value: "Commissioning, training, AMC" },
    ],
    applications: [
      "Commercial towers",
      "Mixed-use developments",
      "Hospitals & institutional buildings",
      "Hotels & hospitality",
    ],
    images: [PermanentAccessSystem],
    brochureLabel: "Request brochure",
    brochureHref: "/downloads",
    featured: true,
  },
  {
    id: "p2",
    title: "Monorail Suspension Systems",
    slug: "monorail-suspension",
    shortDescription:
      "Monorail solutions designed to improve reach, coverage, and repeatability across elevations.",
    description:
      "Monorail suspension systems help teams cover complex elevations and corners with consistent access. Ideal for buildings where repeatable facade maintenance is required and site constraints demand reliable travel paths.",
    features: [
      "Improved coverage across elevations and setbacks",
      "Optimized travel path for repeatable maintenance cycles",
      "Retrofit-friendly planning (site dependent)",
      "Commissioning and operating guidance",
    ],
    specifications: [
      { label: "System type", value: "Monorail suspension system" },
      { label: "Best for", value: "Curtain walls & complex facades" },
      { label: "Lifecycle", value: "Installation + service programs" },
    ],
    applications: [
      "Curtain wall cleaning programs",
      "Facade inspection routes",
      "Multi-elevation buildings",
      "Retrofit scenarios (after assessment)",
    ],
    images: [MonorailSuspensionSystems],
    brochureLabel: "Request brochure",
    brochureHref: "/downloads",
    featured: true,
  },
  {
    id: "p3",
    title: "Power Suspended Cradles",
    slug: "power-suspended-cradles",
    shortDescription:
      "Powered suspended platforms for efficient high-access operations with safety-first controls.",
    description:
      "Power suspended cradles provide dependable access for maintenance teams working at height. Cradleman supports selection, deployment, training, inspections, and service planning to keep uptime high and risk low.",
    features: [
      "Efficient access for routine maintenance tasks",
      "Operational guidance and training for site teams",
      "Preventive maintenance plans for reliability",
      "Support for upgrades, spares, and servicing",
    ],
    specifications: [
      { label: "System type", value: "Powered suspended platform" },
      { label: "Operations", value: "Planned cleaning & inspection" },
      { label: "Service model", value: "Inspection + AMC available" },
    ],
    applications: [
      "Facade cleaning and upkeep",
      "Repair support at height",
      "Envelope inspections",
      "Restoration workflows",
    ],
    images: [PowerSuspendedCradles],
    brochureLabel: "Request brochure",
    brochureHref: "/downloads",
    featured: true,
  },
  {
    id: "p4",
    title: "Temporary & Manual Access Systems",
    slug: "temporary-manual-access",
    shortDescription:
      "Temporary access solutions for projects, retrofits, and special works.",
    description:
      "Temporary & manual access systems are ideal for time-bound projects and special works. We assess site constraints, configure safe access methods, deploy equipment, and support operations through completion.",
    features: [
      "Fast deployment for time-bound work",
      "Flexible configurations around obstructions",
      "On-site briefing and daily check guidance",
      "Support through demobilization",
    ],
    specifications: [
      { label: "System type", value: "Temporary access solution" },
      { label: "Use cases", value: "Projects, retrofits, special works" },
      { label: "Support", value: "Deployment + on-call assistance" },
    ],
    applications: [
      "Facade restoration campaigns",
      "Inspection projects",
      "Retrofit works",
      "Short-term maintenance windows",
    ],
    images: [Prod4],
    brochureLabel: "Request brochure",
    brochureHref: "/downloads",
  },
];

export const clients: Client[] = [
  {
    id: "c1",
    name: "Larsen & Toubro",
    industry: "Construction",
    featured: true,
  },
  { id: "c2", name: "Sheth Developers", industry: "Real Estate" },
  {
    id: "c3",
    name: "InterContinental Hotel The Lalit",
    industry: "Hospitality",
  },
  { id: "c4", name: "Commercial Building Owners", industry: "Real Estate" },
  { id: "c5", name: "Facility Management Teams", industry: "Facilities" },
  { id: "c6", name: "General Contractors", industry: "Construction" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Window Cleaning",
    category: "Products",
    image: PermanentAccessSystem,
  },
  {
    id: "g2",
    title: "Spider Cleaning Method",
    category: "Products",
    image: MonorailSuspensionSystems,
  },
  {
    id: "g3",
    title: "Spider Cleaning Method",
    category: "Products",
    image: PowerSuspendedCradles,
  },
  {
    id: "g4",
    title: "Access with Cherry Picker",
    category: "Products",
    image: MonorailSuspensionSystemsInsta,
  },
  {
    id: "g5",
    title: "Cleaning with 1.25 m Cradle",
    category: "Installations",
    image: Prod6,
  },
  {
    id: "g6",
    title: "Cleaning with 2 m Cradle",
    category: "Projects",
    image: Prod7,
  },
  {
    id: "g7",
    title: "Harness and Safety Systems",
    category: "Projects",
    image: Prod9,
  },
  {
    id: "g8",
    title: "Eye Bolt Suspension System",
    category: "Installations",
    image: Prod6,
  },
];

export const downloads: DownloadItem[] = [
  {
    id: "d1",
    title: "Cradleman Product Catalog",
    category: "Catalogs",
    description: "Overview of core products and solution categories.",
    requestOnly: true,
  },
  {
    id: "d2",
    title: "Permanent Access System – Brochure",
    category: "Brochures",
    description: "Features, applications, and lifecycle support model.",
    requestOnly: true,
  },
  {
    id: "d3",
    title: "Monorail Suspension Systems – Brochure",
    category: "Brochures",
    requestOnly: true,
  },
  {
    id: "d4",
    title: "Power Suspended Cradles – Technical Overview",
    category: "Technical",
    requestOnly: true,
  },
  {
    id: "d5",
    title: "Certificates & Compliance Documents",
    category: "Certificates",
    requestOnly: true,
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: "j1",
    title: "Project Engineer – Installation & Commissioning",
    department: "Projects",
    location: "Mumbai, India",
    type: "Full-time",
    summary:
      "Own site execution, commissioning, and handover documentation for facade access and suspended platform projects.",
    responsibilities: [
      "Coordinate site teams, schedules, and safety controls",
      "Support commissioning checks and handover documentation",
      "Coordinate with engineering for site constraints and changes",
      "Maintain quality checklists and completion reports",
    ],
    requirements: [
      "Engineering background (preferred) with site execution experience",
      "Comfortable working on construction/operational sites",
      "Strong documentation and stakeholder communication",
    ],
  },
  {
    id: "j2",
    title: "Service Technician – Preventive Maintenance",
    department: "Service",
    location: "Mumbai, India",
    type: "Full-time",
    summary:
      "Perform inspections, servicing, and preventive maintenance for installed facade access systems and platforms.",
    responsibilities: [
      "Execute scheduled inspections and service visits",
      "Report findings, corrective actions, and spares needs",
      "Support clients with safe operating guidance",
      "Maintain service records and checklists",
    ],
    requirements: [
      "Hands-on maintenance experience (industrial or construction preferred)",
      "Comfortable working at height with safety procedures",
      "Strong attention to detail and reporting",
    ],
  },
];


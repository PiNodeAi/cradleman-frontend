import type { StaticImageData } from "next/image";

export type ImageSource = string | StaticImageData;

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image?: ImageSource;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: ImageSource;
  client: string;
  clientTestimonial?: {
    name: string;
    role: string;
    quote: string;
  };
  technologies: string[];
  services: string[];
  category: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: ImageSource;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: ImageSource;
  };
  publishedAt: string;
  image: ImageSource;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: ImageSource;
  quote: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "process";
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
}

export interface CompanyStats {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  images: ImageSource[];
  brochureLabel?: string;
  brochureHref?: string;
  featured?: boolean;
}

export interface Client {
  id: string;
  name: string;
  industry?: string;
  location?: string;
  logo?: ImageSource;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Products" | "Projects" | "Installations";
  image: ImageSource;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: "Catalogs" | "Brochures" | "Technical" | "Certificates";
  description?: string;
  href?: string;
  requestOnly?: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  summary: string;
  responsibilities: string[];
  requirements: string[];
}


export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface TimelineEvent {
  id: number;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  thumbnail: string;
  link: string;
}

export interface PortfolioData {
  fullName: string;
  jobTitle: string;
  tagline: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram?: string;
  discord?: string;
  projects: Project[];
  skills: Skill[];
  timeline: TimelineEvent[];
  certificates: Certificate[];
}
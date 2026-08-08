// export interface PersonalInfo {
//   name: string;
//   title: string;
//   email: string;
//   phone: string;
//   location: string;
//   linkedin: string;
//  
//   heroTitle: string;
//   heroSubtitle: string;
//   heroDescription: string;
//   about: string;
// }

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  heroTitle: string;
  heroSubtitle?: string; 
  heroDescription: string;
  about: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  repoLink: string;
  liveLink: string;
}

export interface Experience {
  id: number;
  role: string;
  organization: string;
  location: string;
  duration: string;
  bullets: string[];
}

export interface Education {
  id: number;
  institution: string;
  location: string;
  degree: string;
  detail: string;
  duration: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: string[]; // Note: Skills is now a simple string array
  projects: Project[];
  experience: Experience[];
  education: Education[];
}
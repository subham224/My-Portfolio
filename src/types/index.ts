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

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: string[]; // Note: Skills is now a simple string array
  projects: Project[];
}
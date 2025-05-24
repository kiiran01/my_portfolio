export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tools: string[];
  demoLink?: string;
  githubLink?: string;
  featured: boolean;
}

export type ProjectCategory = 'dashboard' | 'machine-learning' | 'data-visualization' | 'analysis';

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export type SkillCategory = 'programming' | 'data-analysis' | 'visualization' | 'database' | 'tools';

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
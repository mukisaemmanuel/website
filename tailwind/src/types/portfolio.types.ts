export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools" | "other";
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  resume?: string;
}

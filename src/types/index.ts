export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  image?: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
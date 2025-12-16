import { 
  Code, 
  Megaphone, 
  Server, 
  ShieldCheck, 
  Linkedin, 
  Twitter, 
  Github, 
  Mail,
  Cpu,
  BarChart,
  Layout
} from 'lucide-react';
import { Service, Project, SocialLink } from './types';

export const OWNER_NAME = "Newaz Ahmed";
export const TAGLINE = "Elevating Business Efficiency through Technology & Strategy";
export const HERO_DESCRIPTION = "I bridge the gap between complex technology and business growth. From custom web development to strategic digital marketing and secure IT administration.";

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom, high-performance websites built with React, Next.js, and modern CSS frameworks.',
    icon: Code,
    features: ['Single Page Applications', 'E-commerce Solutions', 'Performance Optimization']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to increase your online presence and convert traffic into customers.',
    icon: Megaphone,
    features: ['SEO & SEM', 'Social Media Management', 'Content Strategy']
  },
  {
    id: 'it-service',
    title: 'IT Services',
    description: 'Comprehensive IT support and infrastructure management for small to medium businesses.',
    icon: Server,
    features: ['Network Setup', 'Hardware Maintenance', 'Helpdesk Support']
  },
  {
    id: 'google-admin',
    title: 'Google Admin Assistant',
    description: 'Expert management of Google Workspace environments for enhanced productivity and security.',
    icon: ShieldCheck,
    features: ['Workspace Security', 'User Management', 'Data Migration']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'E-Commerce Dashboard',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    description: 'A full-featured analytics dashboard for online retailers.'
  },
  {
    id: 'p2',
    title: 'TechCorp Branding',
    category: 'Digital Marketing',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    description: 'Complete rebranding and SEO campaign resulting in 200% growth.'
  },
  {
    id: 'p3',
    title: 'Cloud Migration',
    category: 'IT Service',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    description: 'Seamless migration of on-premise servers to Google Cloud Platform.'
  },
  {
    id: 'p4',
    title: 'Workspace Secure',
    category: 'Google Admin',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    description: 'Implementation of advanced security protocols for a remote team.'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: '#', icon: Linkedin },
  { name: 'GitHub', url: '#', icon: Github },
  { name: 'Twitter', url: '#', icon: Twitter },
  { name: 'Email', url: 'mailto:contact@newazahmed.com', icon: Mail },
];

export const SYSTEM_INSTRUCTION = `You are an AI assistant for Newaz Ahmed's portfolio website. 
Newaz is a Web Developer, Digital Marketing Specialist, IT Service Provider, and Google Administrator Assistant.
Your goal is to answer visitor questions about Newaz's skills, services, and experience.
Be professional, concise, and enthusiastic.
If asked about booking, direct them to the contact form section.
Key skills: React, TypeScript, SEO, Google Workspace, IT Support.
Do not make up specific past employment details if not provided, just talk generally about his expertise in the fields listed.`;
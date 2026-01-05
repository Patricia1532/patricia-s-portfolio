
import { Project, Certificate, TechItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Redesign',
    description: 'Complete overhaul of a retail platform focusing on improving conversion rates through streamlined checkout flows.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['UX/UI', 'Figma'],
    link: '#',
    badge: 'Coming Soon'
  },
  {
    id: '2',
    title: 'Finance Dashboard',
    description: 'High-performance analytics dashboard featuring real-time data visualization and deep financial insights.',
    image: 'https://picsum.photos/seed/finance/800/600',
    tags: ['Frontend', 'React'],
    link: '#',
    badge: 'Coming Soon'
  },
  {
    id: '3',
    title: 'Wanderlust App',
    description: 'Cross-platform travel planner allowing users to create itineraries and discover local hidden gems.',
    image: 'https://picsum.photos/seed/travel/800/600',
    tags: ['Mobile', 'Flutter'],
    link: '#'
  },
  {
    id: '4',
    title: 'TaskMaster',
    description: 'A clean, intuitive task management tool for remote teams featuring real-time collaboration.',
    image: 'https://picsum.photos/seed/task/800/600',
    tags: ['Productivity', 'Vue.js'],
    link: '#'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'c1',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Coursera - Google',
    year: '2023',
    link: '#',
    icon: 'school'
  },
  {
    id: 'c2',
    title: 'Meta Frontend Developer Certificate',
    issuer: 'Coursera - Meta',
    year: '2022',
    link: '#',
    icon: 'code'
  },
  {
    id: 'c3',
    title: 'UI/UX Design Specialization',
    issuer: 'California Institute of the Arts',
    year: '2021',
    link: '#',
    icon: 'brush'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'HTML5', icon: 'html', color: 'text-orange-600' },
  { name: 'CSS3', icon: 'css', color: 'text-blue-600' },
  { name: 'JavaScript', icon: 'javascript', color: 'text-yellow-500' },
  { name: 'React', icon: 'code_blocks', color: 'text-cyan-500' },
  { name: 'Tailwind CSS', icon: 'brush', color: 'text-teal-500' },
  { name: 'Node.js', icon: 'terminal', color: 'text-green-600' },
  { name: 'Firebase', icon: 'database', color: 'text-orange-400' },
  { name: 'Bootstrap', icon: 'grid_view', color: 'text-purple-600' },
  { name: 'Material UI', icon: 'widgets', color: 'text-blue-500' },
  { name: 'Vite', icon: 'bolt', color: 'text-yellow-400' }
];
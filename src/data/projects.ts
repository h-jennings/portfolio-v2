import { ProjectPaths } from '@/models/paths';
interface Preview {
  src: string;
  height: number;
  width: number;
}

export interface Project {
  name: string;
  role: string;
  path: string;
  preview: Preview;
  year: number;
  externalLink?: string;
}

export type Projects = Project[];

export const projects: Projects = [
  {
    name: 'Department of Defense',
    role: 'Development',
    year: 2020,
    path: ProjectPaths.dod.toString(),
    preview: {
      src: '/images/f35/f35-devices-images.jpg',
      width: 1450,
      height: 816,
    },
  },
  {
    name: 'Caffeinator',
    role: 'Design & Development',
    year: 2019,
    path: ProjectPaths.caffeinator.toString(),
    externalLink: 'https://caffeinator.vercel.app/',
    preview: {
      src: '/images/caffeinator/caffeinator-image-3.png',
      width: 1450,
      height: 1160,
    },
  },
  {
    name: 'Portfolio - V1',
    role: 'Design & Development',
    year: 2019,
    path: ProjectPaths.portfolioV1.toString(),
    externalLink: 'https://v1.hunterjennings.dev/',
    preview: {
      src: '/images/portfolio-v1/portfolio-v1-mobile-images.jpg',
      width: 1450,
      height: 1160,
    },
  },
];

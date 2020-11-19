import { ProjectPaths } from '@/models/paths';
interface Preview {
  src: string;
  height: number;
  width: number;
}
export interface Project {
  name: string;
  path: string;
  preview: Preview;
}

export type Projects = Project[];

export const projects: Projects = [
  {
    name: 'Caffeinator',
    path: ProjectPaths.caffeinator.toString(),
    preview: {
      src: '/images/caffeinator/caffeinator-image-1.png',
      width: 1450,
      height: 816,
    },
  },
  {
    name: 'Portfolio - V1',
    path: ProjectPaths.portfolioV1.toString(),
    preview: {
      src: '/images/portfolio-v1/portfolio-v1-mobile-images.jpg',
      width: 1450,
      height: 1160,
    },
  },
];

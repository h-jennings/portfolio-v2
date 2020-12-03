import { Project, Projects } from '@/data/projects';

const getNextProject = (
  projects: Projects,
  current: Project,
): Project | null => {
  if (!current) return null;

  const currentProjectIndex = projects.findIndex(
    (project) => project.path === current.path,
  );

  const nextProject = projects[currentProjectIndex + 1];

  return nextProject ? nextProject : null;
};

const getPreviousProject = (
  projects: Projects,
  current: Project,
): Project | null => {
  if (!current) return null;

  const currentProjectIndex = projects.findIndex(
    (project) => project.path === current.path,
  );

  const prevProject = projects[currentProjectIndex - 1];

  return prevProject ? prevProject : null;
};

const getCurrentProject = (projects: Projects, path: string): Project => {
  const currentProject = projects.filter((project) => project.path === path)[0];
  return currentProject;
};

export { getCurrentProject, getNextProject, getPreviousProject };

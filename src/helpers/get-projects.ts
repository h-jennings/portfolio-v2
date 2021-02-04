import { isProject, Project, Projects } from '@/data/projects';

const getNextProject = (
  projects: Projects,
  current: Project | null,
): Project | null => {
  if (current == null) return null;

  const currentProjectIndex = projects.findIndex(
    (project) => project.path === current.path,
  );

  const nextProject = projects[currentProjectIndex + 1];

  return isProject(nextProject) ? nextProject : null;
};

const getPreviousProject = (
  projects: Projects,
  current: Project | null,
): Project | null => {
  if (current == null) return null;

  const currentProjectIndex = projects.findIndex(
    (project) => project.path === current.path,
  );

  const previousProject = projects[currentProjectIndex - 1];

  return isProject(previousProject) ? previousProject : null;
};

const getCurrentProject = (
  projects: Projects,
  path: string,
): Project | null => {
  const currentProject = projects.filter((project) => project.path === path)[0];
  return isProject(currentProject) ? currentProject : null;
};

export { getCurrentProject, getNextProject, getPreviousProject };

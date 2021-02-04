import React from 'react';

import { Project, Projects } from '@/data/projects';

import {
  getCurrentProject,
  getNextProject,
  getPreviousProject,
} from './get-projects';

type ProjectOrNull = Project | null;

export function useProjects(
  projects: Projects,
  pathname: string,
): {
  currentProject: ProjectOrNull;
  nextProject: ProjectOrNull;
  previousProject: ProjectOrNull;
} {
  const currentProject = React.useMemo(
    () => getCurrentProject(projects, pathname),
    [projects, pathname],
  );

  const { nextProject, previousProject } = React.useMemo(() => {
    return {
      nextProject: getNextProject(projects, currentProject),
      previousProject: getPreviousProject(projects, currentProject),
    };
  }, [projects, currentProject]);

  return {
    currentProject,
    nextProject,
    previousProject,
  };
}

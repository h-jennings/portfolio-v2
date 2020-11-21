import { useRouter } from 'next/router';
import React from 'react';

import { FullscreenLink } from '@/components/FullscreenLink/FullscreenLink';
import { projects } from '@/data/projects';
import { getCurrentProject, getNextProject } from '@/helpers/get-projects';

export const ProjectLayout: React.FC = ({ children }) => {
  const { pathname } = useRouter();
  const currentProject = React.useMemo(
    () => getCurrentProject(projects, pathname),
    [pathname],
  );
  const nextProject = React.useMemo(
    () => getNextProject(projects, currentProject),
    [currentProject],
  );
  return (
    <>
      {children}
      {nextProject ? (
        <FullscreenLink
          cta='Explore next project'
          href={nextProject.path}
          title={nextProject.name}
          imageWidth={nextProject.preview.width}
          imageHeight={nextProject.preview.height}
          alt='Picture of me'
          src={nextProject.preview.src}
        />
      ) : null}
    </>
  );
};

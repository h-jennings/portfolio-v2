import classnames from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

import { FullscreenLink } from '@/components/FullscreenLink/FullscreenLink';
import { RevealBox } from '@/components/RevealBox/RevealBox';
import { projects } from '@/data/projects';
import { getCurrentProject, getNextProject } from '@/helpers/get-projects';

import { WithPageAnimation } from '../WithPageAnimation/WithPageAnimation';
import styles from './ProjectLayout.module.scss';

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
    <WithPageAnimation>
      <div className={classnames({ [styles.pagePad]: !nextProject })}>
        {children}
        {nextProject ? (
          <RevealBox>
            <FullscreenLink
              cta='Explore next project'
              href={nextProject.path}
              title={nextProject.name}
              imageWidth={nextProject.preview.width}
              imageHeight={nextProject.preview.height}
              alt='Picture of me'
              src={nextProject.preview.src}
            />
          </RevealBox>
        ) : null}
      </div>
    </WithPageAnimation>
  );
};

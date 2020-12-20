import classnames from 'classnames';

import { Project } from '@/data/projects';

import { LinkWithPageTransition } from '../LinkWithPageTransition/LinkWithPageTransition';
import styles from './ProjectNavigationLinks.module.scss';

interface ProjectNavigationLinksProps {
  next: Project | null;
  previous: Project | null;
}

export const ProjectNavigationLinks: React.FC<ProjectNavigationLinksProps> = ({
  next,
  previous,
}) => {
  return (
    <ul className={classnames('space-y-xsm', styles.container)}>
      {previous ? (
        <li>
          <LinkWithPageTransition
            route={previous.path}
            className='underline-effect'>
            Previous Project
          </LinkWithPageTransition>
        </li>
      ) : null}
      {next ? (
        <li>
          <LinkWithPageTransition
            route={next.path}
            className='underline-effect'>
            Next Project
          </LinkWithPageTransition>
        </li>
      ) : null}
    </ul>
  );
};

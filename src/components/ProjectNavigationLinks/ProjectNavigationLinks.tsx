import classnames from 'classnames';
import Link from 'next/link';

import { Project } from '@/data/projects';

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
    <ul className={classnames(['space-y-xsm', styles.container])}>
      {previous ? (
        <li>
          <Link scroll={false} href={previous.path}>
            <a className='underline-effect'>Previous Project</a>
          </Link>
        </li>
      ) : null}
      {next ? (
        <li>
          <Link scroll={false} href={next.path}>
            <a className='underline-effect'>Next Project</a>
          </Link>
        </li>
      ) : null}
    </ul>
  );
};

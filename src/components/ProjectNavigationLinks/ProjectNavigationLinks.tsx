import classnames from 'classnames';
import Link from 'next/link';

import { useMenuDrawer } from '@/context/menu-drawer';
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
  const { dispatch } = useMenuDrawer();
  return (
    <ul className={classnames(['space-y-xsm', styles.container])}>
      {previous ? (
        <li>
          <Link href={previous.path}>
            <a className='underline-effect'>Previous Project</a>
          </Link>
        </li>
      ) : null}
      {next ? (
        <li>
          <Link href={next.path}>
            <a className='underline-effect'>Next Project</a>
          </Link>
        </li>
      ) : null}
      <li>
        <button
          className='underline-effect button-reset pointer'
          onClick={() => dispatch({ type: 'OPEN' })}>
          All Projects
        </button>
      </li>
    </ul>
  );
};

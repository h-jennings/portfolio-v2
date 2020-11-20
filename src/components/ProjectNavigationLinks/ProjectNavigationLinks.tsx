import { Paths } from '@/models/paths';
import Link from 'next/link';
import styles from './ProjectNavigationLinks.module.scss';
import classnames from 'classnames';
import { Project } from '@/data/projects';

type ProjectNavigationLinksProps = {
  next: Project | null;
  previous: Project | null;
};

export const ProjectNavigationLinks: React.FC<ProjectNavigationLinksProps> = ({
  next,
  previous,
}) => {
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
        <Link href={Paths.work}>
          <a className='underline-effect'>All Projects</a>
        </Link>
      </li>
    </ul>
  );
};

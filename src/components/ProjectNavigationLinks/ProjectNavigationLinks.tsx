import { Paths } from '@/models/paths';
import Link from 'next/link';
import styles from './ProjectNavigationLinks.module.scss';
import classnames from 'classnames';

export const ProjectNavigationLinks: React.FC = () => {
  return (
    <ul className={classnames(['space-y-xsm w-full', styles.container])}>
      <li>
        <a className='underline-effect'>Previous Project</a>
      </li>
      <li>
        <a className='underline-effect'>Next Project</a>
      </li>
      <li>
        <Link href={Paths.work}>
          <a className='underline-effect'>All Projects</a>
        </Link>
      </li>
    </ul>
  );
};

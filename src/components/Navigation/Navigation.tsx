import Link from 'next/link';
import classnames from 'classnames';

import styles from './Navigation.module.scss';
import { Paths } from '@/models/paths';

export const Navigation: React.FC = () => {
  return (
    <nav>
      <div className={classnames(['d-flex flx-j-sb'])}>
        <Link href={Paths.home}>
          <a className={classnames([styles.home])}>home</a>
        </Link>
        <div className={classnames(['d-flex space-x-xl'])}>
          <Link href={Paths.work}>
            <a>work</a>
          </Link>
          <Link href={Paths.about}>
            <a>about</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

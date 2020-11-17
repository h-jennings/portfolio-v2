import classnames from 'classnames';
import styles from './MobileNavigation.module.scss';
import { ReactComponent as MenuIcon } from '@assets/svg/mobile-menu.svg';

export const MobileNavigation: React.FC = () => {
  return (
    <nav className={classnames([styles.container])}>
      <button className={styles.icon}>
        <MenuIcon />
      </button>
    </nav>
  );
};

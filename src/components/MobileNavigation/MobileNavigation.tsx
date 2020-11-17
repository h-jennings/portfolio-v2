import Link from 'next/link';
import classnames from 'classnames';
import styles from './MobileNavigation.module.scss';
import { ReactComponent as MenuIcon } from '@assets/svg/mobile-menu.svg';
import { SvgContainer } from '@components/SvgContainer/SvgContainer';
import { Paths } from '@/models/paths';
import { ReactComponent as HomeIcon } from '@assets/svg/home-icon.svg';

export const MobileNavigation: React.FC = () => {
  return (
    <nav className={classnames([styles.container])}>
      <Link href={Paths.home}>
        <a aria-label='home' className={classnames([styles.home])}>
          <SvgContainer svgWidth={24} svgHeight={24}>
            <HomeIcon className={styles.icon} title='home icon' />
          </SvgContainer>
        </a>
      </Link>
      <button className={styles.menu}>
        <SvgContainer svgWidth={48} svgHeight={8}>
          <MenuIcon className={styles.icon} />
        </SvgContainer>
      </button>
    </nav>
  );
};

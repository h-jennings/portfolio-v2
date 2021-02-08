import { useMenuDrawer } from '@/context/menu-drawer';
import { Paths } from '@/models/paths';
import { ReactComponent as HomeIcon } from '@assets/svg/home-icon.svg';
import { ReactComponent as MenuIcon } from '@assets/svg/mobile-menu.svg';
import { SvgContainer } from '@components/SvgContainer/SvgContainer';
import classnames from 'classnames';
import { LinkWithPageTransition } from '../LinkWithPageTransition/LinkWithPageTransition';
import styles from './MobileNavigation.module.scss';

export const MobileNavigation: React.FC = () => {
  const { dispatch } = useMenuDrawer();

  return (
    <>
      <nav className={classnames(styles.container)}>
        <LinkWithPageTransition
          aria-label='home'
          className={classnames(styles.home)}
          route={Paths.home}
        >
          <SvgContainer svgWidth={24} svgHeight={24}>
            <HomeIcon className={styles.icon} title='home icon' />
          </SvgContainer>
        </LinkWithPageTransition>
        <button
          className={styles.menu}
          onClick={() => dispatch({ type: 'OPEN' })}
        >
          <SvgContainer svgWidth={48} svgHeight={8}>
            <MenuIcon className={styles.icon} />
          </SvgContainer>
        </button>
      </nav>
    </>
  );
};

import { ReactComponent as HomeIcon } from '@assets/svg/home-icon.svg';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Paths } from '@/models/paths';

import { LinkWithPageTransition } from '../LinkWithPageTransition/LinkWithPageTransition';
import { SvgContainer } from '../SvgContainer/SvgContainer';
import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav
      aria-label='primary-navigation'
      className={classnames([
        'w-full d-flex flx-j-c z-over',
        styles.navContainer,
      ])}>
      <div
        className={classnames([
          'd-flex flx-j-sb p-y-xl w-full w-max-xl',
          styles.wrapper,
        ])}>
        <Link scroll={pathname === Paths.home ? true : false} href={Paths.home}>
          <a aria-label='home' className={classnames([styles.home])}>
            <SvgContainer svgWidth={24} svgHeight={24}>
              <HomeIcon className={styles.icon} title='home icon' />
            </SvgContainer>
          </a>
        </Link>
        <div>
          <div className={classnames(['d-flex space-x-xl'])}>
            <LinkWithPageTransition route={Paths.about}>
              about
            </LinkWithPageTransition>
          </div>
        </div>
      </div>
    </nav>
  );
};

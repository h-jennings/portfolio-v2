import { Paths } from '@/models/paths';
import { ReactComponent as HomeIcon } from '@assets/svg/home-icon.svg';
import classnames from 'classnames';
import { LinkWithPageTransition } from '../LinkWithPageTransition/LinkWithPageTransition';
import { SvgContainer } from '../SvgContainer/SvgContainer';
import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  return (
    <nav
      aria-label='primary-navigation'
      className={classnames(
        'w-full d-flex flx-j-c z-over',
        styles.navContainer,
      )}>
      <div
        className={classnames(
          'd-flex flx-j-sb p-y-xl w-full w-max-xl',
          styles.wrapper,
        )}>
        <LinkWithPageTransition
          aria-label='home'
          className={classnames(styles.home)}
          route={Paths.home}>
          <SvgContainer svgWidth={24} svgHeight={24}>
            <HomeIcon className={styles.icon} title='home icon' />
          </SvgContainer>
        </LinkWithPageTransition>
        <div>
          <div className={classnames('d-flex space-x-xl')}>
            <LinkWithPageTransition
              className='underline-effect'
              route={Paths.about}>
              about
            </LinkWithPageTransition>
          </div>
        </div>
      </div>
    </nav>
  );
};

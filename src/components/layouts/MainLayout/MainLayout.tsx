import classnames from 'classnames';
import styles from './MainLayout.module.scss';
import { Navigation } from '@components/Navigation/Navigation';
import { Footer } from '@components/Footer/Footer';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { ThemeProvider } from '@/context/theme';
import Media from 'react-media';
import { MobileNavigation } from '@/components/MobileNavigation/MobileNavigation';

export const MainLayout: React.FC = ({ children }) => {
  const breakpoint = '(max-width: 768px)';
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <div className={classnames(['d-flex flx-j-c'])}>
        <div className={classnames(['w-full', styles.main])}>
          <Media
            queries={{
              mobile: breakpoint,
            }}>
            {(matches) => {
              return (
                <>{matches.mobile ? <MobileNavigation /> : <Navigation />}</>
              );
            }}
          </Media>
          <div className={styles.contentWrapper}>
            <div
              aria-label='page-content'
              className={classnames(['flx-g-1 flx-s-1', styles.content])}>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

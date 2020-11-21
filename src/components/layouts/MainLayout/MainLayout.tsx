import { Footer } from '@components/Footer/Footer';
import { Navigation } from '@components/Navigation/Navigation';
import classnames from 'classnames';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import React from 'react';
import Media from 'react-media';

import { MobileNavigation } from '@/components/MobileNavigation/MobileNavigation';
import { ThemeProvider } from '@/context/theme';

import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = ({ children }) => {
  const breakpoint = '(max-width: 768px)';

  // Animation (transform) values gathered from viewport scroll progress
  const { scrollYProgress } = useViewportScroll();
  const containerScale = useTransform(scrollYProgress, [0.9, 1], [1, 0.95]);
  const footerOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);

  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      <div className={classnames(['d-flex flx-j-c'])}>
        <div className={styles.bgBlock} />
        <div className={classnames(['w-full', styles.main])}>
          <Media
            queries={{ mobile: breakpoint }}
            defaultMatches={{ mobile: false }}>
            {(matches) => {
              return (
                <>{matches.mobile ? <MobileNavigation /> : <Navigation />}</>
              );
            }}
          </Media>
          <motion.div
            style={{ scale: containerScale, opacity: containerOpacity }}
            className={styles.contentWrapper}>
            <div
              aria-label='page-content'
              className={classnames(['flx-g-1 flx-s-1', styles.content])}>
              {children}
            </div>
          </motion.div>
          <motion.div
            style={{ opacity: footerOpacity }}
            className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
              <Footer />
            </div>
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
};

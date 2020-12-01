import { Footer } from '@components/Footer/Footer';
import { Navigation } from '@components/Navigation/Navigation';
import classnames from 'classnames';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import React from 'react';
import Media from 'react-media';

import { MenuDrawer } from '@/components/MenuDrawer/MenuDrawer';
import { MobileNavigation } from '@/components/MobileNavigation/MobileNavigation';
import {
  drawerReducer,
  initialDrawerState,
  MenuDrawerContext,
} from '@/context/menu-drawer';
import { ThemeProvider } from '@/context/theme';

import styles from './MainLayout.module.scss';

export const MainLayout: React.FC = ({ children }) => {
  // Breakpoint for the navigation options
  const breakpoint = '(max-width: 768px)';

  // Animation (transform) values gathered from viewport scroll progress
  // TODO: Change scaleY value to be more consistent (scaleX is fine)
  // Consistent meaning, the Y axis transform shouldn't be relative to the
  // page height
  const { scrollYProgress } = useViewportScroll();
  const containerScale = useTransform(scrollYProgress, [0.9, 1], [1, 0.95]);
  const footerOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);

  // * State Management for Drawer
  const [drawerState, dispatch] = React.useReducer(
    drawerReducer,
    initialDrawerState,
  );

  const value = React.useMemo(
    () => ({
      drawerState,
      dispatch,
    }),
    [drawerState],
  );

  return (
    <ThemeProvider>
      <MenuDrawerContext.Provider value={value}>
        <DefaultSeo {...SEO} />
        <div className={styles.layoutContainer}>
          {/* <MenuDrawer /> */}
          <div
            data-drawer-status={drawerState.status}
            className={classnames([
              'd-flex flx-j-c w-full',
              styles.siteContent,
            ])}>
            <div className={styles.bgBlock} />
            <div className={classnames(['w-full', styles.main])}>
              <Media
                queries={{ mobile: breakpoint }}
                defaultMatches={{ mobile: false }}>
                {(matches) => {
                  return (
                    <>
                      {matches.mobile ? <MobileNavigation /> : <Navigation />}
                    </>
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
        </div>
      </MenuDrawerContext.Provider>
    </ThemeProvider>
  );
};

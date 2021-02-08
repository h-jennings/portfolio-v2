import {
  pageContentTransitionVariants,
  wipeTransitionVariants,
} from '@/animation/page-transition';
import { MenuDrawer } from '@/components/MenuDrawer/MenuDrawer';
import { MobileNavigation } from '@/components/MobileNavigation/MobileNavigation';
import { PageLoader } from '@/components/PageLoader/PageLoader';
import { usePageWiper } from '@/context/page-wiper';
import { projects } from '@/data/projects';
import { getCurrentProject, getNextProject } from '@/helpers/get-projects';
import { useInitialPageLoadingMachine } from '@/machines/initial-page-loading-machine';
import { Footer } from '@components/Footer/Footer';
import { Navigation } from '@components/Navigation/Navigation';
import classnames from 'classnames';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { useRouter } from 'next/router';
import React from 'react';
import Media from 'react-media';
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

  const { pathname } = useRouter();

  const currentProject = React.useMemo(
    () => getCurrentProject(projects, pathname),
    [pathname],
  );
  const nextProject = React.useMemo(
    () => getNextProject(projects, currentProject),
    [currentProject],
  );

  const { state: wiperState } = usePageWiper();

  const [current, ,] = useInitialPageLoadingMachine();

  return (
    <>
      <DefaultSeo {...SEO} />
      <motion.div
        initial='initial'
        animate='enter'
        exit='exit'
        variants={pageContentTransitionVariants}
        className={styles.layoutContainer}>
        <div
          className={classnames('d-flex flx-j-c w-full', styles.siteContent)}>
          <div className={styles.bgBlock} />
          <div className={classnames('w-full', styles.main)}>
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
                className={classnames('flx-g-1 flx-s-1', styles.content, {
                  [styles.pagePad]: !nextProject,
                })}>
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
        <MenuDrawer />
      </motion.div>
      {/* PAGE TRANSITION ELEMENT */}
      <motion.div
        animate={wiperState.status}
        variants={wipeTransitionVariants}
        className={styles.wipe}
      />
      <div className='hide-if-empty'>
        <PageLoader current={current} />
      </div>
    </>
  );
};

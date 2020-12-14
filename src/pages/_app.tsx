import '@scss/index.scss';

import styles from '@scss/pages/App.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import { wipeTransitionVariants } from '@/animation/page-transition';
import { PageWithLayoutType } from '@/components/layouts/layout.model';
import {
  drawerReducer,
  initialDrawerState,
  MenuDrawerContext,
} from '@/context/menu-drawer';
import {
  initialPageWiperState,
  PageWiperContext,
  pageWiperReducer,
  usePageWiperEffects,
} from '@/context/page-wiper';
import { ThemeProvider } from '@/context/theme';

interface AppLayoutProps {
  Component: PageWithLayoutType;
  pageProps: any;
}

const MyApp: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  React.useEffect(function setVisualViewportVariable() {
    const root = document.documentElement;

    const setVisualVhProperty = (): void => {
      const vizVh = window?.visualViewport?.height;
      root.style.setProperty('--vizVh', `${vizVh}px`);
    };

    setVisualVhProperty();

    window.addEventListener('resize', setVisualVhProperty);

    return () => window.removeEventListener('resize', setVisualVhProperty);
  }, []);

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

  const [wiperState, wiperDispatch] = React.useReducer(
    pageWiperReducer,
    initialPageWiperState,
  );
  usePageWiperEffects({ state: wiperState, dispatch: wiperDispatch });
  const { route } = useRouter();
  return (
    <ThemeProvider>
      <PageWiperContext.Provider
        value={{ state: wiperState, dispatch: wiperDispatch }}>
        <MenuDrawerContext.Provider value={value}>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Component {...pageProps} key={route} />
          </AnimatePresence>
          {/* PAGE TRANSITION ELEMENT */}
          <motion.div
            data-status={wiperState.status}
            animate={wiperState.status}
            variants={wipeTransitionVariants}
            className={styles.wipe}
          />
        </MenuDrawerContext.Provider>
      </PageWiperContext.Provider>
    </ThemeProvider>
  );
};

export default MyApp;

import '@scss/index.scss';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import { PageWithLayoutType } from '@/components/layouts/layout.model';
import {
  drawerReducer,
  initialDrawerState,
  MenuDrawerContext,
} from '@/context/menu-drawer';
import { ThemeProvider } from '@/context/theme';

interface AppLayoutProps {
  Component: PageWithLayoutType;
  pageProps: any;
}

const MyApp: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  React.useEffect(function setVisualViewportVariable() {
    const root = document.documentElement;

    const setVisualVhProperty = (): void => {
      const vizVh = window.visualViewport.height;
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

  const { route } = useRouter();
  return (
    <ThemeProvider>
      <MenuDrawerContext.Provider value={value}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={route} />
        </AnimatePresence>
      </MenuDrawerContext.Provider>
    </ThemeProvider>
  );
};

export default MyApp;

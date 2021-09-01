import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MenuDrawerProvider } from '@/context/menu-drawer';
import { PageWiperProvider } from '@/context/page-wiper';
import { ThemeProvider } from '@/context/theme';
import { useVisualViewportHeight } from '@/helpers/use-visual-viewport-height';
import {
  initialPageLoadingMachine,
  InitialPageLoadingMachineContext,
} from '@/machines/initial-page-loading-machine';
import '@scss/index.scss';
import { useMachine } from '@xstate/react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { globalCss } from 'stitches.config';

const globalStyles = globalCss({});

interface AppLayoutProps {
  Component: PageWithLayoutType;
  pageProps: any;
}

const MyApp: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  const { route } = useRouter();

  useVisualViewportHeight();

  const [current, send] = useMachine(initialPageLoadingMachine);

  // TODO: Create custom hook (need to pass values from useMachine)
  React.useEffect(function initPageAnimation() {
    if (current.matches('idle')) {
      send('INIT');
    }
  });

  return (
    <ThemeProvider>
      <InitialPageLoadingMachineContext.Provider value={[current, send]}>
        <PageWiperProvider>
          <MenuDrawerProvider>
            <AnimatePresence initial={true}>
              <Component {...pageProps} key={route} />
            </AnimatePresence>
          </MenuDrawerProvider>
        </PageWiperProvider>
      </InitialPageLoadingMachineContext.Provider>
    </ThemeProvider>
  );
};

export default MyApp;

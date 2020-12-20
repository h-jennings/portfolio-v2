import '@scss/index.scss';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MenuDrawerProvider } from '@/context/menu-drawer';
import { PageWiperProvider } from '@/context/page-wiper';
import { ThemeProvider } from '@/context/theme';
import { useVisualViewportHeight } from '@/helpers/use-visual-viewport-height';

interface AppLayoutProps {
  Component: PageWithLayoutType;
  pageProps: any;
}

const MyApp: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  const { route } = useRouter();

  useVisualViewportHeight();

  return (
    <ThemeProvider>
      <PageWiperProvider>
        <MenuDrawerProvider>
          <AnimatePresence initial={false}>
            <Component {...pageProps} key={route} />
          </AnimatePresence>
        </MenuDrawerProvider>
      </PageWiperProvider>
    </ThemeProvider>
  );
};

export default MyApp;

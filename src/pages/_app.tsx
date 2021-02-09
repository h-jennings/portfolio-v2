import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { WithPageAnimations } from '@/components/WithPageAnimations/WithPageAnimations';
import { InitialPageLoaderProvider } from '@/context/initial-page-loader-context';
import { MenuDrawerProvider } from '@/context/menu-drawer';
import { PageWiperProvider } from '@/context/page-wiper';
import { ThemeProvider } from '@/context/theme';
import { pagesMetaData } from '@/data/seo-data';
import { useVisualViewportHeight } from '@/helpers/use-visual-viewport-height';
import { initialPageLoaderMachine } from '@/machines/initial-page-loading-machine';
import '@scss/index.scss';
import { useMachine } from '@xstate/react';
import { DefaultSeo, NextSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { useRouter } from 'next/router';
import React from 'react';

interface AppLayoutProps {
  Component: PageWithLayoutType;
  pageProps: any;
}

const MyApp: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  useVisualViewportHeight();
  const [current, send] = useMachine(initialPageLoaderMachine);
  const { route } = useRouter();

  React.useEffect(() => {
    send('INIT');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const PageSEO = React.useMemo(() => {
    const routeName = route.replace(/\//, '');
    const seo = Object.entries(pagesMetaData).filter(([key, ,]) => {
      return key === routeName;
    });
    return seo[0]?.[1] ?? null;
  }, [route]);
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo {...PageSEO} />
      <InitialPageLoaderProvider machine={{ current, send }}>
        <ThemeProvider>
          <PageWiperProvider>
            <MenuDrawerProvider>
              <WithPageAnimations>
                <Component {...pageProps} />
              </WithPageAnimations>
            </MenuDrawerProvider>
          </PageWiperProvider>
        </ThemeProvider>
      </InitialPageLoaderProvider>
    </>
  );
};

export default MyApp;

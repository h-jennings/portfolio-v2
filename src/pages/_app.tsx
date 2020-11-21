import '@scss/index.scss';

import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';

interface AppLayoutProps {
  Component: PageWithLayoutType;
  pageProps: any;
}

const MyApp: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;

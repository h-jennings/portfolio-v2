import '@scss/index.scss';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { PageWithLayoutType } from '@/components/layout/layout.model';

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
};

const MyApp: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => <MainLayout pageTitle='Portfolio'>{page}</MainLayout>);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;

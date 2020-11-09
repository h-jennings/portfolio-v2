import classnames from 'classnames';
import styles from './MainLayout.module.scss';
import { Navigation } from '@components/Navigation/Navigation';
import Head from 'next/head';

export const MainLayout: React.FC<{ pageTitle: string }> = ({
  children,
  pageTitle,
}) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{pageTitle}</title>
      </Head>
      <div className={classnames(['d-flex flx-j-c', styles.wrapper])}>
        <div className={classnames(['w-full w-max-xl', styles.main])}>
          <Navigation />
          <div className={classnames(['flx-g-1 flx-s-1'])}>{children}</div>
          <footer>footer</footer>
        </div>
      </div>
    </>
  );
};
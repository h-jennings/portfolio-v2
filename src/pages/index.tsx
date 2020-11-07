import Link from 'next/link';
import Head from 'next/head';
import styles from '@scss/pages/Home.module.scss';
import classnames from 'classnames';
import { MainLayout } from '@/components/layout/MainLayout/MainLayout';
import { PageWithLayoutType } from '@/components/layout/layout.model';

const Home: React.FC = () => {
  return (
    <div className={classnames(['d-block p-x-xl', styles.container])}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1
          data-testid='headline'
          className={classnames(
            'c-orange fw-bold m-b-xl ta-center lg-compact',
            styles.title,
          )}>
          Welcome to Next.js!
        </h1>
        <Link href='about'>
          <a>about</a>
        </Link>
        <p className={classnames('c-blue', styles.description)}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return (
    <MainLayout>
      <div className='testing'>testing</div>
      {page}
    </MainLayout>
  );
};
export default Home;

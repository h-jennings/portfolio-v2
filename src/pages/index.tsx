import styles from '@scss/pages/Home.module.scss';
import classnames from 'classnames';

import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className='d-flex flx-j-fe'>
        <h1 className={classnames(['ta-r', styles.headline])}>
          <span className={classnames(['d-block'])}>Front End</span>
          <span className={classnames(['d-block'])}>Engineer</span>
        </h1>
      </div>
      <p className={classnames(['fz-base', styles.intro])}>
        Hunter Jennings is currently working at Guidehouse in Washington D.C.{' '}
        <span role='img' aria-label='American Flag emoji'>
          🇺🇸
        </span>
      </p>
    </div>
  );
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

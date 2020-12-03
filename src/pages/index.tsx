import styles from '@scss/pages/Home.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';

import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { RevealText } from '@/components/RevealText/RevealText';
import { SelectedWorkList } from '@/components/SelectedWorkList/SelectedWorkList';
import { Projects, projects } from '@/data/projects';
import { useScrollToTop } from '@/helpers/use-scroll-to-top';

interface HomeProps {
  projects: Projects;
}

const Home: NextPage<HomeProps> = () => {
  useScrollToTop();

  return (
    <MainLayout>
      <section className={classnames(['p-relative', styles.container])}>
        <div className='d-flex flx-j-fe'>
          <h1 className={classnames(['ta-r md:m-b-lg', styles.headline])}>
            <span className='d-block'>Front End</span>
            <span className='d-block'>Engineer</span>
          </h1>
        </div>
        <div className={classnames(['p-absolute', styles.intro])}>
          <p className={classnames(['fz-base'])}>
            Hunter Jennings is currently working at Guidehouse in Washington
            D.C.{' '}
            <span role='img' aria-label='American Flag emoji'>
              🇺🇸
            </span>
          </p>
        </div>
      </section>
      <section
        id='selected-work'
        className={classnames(['p-t-xxl md:p-t-lg', styles.work])}>
        <h1
          className={classnames([
            'fz-lg m-b-xxl md:m-b-lg',
            styles.workHeadline,
          ])}>
          <RevealText>Selected Work</RevealText>
        </h1>
        <SelectedWorkList projects={projects} />
      </section>
    </MainLayout>
  );
};

Home.getInitialProps = async () => {
  const proj = projects;

  return {
    projects: proj,
  };
};

export default Home;

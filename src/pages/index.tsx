import styles from '@scss/pages/Home.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';

import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { WithPageAnimation } from '@/components/layouts/WithPageAnimation/WithPageAnimation';
import { RevealBox } from '@/components/RevealBox/RevealBox';
import { RevealText } from '@/components/RevealText/RevealText';
import { SelectedWorkList } from '@/components/SelectedWorkList/SelectedWorkList';
import { Projects, projects } from '@/data/projects';

interface HomeProps {
  projects: Projects;
}

const Home: NextPage<HomeProps> = () => {
  return (
    <WithPageAnimation>
      <section className={classnames(['p-relative', styles.container])}>
        <div className='d-flex flx-j-fe'>
          <h1 className={classnames(['ta-r md:m-b-lg', styles.headline])}>
            <RevealText>Front End</RevealText>
            <RevealText>Engineer</RevealText>
          </h1>
        </div>
        <div className={classnames(['p-absolute', styles.intro])}>
          <RevealBox>
            <p className={classnames(['fz-base'])}>
              Hunter Jennings is currently working at Guidehouse in Washington
              D.C.{' '}
              <span role='img' aria-label='American Flag emoji'>
                🇺🇸
              </span>
            </p>
          </RevealBox>
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
    </WithPageAnimation>
  );
};

Home.getInitialProps = async () => {
  const proj = projects;

  return {
    projects: proj,
  };
};

(Home as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

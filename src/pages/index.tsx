import { ArrowWithCircle } from '@/components/ArrowWithCircle/ArrowWithCircle';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { SelectedWorkList } from '@/components/SelectedWorkList/SelectedWorkList';
import { Projects, projects } from '@/data/projects';
import { useScrollToTop } from '@/helpers/use-scroll-to-top';
import { Paths } from '@/models/paths';
import {
  RevealContainerOnEnter,
  RevealTextOverflowInView,
  RevealTextOverflowOnEnter,
} from '@components/Reveal/Reveal';
import styles from '@scss/pages/Home.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

interface HomeProps {
  projects: Projects;
}

const Home: NextPage<HomeProps> = () => {
  useScrollToTop();

  const [shouldRenderHoverImage, setShouldRenderHoverImage] = React.useState<
    boolean
  >(false);

  return (
    <MainLayout>
      <section className={classnames('p-relative', styles.container)}>
        <div className={classnames('d-flex flx-j-fe', styles.headlineWrapper)}>
          <h1 className={classnames('ta-r md:m-b-xl', styles.headline)}>
            <span className={classnames('d-block', styles.first)}>
              <RevealTextOverflowOnEnter>Front End</RevealTextOverflowOnEnter>
            </span>
            <span className='d-block'>
              <RevealTextOverflowOnEnter>Engineer</RevealTextOverflowOnEnter>
            </span>
          </h1>
        </div>
        <div className={classnames('p-absolute', styles.intro)}>
          <RevealContainerOnEnter>
            <p className={classnames('fz-base')}>
              Hunter Jennings is currently working at Guidehouse in Washington
              D.C.{' '}
              <span role='img' aria-label='American Flag emoji'>
                🇺🇸
              </span>
            </p>
          </RevealContainerOnEnter>
        </div>
        <Link href={Paths.work}>
          <a
            aria-label='selected work link'
            className={classnames('link-reset p-absolute', styles.arrowButton)}>
            <ArrowWithCircle />
          </a>
        </Link>
      </section>
      <section
        id='selected-work'
        onMouseOver={() => setShouldRenderHoverImage(true)}
        onMouseLeave={() => setShouldRenderHoverImage(false)}
        onFocus={() => setShouldRenderHoverImage(true)}
        className={classnames('p-t-xxl md:p-t-lg', styles.work)}>
        <h1
          className={classnames(
            'fz-lg m-b-xxl md:m-b-lg',
            styles.workHeadline,
          )}>
          <RevealTextOverflowInView>Selected Work</RevealTextOverflowInView>
        </h1>
        <SelectedWorkList
          projects={projects}
          shouldRenderHoverImage={shouldRenderHoverImage}
        />
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

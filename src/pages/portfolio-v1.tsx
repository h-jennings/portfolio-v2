import styles from '@scss/pages/Portfolio-v1.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import { ProjectLayout } from '@/components/layouts/ProjectLayout/ProjectLayout';
import {
  SplitContentLeft,
  SplitContentRight,
  SplitLayout,
} from '@/components/layouts/SplitLayout/SplitLayout';
import { ProjectNavigationLinks } from '@/components/ProjectNavigationLinks/ProjectNavigationLinks';
import { ResponsiveImage } from '@/components/ResponsiveImage/ResponsiveImage';
import { Projects, projects } from '@/data/projects';
import { decodeHtml } from '@/helpers/decode-html';
import {
  getCurrentProject,
  getNextProject,
  getPreviousProject,
} from '@/helpers/get-projects';

interface PortfolioV1Props {
  projects: Projects;
  pathname: string;
}

const PortfolioV1: NextPage<PortfolioV1Props> = ({ projects, pathname }) => {
  const currentProject = React.useMemo(
    () => getCurrentProject(projects, pathname),
    [projects, pathname],
  );
  const nextProject = React.useMemo(
    () => getNextProject(projects, currentProject),
    [projects, currentProject],
  );
  const prevProject = React.useMemo(
    () => getPreviousProject(projects, currentProject),
    [projects, currentProject],
  );

  // * SEO
  const title = `Portfolio ${decodeHtml('&mdash;')} V1`;
  const description = 'My first portfolio, created in 2019.';
  const SEO = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };

  const imagePlaceholderBackgroundColor = '#f72d2e';

  return (
    <ProjectLayout>
      <NextSeo {...SEO} />
      <SplitLayout>
        <SplitContentLeft>
          <h1 className='m-b-xl md:m-b-md'>Portfolio V1</h1>
          <h2 className='m-b-lg lh-default'>{description}</h2>

          <div className={classnames(['d-flex space-x-lg', styles.details])}>
            <ProjectNavigationLinks next={nextProject} previous={prevProject} />

            {/* make component */}
            <div style={{ flex: 1 }}>
              <ul className='space-y-md'>
                <li>
                  <h3 className='m-b-sm'>What I Did</h3>
                  <p>Design and Development</p>
                </li>
                <li>
                  <h3 className='m-b-sm'>Tech</h3>
                  <p>React, Sass, Framer Motion, Webpack</p>
                </li>
              </ul>
            </div>
          </div>
        </SplitContentLeft>
        <SplitContentRight>
          <div className={styles.mediaContainer}>
            <div className={styles.image1}>
              <ResponsiveImage
                height={1160}
                width={1450}
                src='/images/portfolio-v1/portfolio-v1-mobile-images.jpg'
                altText='screenshot of caffeinator homepage'
                bgColor={imagePlaceholderBackgroundColor}
              />
            </div>
            <div className={styles.image2}>
              <ResponsiveImage
                height={646}
                width={808}
                src='/images/portfolio-v1/portfolio-v1-logo.jpg'
                altText='screenshot of caffeinator homepage'
                bgColor={imagePlaceholderBackgroundColor}
              />
            </div>
            <div className={styles.text1}>
              <p>
                My goal for this project was simple: I wanted to learn the
                concept of hierarchal finite state machines. To accomplish this,
                I chose to use the growing JavaScript library: XState. In order
                to learn the ins-and-outs of the programming concept, I decided
                to make an app that was complex enough to go beyond the basics,
                but still be a reasonable side project.
              </p>
            </div>
            <div className={styles.text2}>
              <p className={styles.text2}>
                The bulk of the application is essentially a gigantic state
                machine with complex transitions based on user interactions and
                time. This project completely changed the way I think about
                front end interactions and application state. Since completing
                this app, I&apos;ve taken these concepts and applied them to
                production-level applications due to their framework-agnostic
                nature.
              </p>
            </div>
            <div className={styles.image3}>
              <ResponsiveImage
                height={2529}
                width={1857}
                src='/images/portfolio-v1/portfolio-v1-full.png'
                altText='screenshot of caffeinator homepage'
                bgColor={imagePlaceholderBackgroundColor}
              />
            </div>
          </div>
        </SplitContentRight>
      </SplitLayout>
    </ProjectLayout>
  );
};

PortfolioV1.getInitialProps = async ({ pathname }) => {
  const proj = projects;

  return {
    projects: proj,
    pathname,
  };
};
(PortfolioV1 as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default PortfolioV1;

import styles from '@scss/pages/Caffeinator.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

import { FullscreenLink } from '@/components/FullscreenLink/FullscreenLink';
import { PageWithLayoutType } from '@/components/layouts/layout.model';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
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

type CaffeinatorProps = {
  projects: Projects;
  pathname: string;
};

const Caffeinator: NextPage<CaffeinatorProps> = ({ projects, pathname }) => {
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

  const projectName = currentProject.name;

  const imagePlaceholderBackgroundColor = '#FFB959';
  const title = `Portfolio ${decodeHtml('&mdash;')} Caffeinator`;
  const description = 'An app for building the perfect cup of coffee.';
  const SEO = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <SplitLayout>
        <SplitContentLeft>
          <h1 className='m-b-xl md:m-b-md'>{projectName ?? 'Project'}</h1>
          <h2 className='m-b-lg lh-default'>
            An app for building the perfect cup of coffee.
          </h2>
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
                  <p>React, TypeScript, XState, Sass, Framer Motion, Webpack</p>
                </li>
              </ul>
            </div>
          </div>
        </SplitContentLeft>
        <SplitContentRight>
          <div className={styles.mediaContainer}>
            <div className={styles.image1}>
              <ResponsiveImage
                height={816}
                width={1450}
                src='/images/caffeinator/caffeinator-image-1.png'
                altText='screenshot of caffeinator homepage'
                bgColor={imagePlaceholderBackgroundColor}
              />
            </div>
            <div className={styles.image2}>
              <ResponsiveImage
                height={646}
                width={808}
                src='/images/caffeinator/caffeinator-image-2.png'
                altText='screenshot of caffeinator homepage'
                bgColor={imagePlaceholderBackgroundColor}
              />
            </div>
            <p className={styles.text1}>
              My goal for this project was simple: I wanted to learn the concept
              of hierarchal finite state machines. To accomplish this, I chose
              to use the growing JavaScript library: XState. In order to learn
              the ins-and-outs of the programming concept, I decided to make an
              app that was complex enough to go beyond the basics, but still be
              a reasonable side project.
            </p>
            <p className={styles.text2}>
              The bulk of the application is essentially a gigantic state
              machine with complex transitions based on user interactions and
              time. This project completely changed the way I think about front
              end interactions and application state. Since completing this app,
              I&apos;ve taken these concepts and applied them to
              production-level applications due to their framework-agnostic
              nature.
            </p>
            <div className={styles.image3}>
              <ResponsiveImage
                height={1160}
                width={1450}
                src='/images/caffeinator/caffeinator-image-3.png'
                altText='screenshot of caffeinator homepage'
                bgColor={imagePlaceholderBackgroundColor}
              />
            </div>
            <p className={classnames(['fz-base', styles.text3])}>
              The original concept of Hierarchal Finite State Machines
              (Statecharts) was formalized in the 1980s by computer scientist,
              David Harel.
            </p>
            <div className={styles.image4}>
              <ResponsiveImage
                height={696}
                width={1236}
                src='/images/caffeinator/caffeinator-image-4.png'
                altText='screenshot of caffeinator homepage'
                bgColor={imagePlaceholderBackgroundColor}
              />
            </div>
          </div>
        </SplitContentRight>
      </SplitLayout>
      {nextProject ? (
        <FullscreenLink
          cta='Explore next project'
          href={nextProject.path}
          title={nextProject.name}
          imageWidth={nextProject.preview.width}
          imageHeight={nextProject.preview.height}
          alt='Picture of me'
          src={nextProject.preview.src}
        />
      ) : null}
    </>
  );
};

Caffeinator.getInitialProps = async ({ pathname }) => {
  const proj = projects;

  return {
    projects: proj,
    pathname,
  };
};

(Caffeinator as PageWithLayoutType).getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Caffeinator;

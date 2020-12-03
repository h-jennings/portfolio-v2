import styles from '@scss/pages/Portfolio-v1.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

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
import { useScrollToTop } from '@/helpers/use-scroll-to-top';

interface DoD {
  projects: Projects;
  pathname: string;
}

const DoD: NextPage<DoD> = ({ projects, pathname }) => {
  useScrollToTop();

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
  const title = `Portfolio ${decodeHtml('&mdash;')} DoD`;
  const description =
    'Web application for the next generation of defense technology';
  const SEO = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };

  const imagePlaceholderBackgroundColor = '#969eaa';

  return (
    <MainLayout>
      <ProjectLayout>
        <NextSeo {...SEO} />
        <SplitLayout>
          <SplitContentLeft>
            <h1 className='m-b-xl md:m-b-md'>{currentProject.name}</h1>
            <h2 className='m-b-lg lh-default'>{description}</h2>

            <div className={classnames(['d-flex space-x-lg', styles.details])}>
              <ProjectNavigationLinks
                next={nextProject}
                previous={prevProject}
              />

              {/* make component */}
              <div style={{ flex: 1 }}>
                <ul className='space-y-md'>
                  <li>
                    <h3 className='m-b-sm'>What I Did</h3>
                    <p>Front End Development</p>
                  </li>
                  <li>
                    <h3 className='m-b-sm'>Tech</h3>
                    <p>
                      Angular, TypeScript, NgRx, Jest, Testing Library, Sass,
                      D3, Azure AD
                    </p>
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
                  src='/images/f35/f35-devices-images.jpg'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </div>
              <div className={styles.image2}>
                <ResponsiveImage
                  height={646}
                  width={808}
                  src='/images/f35/f35-logo.jpg'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </div>
              <div className={styles.text1}>
                <p>
                  The F-35 Joint Strike Fighter Program needed a way to make
                  sense of data disseminated across a massive, multi-decade long
                  project to create the next generation of defense technology.
                </p>
              </div>
              <div className={styles.text2}>
                <p>
                  The application is dynamic hub of critical insights and
                  information built with cutting-edge web technology. Using
                  interactive visualizations, world class design, and
                  information hierarchy, the application cuts through the noise
                  and provides stakeholders with a single source of truth about
                  the aircraft they need insights on.
                </p>
              </div>
              <div className={styles.image3}>
                <ResponsiveImage
                  height={1160}
                  width={1450}
                  src='/images/f35/f35-mobile-phones.jpg'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </div>
            </div>
          </SplitContentRight>
        </SplitLayout>
      </ProjectLayout>
    </MainLayout>
  );
};

DoD.getInitialProps = async ({ pathname }) => {
  const proj = projects;

  return {
    projects: proj,
    pathname,
  };
};

export default DoD;

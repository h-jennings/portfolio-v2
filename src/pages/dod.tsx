import styles from '@scss/pages/Portfolio-v1.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

import { FullscreenLink } from '@/components/FullscreenLink/FullscreenLink';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';
import {
  SplitContentLeft,
  SplitContentRight,
  SplitLayout,
} from '@/components/layouts/SplitLayout/SplitLayout';
import { ProjectNavigationLinks } from '@/components/ProjectNavigationLinks/ProjectNavigationLinks';
import { ResponsiveImage } from '@/components/ResponsiveImage/ResponsiveImage';
import {
  RevealContainerInView,
  RevealContainerOnEnter,
  RevealDiffContainerMethodsAtBreakpoint,
  RevealTextOverflowOnEnter,
} from '@/components/Reveal/Reveal';
import { RevealBox } from '@/components/RevealBox/RevealBox';
import { Projects, projects } from '@/data/projects';
import { decodeHtml } from '@/helpers/decode-html';
import { useProjects } from '@/helpers/use-projects';
import { useScrollToTop } from '@/helpers/use-scroll-to-top';

interface DoD {
  projects: Projects;
  pathname: string;
}

const DoD: NextPage<DoD> = ({ projects, pathname }) => {
  useScrollToTop();

  const { currentProject, nextProject, previousProject } = useProjects(
    projects,
    pathname,
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
      <NextSeo {...SEO} />
      <SplitLayout>
        <SplitContentLeft>
          <h1 className='m-b-xl md:m-b-md'>
            <RevealTextOverflowOnEnter>
              {currentProject?.name}
            </RevealTextOverflowOnEnter>
          </h1>
          <RevealContainerOnEnter>
            <h2 className='m-b-lg lh-default'>{description}</h2>
          </RevealContainerOnEnter>

          <div className={classnames('d-flex space-x-lg', styles.details)}>
            <RevealContainerOnEnter>
              <ProjectNavigationLinks
                next={nextProject}
                previous={previousProject}
              />
            </RevealContainerOnEnter>

            {/* make component */}
            <div style={{ flex: 1 }}>
              <ul className='space-y-md'>
                <li>
                  <RevealContainerOnEnter>
                    <h3 className='m-b-sm'>What I Did</h3>
                    <p>Front End Development</p>
                  </RevealContainerOnEnter>
                </li>
                <li>
                  <RevealContainerOnEnter>
                    <h3 className='m-b-sm'>Tech</h3>
                    <p>
                      Angular, TypeScript, NgRx, Jest, Testing Library, Sass,
                      D3, Azure AD
                    </p>
                  </RevealContainerOnEnter>
                </li>
              </ul>
            </div>
          </div>
        </SplitContentLeft>
        <SplitContentRight>
          <div className={styles.mediaContainer}>
            <div className={styles.image1}>
              <RevealContainerOnEnter>
                <ResponsiveImage
                  height={1160}
                  width={1450}
                  src='/images/f35/f35-devices-images.jpg'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </RevealContainerOnEnter>
            </div>
            <div className={styles.image2}>
              <RevealContainerInView threshold={0.4}>
                <ResponsiveImage
                  height={646}
                  width={808}
                  src='/images/f35/f35-logo.jpg'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </RevealContainerInView>
            </div>
            <div className={styles.text1}>
              <RevealDiffContainerMethodsAtBreakpoint>
                <p>
                  The F-35 Joint Strike Fighter Program needed a way to make
                  sense of data disseminated across a massive, multi-decade long
                  project to create the next generation of defense technology.
                </p>
              </RevealDiffContainerMethodsAtBreakpoint>
            </div>
            <div className={styles.text2}>
              <RevealContainerInView>
                <p>
                  The application is dynamic hub of critical insights and
                  information built with cutting-edge web technology. Using
                  interactive visualizations, world class design, and
                  information hierarchy, the application cuts through the noise
                  and provides stakeholders with a single source of truth about
                  the aircraft they need insights on.
                </p>
              </RevealContainerInView>
            </div>
            <div className={styles.image3}>
              <RevealContainerInView>
                <ResponsiveImage
                  height={1160}
                  width={1450}
                  src='/images/f35/f35-mobile-phones.jpg'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </RevealContainerInView>
            </div>
          </div>
        </SplitContentRight>
      </SplitLayout>
      {nextProject ? (
        <RevealBox>
          <FullscreenLink
            cta='Explore next project'
            href={nextProject.path}
            title={nextProject.name}
            imageWidth={nextProject.preview.width}
            imageHeight={nextProject.preview.height}
            alt='Picture of me'
            src={nextProject.preview.src}
          />
        </RevealBox>
      ) : null}
    </MainLayout>
  );
};

DoD.getInitialProps = async ({ pathname }) => {
  return {
    projects,
    pathname,
  };
};

export default DoD;

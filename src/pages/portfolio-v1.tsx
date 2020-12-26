import styles from '@scss/pages/Portfolio-v1.module.scss';
import classnames from 'classnames';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import Media from 'react-media';

import { Button } from '@/components/Button/Button';
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
  RevealTextOverflowOnEnter,
} from '@/components/Reveal/Reveal';
import { RevealBox } from '@/components/RevealBox/RevealBox';
import { Projects, projects } from '@/data/projects';
import { decodeHtml } from '@/helpers/decode-html';
import {
  getCurrentProject,
  getNextProject,
  getPreviousProject,
} from '@/helpers/get-projects';
import { useScrollToTop } from '@/helpers/use-scroll-to-top';
import { Breakpoints } from '@/models/breakpoints';

interface PortfolioV1Props {
  projects: Projects;
  pathname: string;
}

const PortfolioV1: NextPage<PortfolioV1Props> = ({ projects, pathname }) => {
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
    <MainLayout>
      <NextSeo {...SEO} />
      <SplitLayout>
        <SplitContentLeft>
          <h1 className='m-b-xl md:m-b-md'>
            <RevealTextOverflowOnEnter>Portfolio V1</RevealTextOverflowOnEnter>
          </h1>
          <RevealContainerOnEnter>
            <h2 className='m-b-lg lh-default'>{description}</h2>
          </RevealContainerOnEnter>

          <div
            className={classnames('d-flex space-x-lg m-b-xl', styles.details)}>
            <RevealContainerOnEnter>
              <ProjectNavigationLinks
                next={nextProject}
                previous={prevProject}
              />
            </RevealContainerOnEnter>
            {/* make component */}
            <div style={{ flex: 1 }}>
              <ul className='space-y-md'>
                <li>
                  <RevealContainerOnEnter>
                    <h3 className='m-b-sm'>What I Did</h3>
                    <p>Design and Development</p>
                  </RevealContainerOnEnter>
                </li>
                <li>
                  <RevealContainerOnEnter>
                    <h3 className='m-b-sm'>Tech</h3>
                    <p>React, Sass, Framer Motion, Webpack</p>
                  </RevealContainerOnEnter>
                </li>
              </ul>
            </div>
          </div>
          <RevealContainerOnEnter>
            <Button
              target='_blank'
              rel='noopener noreferrer'
              type='link'
              href={currentProject?.externalLink ?? ''}>
              visit website
            </Button>
          </RevealContainerOnEnter>
        </SplitContentLeft>
        <SplitContentRight>
          <div className={styles.mediaContainer}>
            <div className={styles.image1}>
              <Media
                queries={{ mobile: Breakpoints.lg }}
                defaultMatches={{ mobile: false }}>
                {(matches) => {
                  const content = (
                    <ResponsiveImage
                      height={1160}
                      width={1450}
                      src='/images/portfolio-v1/portfolio-v1-mobile-images.jpg'
                      altText='screenshot of caffeinator homepage'
                      bgColor={imagePlaceholderBackgroundColor}
                    />
                  );
                  return (
                    <>
                      {matches.mobile ? (
                        <RevealContainerInView threshold={0.4}>
                          {content}
                        </RevealContainerInView>
                      ) : (
                        <RevealContainerOnEnter>
                          {content}
                        </RevealContainerOnEnter>
                      )}
                    </>
                  );
                }}
              </Media>
            </div>
            <div className={styles.image2}>
              <Media
                queries={{ mobile: Breakpoints.lg }}
                defaultMatches={{ mobile: false }}>
                {(matches) => {
                  const content = (
                    <ResponsiveImage
                      height={646}
                      width={808}
                      src='/images/portfolio-v1/portfolio-v1-logo.jpg'
                      altText='screenshot of caffeinator homepage'
                      bgColor={imagePlaceholderBackgroundColor}
                    />
                  );
                  return (
                    <>
                      {matches.mobile ? (
                        <RevealContainerInView>{content}</RevealContainerInView>
                      ) : (
                        <RevealContainerOnEnter>
                          {content}
                        </RevealContainerOnEnter>
                      )}
                    </>
                  );
                }}
              </Media>
            </div>
            <div className={styles.text1}>
              <Media
                queries={{ mobile: Breakpoints.lg }}
                defaultMatches={{ mobile: false }}>
                {(matches) => {
                  const content = (
                    <p>
                      My goal for this project was simple: I wanted to learn the
                      concept of hierarchal finite state machines. To accomplish
                      this, I chose to use the growing JavaScript library:
                      XState. In order to learn the ins-and-outs of the
                      programming concept, I decided to make an app that was
                      complex enough to go beyond the basics, but still be a
                      reasonable side project.
                    </p>
                  );
                  return (
                    <>
                      {matches.mobile ? (
                        <RevealContainerInView>{content}</RevealContainerInView>
                      ) : (
                        <RevealContainerOnEnter>
                          {content}
                        </RevealContainerOnEnter>
                      )}
                    </>
                  );
                }}
              </Media>
            </div>
            <div className={styles.text2}>
              <RevealContainerInView>
                <p className={styles.text2}>
                  The bulk of the application is essentially a gigantic state
                  machine with complex transitions based on user interactions
                  and time. This project completely changed the way I think
                  about front end interactions and application state. Since
                  completing this app, I&apos;ve taken these concepts and
                  applied them to production-level applications due to their
                  framework-agnostic nature.
                </p>
              </RevealContainerInView>
            </div>
            <div className={styles.image3}>
              <RevealContainerInView>
                <ResponsiveImage
                  height={2529}
                  width={1857}
                  src='/images/portfolio-v1/portfolio-v1-full.png'
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

PortfolioV1.getInitialProps = async ({ pathname }) => {
  const proj = projects;

  return {
    projects: proj,
    pathname,
  };
};

export default PortfolioV1;

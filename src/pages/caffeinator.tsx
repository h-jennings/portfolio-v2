import styles from '@scss/pages/Caffeinator.module.scss';
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

interface CaffeinatorProps {
  projects: Projects;
  pathname: string;
}

const Caffeinator: NextPage<CaffeinatorProps> = ({ projects, pathname }) => {
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
    <MainLayout>
      <NextSeo {...SEO} />
      <SplitLayout>
        <SplitContentLeft>
          <h1 className='m-b-xl md:m-b-md'>
            <RevealTextOverflowOnEnter>{projectName}</RevealTextOverflowOnEnter>
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
                    <p>
                      React, TypeScript, XState, Sass, Framer Motion, Webpack
                    </p>
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
                      height={816}
                      width={1450}
                      src='/images/caffeinator/caffeinator-image-1.png'
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
            <div className={styles.image2}>
              <Media
                queries={{ mobile: Breakpoints.lg }}
                defaultMatches={{ mobile: false }}>
                {(matches) => {
                  const content = (
                    <ResponsiveImage
                      height={646}
                      width={808}
                      src='/images/caffeinator/caffeinator-image-2.png'
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
                <p>
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
                  height={1160}
                  width={1450}
                  src='/images/caffeinator/caffeinator-image-3.png'
                  altText='screenshot of caffeinator homepage'
                  bgColor={imagePlaceholderBackgroundColor}
                />
              </RevealContainerInView>
            </div>
            <div className={classnames('fz-base', styles.text3)}>
              <RevealContainerInView>
                <p className='fz-base'>
                  The original concept of Hierarchal Finite State Machines
                  (Statecharts) was formalized in the 1980s by computer
                  scientist, David Harel.
                </p>
              </RevealContainerInView>
            </div>
            <div className={styles.image4}>
              <RevealContainerInView>
                <ResponsiveImage
                  height={696}
                  width={1236}
                  src='/images/caffeinator/caffeinator-image-4.png'
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

Caffeinator.getInitialProps = async ({ pathname }) => {
  const proj = projects;

  return {
    projects: proj,
    pathname,
  };
};

export default Caffeinator;
